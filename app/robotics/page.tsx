"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, Cpu, Eye, GitBranch, Layers, Activity, Server } from "lucide-react"

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

export default function RoboticsShowcase() {
  return (
    <div className="min-h-screen bg-black text-slate-200 selection:bg-cyan-900 selection:text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4 sm:mb-6 pb-2">
              Showcase of Robotics & Perception
            </h1>
            <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto font-light">
              Bridging the gap between intelligent algorithms and physical execution through advanced computer vision and embedded systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dronaid Experience Section */}
      <section className="py-12 sm:py-24 border-t border-white/5 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            <div>
              <motion.div variants={fadeInUp} className="mb-6 sm:mb-8">
                <div className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-400 mb-4">
                  Experience
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2">Dronaid</h2>
                <p className="text-cyan-500 font-medium mb-1">AI Systems Engineer <span className="text-slate-500 mx-2">|</span> Manipal, India</p>
                <p className="text-sm text-slate-400">Jul 2022 - Sep 2023</p>
              </motion.div>

              <motion.ul variants={staggerContainer} className="space-y-4 sm:space-y-6">
                {[
                  { title: "Computer Vision on Edge", desc: "Integrated CV models across hardware, embedded & software layers. Improved YOLO realtime inference from 5 to 12 FPS by switching from Python to C++, tuning precision, and applying GPU optimizations (Triton, TensorRT, NSight, CUDA).", icon: <Eye className="w-5 h-5 text-cyan-400" /> },
                  { title: "Embedded Systems", desc: "Worked with Jetson Nano and Raspberry Pi to build software & CV for drones. Integrated camera & LIDAR to CV models via ROS. Deep dived into Linux camera pipelines.", icon: <Cpu className="w-5 h-5 text-cyan-400" /> },
                  { title: "CV Perception Pipeline", desc: "YOLO for object detection -> Image segmentation for precise boundaries -> DEEPSORT for tracking -> Mapping coordinates with GPS & LIDAR.", icon: <Layers className="w-5 h-5 text-cyan-400" /> },
                  { title: "Memory-Compute Profiling", desc: "System-level profiling to identify CPU, GPU, Memory, I/O bottlenecks. Troubleshooted end-to-end issues across all layers.", icon: <Activity className="w-5 h-5 text-cyan-400" /> },
                  { title: "C++ Parallel Programming", desc: "Designed multi-threaded processing to separate capture, preprocessing, and inference for stable frame rates using OpenMP & MPI.", icon: <GitBranch className="w-5 h-5 text-cyan-400" /> },
                  { title: "Exposure", desc: "Collaborated with 40+ members, gaining exposure to microcontrollers, networking, electronic subsystems, and manufacturing.", icon: <Server className="w-5 h-5 text-cyan-400" /> },
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeInUp} className="flex gap-4 group">
                    <div className="mt-1 bg-slate-800/50 p-2 rounded-lg border border-slate-700/50 group-hover:border-cyan-500/30 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            
            <motion.div variants={fadeInUp} className="flex flex-col gap-4 sm:gap-6 w-full">
              <div className="relative group w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-[4/3]">
                  <Image 
                    src="/images/showcase/smeet-drone-standing.jpg" 
                    alt="Smeet standing next to drone"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <a 
                href="https://www.dronaid.net/competitions" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors w-fit group text-sm font-medium px-1"
              >
                View all achievements at Dronaid here
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <div className="relative rounded-xl overflow-hidden border border-slate-800/50 bg-slate-900 aspect-[4/3] group">
                  <Image 
                    src="/images/showcase/smeet-drone.jpg" 
                    alt="Smeet holding drone"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden border border-slate-800/50 bg-slate-900 aspect-[4/3] group">
                  <Image 
                    src="/images/showcase/dronaid-team.jpg" 
                    alt="Dronaid team photo"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 sm:py-24 border-t border-white/5 relative bg-slate-950/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center lg:flex-row-reverse"
          >
            <motion.div variants={fadeInUp} className="order-1 lg:order-2">
              <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-400 mb-4">
                Projects
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">AI for Robotics & VLA Models</h2>
              
              <ul className="space-y-3 sm:space-y-4 text-slate-400 mb-4 sm:mb-6 text-sm sm:text-base">
                {[
                  "Completed advanced robotics curriculum under Prof. Dieter Fox, implementing state estimation and planning algorithms including EKF-SLAM, RRT, particle filters & RL policies.",
                  "Studied Vision-Language-Action (VLA) models for robotic control, mapping vision and language to dynamic action policies.",
                  "Worked with LeRobot-So-100 arm to analyze generalization, task transfer, and VLA model training efficiency in simulated and physical environments."
                ].map((text, i) => (
                  <motion.li key={i} variants={fadeInUp} className="flex gap-3">
                    <ChevronRight className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{text}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.a 
                variants={fadeInUp}
                href="https://drive.google.com/file/d/1tPnxF0VZlr9FQC7ejwzl5lPPlgH40ffL/view?usp=sharing" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors w-fit group text-sm font-medium"
              >
                Link to whitepaper
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-3 sm:gap-4 w-full order-2 lg:order-1">
              <div className="relative group w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-[4/3]">
                  <Image 
                    src="/images/showcase/vla-poster.jpg" 
                    alt="Smeet posing with VLA poster"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <div className="relative rounded-xl overflow-hidden border border-slate-800/50 bg-slate-900 aspect-[4/3] group">
                  <Image 
                    src="/images/showcase/vla-screenshot.jpg" 
                    alt="VLA Training Screenshot"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden border border-slate-800/50 bg-slate-900 aspect-[4/3] group">
                  <Image 
                    src="/images/showcase/vla-setup.jpg" 
                    alt="VLA Training Setup"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CV Knowledge Section */}
      <section className="py-12 sm:py-24 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400 mb-4">
                Expertise
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Computer Vision Toolkit</h2>
              
              <div className="grid gap-3 sm:gap-4 mb-4 sm:mb-6">
                {[
                  { title: "Object Detection", desc: "Locating and classifying entities in dynamic environments.", color: "border-emerald-500/20 bg-emerald-500/5 text-emerald-300" },
                  { title: "Image Segmentation", desc: "Pixel-perfect boundaries for precise spatial awareness.", color: "border-teal-500/20 bg-teal-500/5 text-teal-300" },
                  { title: "DEEPSORT Tracking", desc: "Persistent identity tracking across complex video frames.", color: "border-green-500/20 bg-green-500/5 text-green-300" }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 sm:p-5 rounded-xl border ${item.color} backdrop-blur-sm transition-all`}
                  >
                    <h3 className="font-semibold text-base sm:text-lg mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-xs sm:text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
              <motion.a 
                variants={fadeInUp}
                href="https://github.com/Smeet-Dedhia/ObjectDetection-for-DronAid-UAVs" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors w-fit group text-sm font-medium"
              >
                And view CV projects here
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-[4/3]">
                <Image 
                  src="/images/showcase/cv.png" 
                  alt="Computer Vision Object Detection and Segmentation"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
