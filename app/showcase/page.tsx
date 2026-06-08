"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Code2, BrainCircuit, Eye, Cpu } from "lucide-react"

const showcases = [
  {
    title: "AI Systems Engineer",
    description: "Bridging Generative AI and bare-metal compute optimization. Building blisteringly fast and scalable systems.",
    href: "/ai-software-engineer",
    image: "/images/showcase/ai-stack.png",
    icon: <Code2 className="w-5 h-5 text-amber-400" />,
    color: "from-amber-600 to-orange-600",
    badge: "Cost & Scale"
  },
  {
    title: "Reinforcement Learning",
    description: "Designing robust reward systems, execution environments, and policy optimization frameworks for AI behavior.",
    href: "/reinforcement-learning",
    image: "/images/showcase/sequel2sql.jpg",
    icon: <BrainCircuit className="w-5 h-5 text-fuchsia-400" />,
    color: "from-indigo-600 to-fuchsia-600",
    badge: "Algorithms",
    imageClassName: "object-[center_40%]"
  },
  {
    title: "Robotics & Perception",
    description: "Bridging the gap between intelligent algorithms and physical execution through edge AI and embedded systems.",
    href: "/robotics",
    image: "/images/showcase/smeet-drone-standing.jpg",
    icon: <Cpu className="w-5 h-5 text-cyan-400" />,
    color: "from-cyan-600 to-blue-600",
    badge: "Hardware & Edge"
  },
  {
    title: "Computer Vision",
    description: "Locating and classifying entities in dynamic environments, with real-time inference optimization.",
    href: "/computer-vision",
    image: "/images/showcase/cv.png",
    icon: <Eye className="w-5 h-5 text-emerald-400" />,
    color: "from-emerald-600 to-teal-600",
    badge: "Perception Pipeline"
  }
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function ShowcaseIndexPage() {
  return (
    <div className="min-h-screen bg-black text-slate-200">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/40 via-black to-black -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 sm:mb-6">
              Deep-Dive Showcases
            </h1>
            <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto font-light">
              Explore in-depth technical breakdowns of my core engineering domains, from bare-metal hardware optimization to agentic AI pipelines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Showcase Grid */}
      <section className="py-12 pb-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {showcases.map((showcase, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link href={showcase.href} className="block group">
                  <div className="relative w-full h-full">
                    {/* Hover Glow */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${showcase.color} rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200`} />

                    {/* Card Content */}
                    <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 flex flex-col h-full">
                      {/* Image Container */}
                      <div className="relative w-full aspect-[16/9] bg-black border-b border-slate-800 overflow-hidden">
                        <Image
                          src={showcase.image}
                          alt={showcase.title}
                          fill
                          className={`object-cover ${showcase.imageClassName || 'object-center'} opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105`}
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />

                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center rounded-full border border-white/20 bg-black/50 backdrop-blur-md px-3 py-1 text-xs font-medium text-white">
                            {showcase.badge}
                          </span>
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="p-6 sm:p-8 flex flex-col flex-grow">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-black rounded-lg border border-slate-800">
                            {showcase.icon}
                          </div>
                          <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-slate-200 transition-colors">
                            {showcase.title}
                          </h2>
                        </div>
                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed flex-grow mb-6">
                          {showcase.description}
                        </p>

                        <div className="flex items-center text-sm font-medium text-slate-300 group-hover:text-white transition-colors mt-auto">
                          Read Showcase
                          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
