"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, Cpu, Zap, Server, Gauge, Activity, Code2, Layers, CircuitBoard, Rocket, BrainCircuit } from "lucide-react"

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

export default function GPUComputeShowcase() {
  return (
    <div className="min-h-screen bg-black text-slate-200 selection:bg-emerald-900 selection:text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-10 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-black to-black -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 mb-4 sm:mb-6 pb-2">
              High-Performance Computing & GPU Optimization
            </h1>
            <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto font-light">
              I love pushing hardware to its absolute limits. Whether it is designing low-latency multi-threaded systems, squeezing every bit of GPU memory, or speeding up deep learning inference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hardware & GPU Stack */}
      <section className="py-12 sm:py-24 border-t border-white/5 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 mb-4">
              The Toolbox
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white max-w-2xl">Hardware & GPU Stack</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {[
              { title: "PyTorch & Deep Learning", desc: "I've spent a lot of time building and tweaking models in PyTorch. I really enjoy diving into tensor math and figuring out how to scale training across multiple GPUs.", icon: <BrainCircuit className="w-6 h-6 text-fuchsia-400" />, color: "border-fuchsia-500/20 bg-fuchsia-500/5" },
              { title: "NVIDIA Ecosystem", desc: "I use CUDA, TensorRT, and Triton to squeeze every last drop of performance out of NVIDIA hardware.", icon: <CircuitBoard className="w-6 h-6 text-emerald-400" />, color: "border-emerald-500/20 bg-emerald-500/5" },
              { title: "Systems Languages", desc: "When Python gets too slow, I drop down to C++ to write fast, memory-safe, and highly concurrent systems.", icon: <Code2 className="w-6 h-6 text-cyan-400" />, color: "border-cyan-500/20 bg-cyan-500/5" },
              { title: "Distributed Compute", desc: "I'm comfortable deploying models on Kubernetes and coordinating heavy workloads across multiple nodes using OpenMP and MPI.", icon: <Rocket className="w-6 h-6 text-blue-400" />, color: "border-blue-500/20 bg-blue-500/5" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className={`p-6 sm:p-8 rounded-2xl border ${item.color} backdrop-blur-sm transition-all flex flex-col items-start text-left`}
              >
                <div className="p-3 bg-slate-900/50 rounded-lg mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg sm:text-xl mb-3 text-slate-200">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Edge AI & Hardware Acceleration (Dronaid) */}
      <section className="py-12 sm:py-24 border-t border-white/5 relative bg-slate-950/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            <motion.div variants={fadeInUp} className="mb-10 sm:mb-16">
              <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400 mb-4">
                Practical Application: Edge Deployments
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">Real-time CV Inference for UAVs</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-6">
                    When I was working on object detection for <strong>DronAid</strong>, our biggest hurdle was processing high-res video on edge devices without lagging. Python just wasn't cutting it because of I/O limits and the Global Interpreter Lock.
                  </p>
                  <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                    So, I rolled up my sleeves and rewrote the entire inference pipeline in <span className="text-emerald-300">C++</span>. After a lot of profiling and tuning, we finally got our complex YOLO networks running fast enough for real-time aerial search and rescue.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="relative group w-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                    <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video flex flex-col items-center justify-center group-hover:scale-[1.02] transition-transform duration-500 p-8">
                      <Cpu className="w-24 h-24 text-emerald-500/50 mb-4" />
                      <div className="text-emerald-400 font-mono text-xl">5 FPS → 12 FPS</div>
                      <div className="text-slate-500 text-sm mt-2">Throughput Improvement</div>
                    </div>
                  </div>
                  <a
                    href="https://github.com/Smeet-Dedhia/ObjectDetection-for-DronAid-UAVs"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors w-fit group text-sm font-medium self-start lg:self-center"
                  >
                    View Project Repository
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <motion.div variants={fadeInUp} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-emerald-400" /> Profiling & Bottlenecks
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-slate-400 text-sm">
                    <ChevronRight className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Nsight Systems:</strong> I did a lot of rigorous system-level profiling to find and fix hidden bottlenecks across the CPU, GPU, memory bandwidth, and I/O pipelines.</span>
                  </li>
                  <li className="flex gap-3 text-slate-400 text-sm">
                    <ChevronRight className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Concurrency:</strong> I designed multi-threaded processing loops using OpenMP and MPI to neatly separate camera capture, image preprocessing, and inference.</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-emerald-400" /> GPU Optimizations
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-slate-400 text-sm">
                    <ChevronRight className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>TensorRT:</strong> I compiled our deep learning models using NVIDIA TensorRT, applying INT8 and FP16 precision quantization to massively speed up execution.</span>
                  </li>
                  <li className="flex gap-3 text-slate-400 text-sm">
                    <ChevronRight className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>CUDA & Triton:</strong> I heavily utilized CUDA execution providers and the Triton Inference Server to maximize throughput and optimize how kernels were dispatched.</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scaling LLM Inference (Intuitive) */}
      <section className="py-12 sm:py-24 border-t border-white/5 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            <motion.div variants={fadeInUp} className="order-2 lg:order-1">
              <div className="grid gap-4 sm:gap-6">
                {[
                  { title: "Dynamic Batching", desc: "I tuned our multi-threading and batched inference requests to make sure we were fully utilizing GPU memory, even during high-traffic periods.", icon: <Layers className="w-5 h-5 text-cyan-400" /> },
                  { title: "Latency Reduction", desc: "We managed to drop chat latency from 90 seconds down to just 20 seconds, while simultaneously getting a 4x boost in our RAG pipeline throughput.", icon: <Activity className="w-5 h-5 text-cyan-400" /> },
                  { title: "Cost Optimization", desc: "We moved away from expensive cloud APIs to our own on-prem GPU clusters, using Kubernetes to manage deployment and auto-scaling.", icon: <Server className="w-5 h-5 text-cyan-400" /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-xl border border-cyan-500/10 bg-cyan-500/5 hover:border-cyan-500/30 transition-colors">
                    <div className="mt-1 bg-slate-900 p-2 rounded-lg border border-slate-800">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="order-1 lg:order-2">
              <div className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-400 mb-4">
                Practical Application: Enterprise Infrastructure
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">Scaling Generative AI at Intuitive</h2>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-6">
                Taking LLMs from research to production is a whole different beast. At Intuitive, I focused heavily on the infrastructure side, building an <span className="text-cyan-300 font-medium">adaptive inference service</span> that powered over 15 internal enterprise apps.
              </p>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                By taking direct control of the hardware and optimizing how we load and query models, we were able to make the chat feel snappy and responsive, while saving a ton on cloud costs.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
