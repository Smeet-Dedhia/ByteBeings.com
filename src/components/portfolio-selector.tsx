"use client"

import { useEffect, useRef } from "react"

/**
 * Portfolio Selector - React Component Wrapper
 * 
 * Wraps the vanilla JS PortfolioSelector for use in Next.js/React
 * Maintains the same barrel animation effect with scroll interaction
 */

interface PortfolioSelectorProps {
  items: string[]
  initialIndex?: number
  onSelect?: (item: string, index: number, isInitial: boolean) => void
  className?: string
}

export function PortfolioSelector({ 
  items, 
  initialIndex = 0,
  onSelect,
  className = "" 
}: PortfolioSelectorProps) {
  const containerRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const viewport = container.querySelector(".selector-viewport") as HTMLElement | null
    const track = viewport?.querySelector(".selector-track") as HTMLElement | null
    if (!viewport || !track) return

    track.innerHTML = ""

    const itemElements = items.map((item, index) => {
      const element = document.createElement("div")
      element.className = "selector-item"
      element.textContent = item
      element.dataset.index = index.toString()
      track.appendChild(element)
      return element
    })

    // Start at the initial index (from URL param or default 0)
    let currentIndex = Math.max(0, Math.min(initialIndex, items.length - 1))
    let isFirstUpdate = true
    let isScrolling = false
    let scrollTimeout: NodeJS.Timeout | null = null
    let lastWheelAt = 0
    const wheelLockMs = 750

    const fitViewportWidth = () => {
      const line = container.closest(".portfolio-line") as HTMLElement | null
      const label = line?.querySelector(".portfolio-label") as HTMLElement | null

      if (!line) return

      const containerWidth =
        line.parentElement?.getBoundingClientRect().width ??
        line.getBoundingClientRect().width
      const computed = getComputedStyle(line)
      const gap = parseFloat(computed.columnGap || computed.gap || "0")

      const available =
        computed.flexDirection === "column" || !label
          ? Math.max(140, containerWidth)
          : Math.max(80, containerWidth - label.getBoundingClientRect().width - gap)

      viewport.style.setProperty("--selector-width", `${available}px`)
    }

    const fitCenterItem = () => {
      const centerItem = container.querySelector(
        ".selector-item.center"
      ) as HTMLElement | null
      if (!centerItem) return

      // Slightly smaller range so long labels fit better on narrow screens
      // Use em to stay relative to inherited font-size
      const maxSize = 1.0
      const minSize = 0.6
      const availableWidth = viewport.clientWidth * 0.92

      centerItem.style.fontSize = `${maxSize}em`
      const textWidth = centerItem.scrollWidth

      if (textWidth > availableWidth) {
        const scale = Math.max(
          minSize,
          Math.min(maxSize, (availableWidth / textWidth) * maxSize)
        )
        centerItem.style.fontSize = `${scale}em`
      }
    }

    const updateItems = () => {
      const totalItems = items.length
      
      itemElements.forEach((element, index) => {
        element.classList.remove("center", "top", "bottom", "hidden")

        // Calculate circular relative position
        let relativePosition = index - currentIndex
        
        // Handle circular wrapping
        if (relativePosition > totalItems / 2) {
          relativePosition -= totalItems
        } else if (relativePosition < -totalItems / 2) {
          relativePosition += totalItems
        }
        
        // Special case for exact halfway (when even number of items)
        if (totalItems % 2 === 0 && Math.abs(relativePosition) === totalItems / 2) {
          // Prefer showing as bottom for consistency
          relativePosition = totalItems / 2
        }

        if (relativePosition === 0) {
          element.classList.add("center")
        } else if (relativePosition === -1 || (currentIndex === 0 && index === totalItems - 1)) {
          element.classList.add("top")
        } else if (relativePosition === 1 || (currentIndex === totalItems - 1 && index === 0)) {
          element.classList.add("bottom")
        } else {
          element.classList.add("hidden")
        }
      })

      fitViewportWidth()
      fitCenterItem()

      if (onSelect) {
        onSelect(items[currentIndex], currentIndex, isFirstUpdate)
      }
      isFirstUpdate = false
    }

    const navigate = (direction: number) => {
      if (isScrolling) return

      currentIndex = (currentIndex + direction + items.length) % items.length
      updateItems()

      isScrolling = true
      if (scrollTimeout) clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        isScrolling = false
      }, 50)
    }

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault()
      const now = Date.now()
      if (now - lastWheelAt < wheelLockMs) {
        return
      }
      lastWheelAt = now
      navigate(event.deltaY > 0 ? 1 : -1)
    }

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      if (target?.closest(".selector-caret--up")) {
        navigate(-1)
        return
      }
      if (target?.closest(".selector-caret--down")) {
        navigate(1)
        return
      }
      if (target?.closest(".selector-item.top")) {
        navigate(-1)
        return
      }
      if (target?.closest(".selector-item.bottom")) {
        navigate(1)
        return
      }
      if (target?.closest(".selector-item.center")) {
        navigate(1)
        return
      }
      navigate(1)
    }

    container.addEventListener("wheel", handleWheel, { passive: false })
    container.addEventListener("click", handleClick)

    const wrapper = container.closest(".selector-wrapper")
    const handleArrowClick = (event: Event) => {
      const target = event.target as HTMLElement | null
      if (!target) return

      if (target.closest(".selector-arrow--left")) {
        navigate(-1)
      } else if (target.closest(".selector-arrow--right")) {
        navigate(1)
      }
    }

    wrapper?.addEventListener("click", handleArrowClick)

    let dragStartX: number | null = null
    let dragStartY: number | null = null

    const handlePointerDown = (event: PointerEvent) => {
      dragStartX = event.clientX
      dragStartY = event.clientY
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (dragStartX === null || dragStartY === null) return
      const deltaX = event.clientX - dragStartX
      const deltaY = event.clientY - dragStartY

      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 24) {
        navigate(deltaX > 0 ? -1 : 1)
        dragStartX = event.clientX
        dragStartY = event.clientY
      }
    }

    const handlePointerUp = () => {
      dragStartX = null
      dragStartY = null
    }

    container.addEventListener("pointerdown", handlePointerDown)
    container.addEventListener("pointermove", handlePointerMove)
    container.addEventListener("pointerup", handlePointerUp)
    container.addEventListener("pointercancel", handlePointerUp)

    const resizeObserver = new ResizeObserver(() => {
      fitViewportWidth()
      fitCenterItem()
    })

    resizeObserver.observe(container)
    updateItems()

    return () => {
      container.removeEventListener("wheel", handleWheel)
      container.removeEventListener("click", handleClick)
      wrapper?.removeEventListener("click", handleArrowClick)
      container.removeEventListener("pointerdown", handlePointerDown)
      container.removeEventListener("pointermove", handlePointerMove)
      container.removeEventListener("pointerup", handlePointerUp)
      container.removeEventListener("pointercancel", handlePointerUp)
      if (scrollTimeout) clearTimeout(scrollTimeout)
      resizeObserver.disconnect()
    }
  }, [items, initialIndex, onSelect])

  return (
    <span className={`selector-wrapper ${className}`}>
      <span className="selector-mobile-controls" aria-hidden="true">
        <button type="button" className="selector-arrow selector-arrow--left">
          &lt;
        </button>
      </span>
      <span ref={containerRef} className="portfolio-selector">
        <span className="selector-caret selector-caret--up" aria-hidden="true">&#8963;</span>
        <span className="selector-viewport">
          <span className="selector-track" />
        </span>
        <span className="selector-caret selector-caret--down" aria-hidden="true">&#8964;</span>
      </span>
      <span className="selector-mobile-controls" aria-hidden="true">
        <button type="button" className="selector-arrow selector-arrow--right">
          &gt;
        </button>
      </span>
    </span>
  )
}