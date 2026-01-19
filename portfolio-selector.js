/**
 * Portfolio Selector - Vertical Scroll Barrel Animation
 * 
 * Handles:
 * - Mouse wheel / trackpad scroll input
 * - Active index tracking with wrap-around
 * - Dynamic transform calculations (scale, translate, opacity)
 * - Smooth animation transitions
 */

class PortfolioSelector {
  constructor(containerId, items) {
    this.container = document.getElementById(containerId);
    this.items = items;
    this.currentIndex = 0;
    this.isScrolling = false;
    this.scrollTimeout = null;
    this.lastWheelAt = 0;
    this.wheelLockMs = 450;
    this.centerFitTimeout = null;
    
    // Animation configuration - tweak these for different feels
    this.config = {
      animationDuration: 300, // milliseconds
      scrollCooldown: 300, // Prevent rapid-fire scrolling
      enableWrapAround: true, // Loop back to start/end
    };
    
    this.init();
  }
  
  init() {
    if (!this.container) {
      console.error(`Container with id "${containerId}" not found`);
      return;
    }
    
    this.track = this.container.querySelector('.selector-track');
    if (!this.track) {
      console.error('Selector track not found');
      return;
    }

    this.measureElement = document.createElement('span');
    this.measureElement.className = 'selector-measure';
    this.measureElement.style.position = 'absolute';
    this.measureElement.style.visibility = 'hidden';
    this.measureElement.style.height = '0';
    this.measureElement.style.overflow = 'hidden';
    this.measureElement.style.whiteSpace = 'nowrap';
    this.measureElement.style.pointerEvents = 'none';
    this.container.appendChild(this.measureElement);
    
    // Create item elements
    this.createItems();
    
    // Set initial state
    this.updateItems(true);
    
    // Attach scroll listeners
    this.attachListeners();
    this.observeResize();
  }
  
  createItems() {
    // Clear existing items
    this.track.innerHTML = '';
    
    // Create a DOM element for each item
    this.itemElements = this.items.map((item, index) => {
      const element = document.createElement('div');
      element.className = 'selector-item';
      element.textContent = item;
      element.dataset.index = index;
      this.track.appendChild(element);
      return element;
    });
  }
  
  attachListeners() {
    // Mouse wheel / trackpad event
    this.container.addEventListener('wheel', (e) => {
      e.preventDefault();
      const now = Date.now();
      if (now - this.lastWheelAt < this.wheelLockMs) {
        return;
      }
      this.lastWheelAt = now;
      this.handleScroll(e.deltaY);
    }, { passive: false });
    
    // Optional: Click to navigate (bonus feature)
    this.container.addEventListener('click', () => {
      this.navigateToNext();
    });

    const wrapper = this.container.closest(".selector-wrapper");
    if (wrapper) {
      wrapper.addEventListener("click", (event) => {
        const target = event.target;
        if (!target || !(target instanceof HTMLElement)) return;

        if (target.closest(".selector-arrow--left")) {
          this.navigate(-1);
        } else if (target.closest(".selector-arrow--right")) {
          this.navigate(1);
        }
      });
    }

    let dragStartX = null;
    let dragStartY = null;

    const handlePointerDown = (event) => {
      dragStartX = event.clientX;
      dragStartY = event.clientY;
    };

    const handlePointerMove = (event) => {
      if (dragStartX === null || dragStartY === null) return;
      const deltaX = event.clientX - dragStartX;
      const deltaY = event.clientY - dragStartY;

      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 24) {
        this.navigate(deltaX > 0 ? -1 : 1);
        dragStartX = event.clientX;
        dragStartY = event.clientY;
      }
    };

    const handlePointerUp = () => {
      dragStartX = null;
      dragStartY = null;
    };

    this.container.addEventListener("pointerdown", handlePointerDown);
    this.container.addEventListener("pointermove", handlePointerMove);
    this.container.addEventListener("pointerup", handlePointerUp);
    this.container.addEventListener("pointercancel", handlePointerUp);
  }

  observeResize() {
    if (!('ResizeObserver' in window)) return;

    this.resizeObserver = new ResizeObserver(() => {
      this.fitViewportWidth();
      this.fitCenterItem();
    });

    this.resizeObserver.observe(this.container);
  }
  
  handleScroll(deltaY) {
    // Prevent over-scrolling jitter
    if (this.isScrolling) return;
    
    // Determine scroll direction
    // deltaY > 0 means scrolling down (next item)
    // deltaY < 0 means scrolling up (previous item)
    const direction = deltaY > 0 ? 1 : -1;
    
    this.navigate(direction);
  }
  
  navigate(direction) {
    const newIndex = this.getNextIndex(direction);
    
    // If wrap-around is disabled and we're at the boundary, do nothing
    if (!this.config.enableWrapAround) {
      if ((direction > 0 && this.currentIndex === this.items.length - 1) ||
          (direction < 0 && this.currentIndex === 0)) {
        return;
      }
    }
    
    this.currentIndex = newIndex;
    this.updateItems();
    this.setScrollingState();
  }
  
  navigateToNext() {
    this.navigate(1);
  }
  
  /**
   * Calculate next index with wrap-around support
   */
  getNextIndex(direction) {
    let newIndex = this.currentIndex + direction;
    
    if (this.config.enableWrapAround) {
      // Wrap around: -1 becomes last item, length becomes 0
      if (newIndex < 0) {
        newIndex = this.items.length - 1;
      } else if (newIndex >= this.items.length) {
        newIndex = 0;
      }
    } else {
      // Clamp to boundaries
      newIndex = Math.max(0, Math.min(this.items.length - 1, newIndex));
    }
    
    return newIndex;
  }
  
  /**
   * Update all item positions and styles based on current index
   * This is where the barrel illusion is created
   */
  fitCenterItem() {
    const viewport = this.container.querySelector('.selector-viewport')
    if (!viewport || !this.measureElement) return

    const maxSize = 1
    const minSize = 0.7
    const availableWidth = viewport.clientWidth * 0.92

    this.measureElement.textContent = this.items[this.currentIndex] ?? ""
    this.measureElement.style.fontSize = `${maxSize}em`
    const textWidth = this.measureElement.scrollWidth

    const scale = textWidth > availableWidth
      ? Math.max(
          minSize,
          Math.min(maxSize, (availableWidth / textWidth) * maxSize)
        )
      : maxSize

    // Use CSS custom property so stylesheet remains authoritative.
    this.container.style.setProperty("--selector-center-size", `${scale}em`)
  }

  fitViewportWidth() {
    const line = this.container.closest(".portfolio-line");
    const label = line ? line.querySelector(".portfolio-label") : null;
    const viewport = this.container.querySelector(".selector-viewport");

    if (!line || !viewport) return;

    const container = line.parentElement;
    const lineWidth = container
      ? container.getBoundingClientRect().width
      : line.getBoundingClientRect().width;
    const computed = getComputedStyle(line);
    const gap =
      parseFloat(computed.columnGap || computed.gap || "0") || 0;

    const available =
      computed.flexDirection === "column" || !label
        ? Math.max(140, lineWidth)
        : Math.max(80, lineWidth - label.getBoundingClientRect().width - gap);
    viewport.style.setProperty("--selector-width", `${available}px`);
  }

  updateItems(immediate = false) {
    this.itemElements.forEach((element, index) => {
      // Calculate relative position from center
      // 0 = center, -1 = top, +1 = bottom, etc.
      const relativePosition = index - this.currentIndex;
      
      // Remove all position classes
      element.classList.remove('center', 'top', 'bottom', 'hidden');
      
      // Apply appropriate class based on position
      if (relativePosition === 0) {
        element.classList.add('center');
      } else if (relativePosition === -1) {
        element.classList.add('top');
      } else if (relativePosition === 1) {
        element.classList.add('bottom');
      } else {
        // Items further away are hidden
        element.classList.add('hidden');
      }
    });

    this.fitViewportWidth();
    if (immediate) {
      this.fitCenterItem();
      return;
    }
    if (this.centerFitTimeout) {
      clearTimeout(this.centerFitTimeout);
    }
    this.centerFitTimeout = setTimeout(() => {
      this.fitCenterItem();
    }, this.config.animationDuration);
  }
  
  /**
   * Prevent rapid scrolling by setting a cooldown period
   */
  setScrollingState() {
    this.isScrolling = true;
    
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    
    this.scrollTimeout = setTimeout(() => {
      this.isScrolling = false;
    }, this.config.scrollCooldown);
  }

  destroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
  
  /**
   * Public method to programmatically set the selected item
   * Useful for external navigation or URL-based routing
   */
  setIndex(index) {
    if (index >= 0 && index < this.items.length) {
      this.currentIndex = index;
      this.updateItems();
    }
  }
  
  /**
   * Get the currently selected item
   */
  getCurrentItem() {
    return this.items[this.currentIndex];
  }
  
  /**
   * Get the current index
   */
  getCurrentIndex() {
    return this.currentIndex;
  }
}

// Initialize the selector when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const categories = [
    'Agentic AI',
    'Web Development',
    'Statistical Design',
    'ML Systems',
    'Research Prototypes'
  ];
  
  const selector = new PortfolioSelector('portfolio-selector', categories);
  
  // Expose selector globally for debugging or external control
  window.portfolioSelector = selector;
  
  // Optional: Log current selection on change (for debugging)
  // You can add an event system here if needed
});

/**
 * USAGE NOTES:
 * 
 * 1. To add click-to-navigate:
 *    - Already implemented in attachListeners()
 *    - Clicking the selector will advance to next item
 *    - Remove or modify if you want different behavior
 * 
 * 2. To integrate with routing:
 *    - Use selector.setIndex(index) to sync with URL params
 *    - Use selector.getCurrentItem() to get selected category
 *    - Add event listeners to selector if you implement an event system
 * 
 * 3. To customize animation:
 *    - Adjust CSS transition duration in portfolio-selector.css
 *    - Modify scale values in .selector-item.center/top/bottom
 *    - Change opacity values for different fade intensity
 *    - Tweak cubic-bezier easing function for different motion feel
 * 
 * 4. To prevent wrap-around:
 *    - Set config.enableWrapAround = false in constructor
 */