"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, Server, Cloud, Layout, Rocket, Zap, Database, Network, Github, Code2, Layers, Activity } from "lucide-react"

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

export default function FullStackDevelopmentShowcase() {
  return (
    <div className="min-h-screen bg-black text-slate-200 selection:bg-indigo-900 selection:text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-500 mb-4 sm:mb-6 pb-2">
              Full Stack & Cloud Engineer
            </h1>
            <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto font-light">
              Architecting scalable backend systems, deploying robust cloud infrastructure, and building responsive frontends for enterprise applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-12 sm:py-16 border-t border-white/5 relative bg-slate-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-12"
          >
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Core Technology Stack</h2>
              <p className="text-slate-400 text-sm">Beyond standard requirements, I specialize in these enterprise-grade ecosystems.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Backend Stack (Left) */}
              <motion.div variants={fadeInUp} className="flex flex-col items-center p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm h-full">
                <h3 className="text-slate-300 font-semibold mb-6 flex items-center gap-2"><Server className="w-4 h-4 text-rose-400" /> Backend Stack</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
                    { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
                    { name: "Redis", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
                    { name: "Kafka", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" },
                    { name: "REST API", icon: <Network className="w-7 h-7 text-blue-400" /> },
                    { name: "gRPC", icon: <Activity className="w-7 h-7 text-teal-400" /> },
                    { name: "JWT Auth", icon: <Code2 className="w-7 h-7 text-yellow-500" /> }
                  ].map(tech => (
                    <div key={tech.name} className="flex flex-col items-center gap-2 group">
                      <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center p-2.5 group-hover:bg-slate-700 transition-colors group-hover:scale-110 duration-300">
                        {tech.icon ? tech.icon : <img src={tech.url} alt={tech.name} className={tech.name === "Kafka" ? "w-full h-full object-contain invert brightness-0 opacity-80" : "w-full h-full object-contain"} />}
                      </div>
                      <span className="text-xs text-slate-500 font-medium group-hover:text-slate-300 transition-colors">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Combo Card (Middle) */}
              <motion.div variants={fadeInUp} className="flex flex-col gap-6">
                {/* Frontend Stack */}
                <div className="flex flex-col items-center p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm flex-1">
                  <h3 className="text-slate-300 font-semibold mb-4 flex items-center gap-2"><Layout className="w-4 h-4 text-teal-400" /> Frontend Ecosystem</h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    {[
                      { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
                      { name: "Next.js", url: "https://cdn.simpleicons.org/nextdotjs/white" },
                      { name: "Angular", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" }
                    ].map(tech => (
                      <div key={tech.name} className="flex flex-col items-center gap-2 group">
                        <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center p-2.5 group-hover:bg-slate-700 transition-colors group-hover:scale-110 duration-300">
                          <img src={tech.url} alt={tech.name} className="w-full h-full object-contain" />
                        </div>
                        <span className="text-xs text-slate-500 font-medium group-hover:text-slate-300 transition-colors">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cloud Platform Stack */}
                <div className="flex flex-col items-center p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm flex-1">
                  <h3 className="text-slate-300 font-semibold mb-4 flex items-center gap-2"><Cloud className="w-4 h-4 text-purple-400" /> Cloud Platforms</h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    {[
                      { name: "AWS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
                      { name: "Azure", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
                      { name: "Databricks", url: "https://cdn.simpleicons.org/databricks/FF3621" }
                    ].map(tech => (
                      <div key={tech.name} className="flex flex-col items-center gap-2 group">
                        <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center p-2.5 group-hover:bg-slate-700 transition-colors group-hover:scale-110 duration-300">
                          <img src={tech.url} alt={tech.name} className={tech.name === "AWS" ? "w-full h-full object-contain invert brightness-0 opacity-80" : "w-full h-full object-contain"} />
                        </div>
                        <span className="text-xs text-slate-500 font-medium group-hover:text-slate-300 transition-colors">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* AWS Services Stack (Right) */}
              <motion.div variants={fadeInUp} className="flex flex-col items-center p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm h-full">
                <h3 className="text-slate-300 font-semibold mb-6 flex items-center gap-2"><Database className="w-4 h-4 text-blue-400" /> AWS Services</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    { name: "S3", icon: <Database className="w-7 h-7 text-emerald-500" /> },
                    { name: "Redshift", icon: <Database className="w-7 h-7 text-indigo-400" /> },
                    { name: "Athena", icon: <Zap className="w-7 h-7 text-cyan-400" /> },
                    { name: "Spark", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg" },
                    { name: "CloudFormation", icon: <Layers className="w-7 h-7 text-rose-500" /> }
                  ].map(tech => (
                    <div key={tech.name} className="flex flex-col items-center gap-2 group">
                      <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center p-2 group-hover:bg-slate-700 transition-colors group-hover:scale-110 duration-300">
                        {tech.icon ? tech.icon : <img src={tech.url} alt={tech.name} className="w-full h-full object-contain" />}
                      </div>
                      <span className="text-xs text-slate-500 font-medium group-hover:text-slate-300 transition-colors">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Backend Section */}
      <section className="py-12 sm:py-24 border-t border-white/5 relative bg-slate-950/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 mb-4">
                Backend Architecture
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">Robust & Scalable APIs</h2>

              <div className="prose prose-invert">
                <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                  Building the backbone of modern web applications using <strong>Node.js, Python, and Java</strong>. Experienced in designing microservices and high-throughput data processing pipelines.
                </p>
                <p className="text-slate-400 text-base sm:text-lg leading-relaxed mt-4">
                  At Intuitive, I exposed legacy core Java APIs by adding a Spring Boot interface, unlocking valuable data for enterprise workflows. For ION Group, I orchestrated seamless data flow utilizing Kafka and Pub/Sub for event-driven messaging.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="grid gap-4 sm:gap-6">
                {[
                  { title: "High-Throughput Messaging", desc: "Implemented event-driven architectures with Kafka and Pub/Sub for reliable data synchronization.", icon: <Network className="w-5 h-5 text-blue-400" /> },
                  { title: "API Development", desc: "Built resilient REST APIs using Spring Boot, FastAPI, and Django, integrating complex business logic.", icon: <Server className="w-5 h-5 text-blue-400" /> },
                  { title: "Data Integration", desc: "Designed databases and async processing pipelines with PostgreSQL, Redis, and GraphQL.", icon: <Database className="w-5 h-5 text-blue-400" /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-xl border border-blue-500/10 bg-blue-500/5 hover:border-blue-500/30 transition-colors">
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
          </motion.div>
        </div>
      </section>

      {/* Cloud & DevOps Section */}
      <section className="py-12 sm:py-24 border-t border-white/5 relative">
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
                Cloud & DevOps
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">Infrastructure & Automation</h2>

              <div className="prose prose-invert mb-8">
                <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                  Architecting resilient cloud infrastructures on <strong>AWS, Azure, and Google Cloud</strong>. Deploying complex applications with Docker, Kubernetes, and CI/CD pipelines.
                </p>
                <p className="text-slate-400 text-base sm:text-lg leading-relaxed mt-4">
                  For the University of Washington, I architected AWS Data Pipelines utilizing S3, Athena, and Redshift with Terraform, processing large-scale org-wide digital assets securely and efficiently.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="order-2 lg:order-1 relative group w-full h-full min-h-[400px]">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative rounded-2xl p-8 border border-slate-800 bg-slate-900 h-full flex flex-col justify-center gap-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 mb-4">
                  <Cloud className="w-7 h-7 text-purple-400" /> Scalable Infrastructure
                </h3>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-slate-800/50">
                  <Image
                    src="/images/showcase/ai-stack.png"
                    alt="Cloud Stack"
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-2">Automated CI/CD</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      End-to-end feature lifecycle ownership with Jenkins, incorporating unit testing and acceptance testing pipelines.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-2">Container Orchestration</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Deployed adaptive services using Docker and Kubernetes to efficiently manage and scale computing resources dynamically.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Frontend Section */}
      <section className="py-12 sm:py-24 border-t border-white/5 relative bg-slate-950/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-sm font-medium text-teal-400 mb-4">
                Frontend Engineering
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">Interactive User Experiences</h2>

              <div className="prose prose-invert mb-8 lg:mb-0">
                <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                  Crafting highly responsive, state-driven interfaces leveraging <strong>React, NextJS, and Angular</strong>. Focusing on low-latency updates and seamless interactions.
                </p>
                <p className="text-slate-400 text-base sm:text-lg leading-relaxed mt-4">
                  At Intuitive, I built a NextJS Chat UI complete with Server-Sent-Events (SSE) for real-time agent status broadcasting. At ION Group, I engineered core Angular UI components serving Fortune 500 clients, utilizing advanced state management and event-driven patterns.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative group w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-[4/3] mb-8">
                <Image
                  src="/images/showcase/Trade-Sight-dashboard.png"
                  alt="Frontend Interface"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="grid gap-4 relative">
                {[
                  { title: "Real-time Interfaces", desc: "Integrated UI analytics and WebSockets/SSE for real-time streaming and feedback loops.", icon: <Activity className="w-5 h-5 text-teal-400" /> },
                  { title: "Core Web SDKs", desc: "Developed robust component libraries used across 25+ downstream applications.", icon: <Layers className="w-5 h-5 text-teal-400" /> },
                  { title: "Modern Stacks", desc: "Migrated legacy applications from plain JavaScript to TypeScript, implementing strict typing and dependency injection.", icon: <Code2 className="w-5 h-5 text-teal-400" /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl border border-teal-500/10 bg-teal-500/5 backdrop-blur-sm">
                    <div className="mt-1 bg-slate-900 p-2 rounded-lg border border-slate-800 h-fit">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 0 to 1 Engineering Section */}
      <section className="py-12 sm:py-24 border-t border-white/5 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-400 mb-4">
              End-to-End Execution
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white text-center max-w-2xl">Building from Zero to One</h2>
            <p className="text-slate-400 text-center mt-4 max-w-3xl text-base sm:text-lg">
              I spend my weekends building power-user apps to automate and optimize my daily life. From self-hosting wealth trackers to deploying personal AI agents, I love taking a product from zero to one.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Project 1 */}
            <motion.div variants={fadeInUp} className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden group">
              <div className="relative aspect-video overflow-hidden bg-slate-800">
                <Image
                  src="/images/showcase/Trade-Sight-dashboard.png"
                  alt="TradeSight Dashboard"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">TradeSight</h3>
                  <a href="https://github.com/Smeet-Dedhia/TradeSight" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="View TradeSight on GitHub">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-slate-400 text-sm mb-4 flex-grow">
                  A self-hosted wealth tracker consolidating fragmented stock portfolios across brokers into a secure dashboard. Built to allow active portfolio optimization and tax-loss harvesting.
                </p>
                <div className="flex gap-2 mt-auto">
                  <span className="text-xs px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300">React</span>
                  <span className="text-xs px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300">Data Engineering</span>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div variants={fadeInUp} className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden group">
              <div className="relative aspect-video overflow-hidden bg-slate-800">
                <Image
                  src="/images/showcase/PrompTreeVideoDemo.gif"
                  alt="PrompTree Demo"
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">PrompTree</h3>
                  <a href="https://github.com/Smeet-Dedhia/PrompTree" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="View PrompTree on GitHub">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-slate-400 text-sm mb-4 flex-grow">
                  A visual DAG builder for LLM prompts. Chain modular context blocks on a drag-and-drop board to orchestrate complex instructions for various foundational models.
                </p>
                <div className="flex gap-2 mt-auto">
                  <span className="text-xs px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300">React Flow</span>
                  <span className="text-xs px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300">LLM SDKs</span>
                </div>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div variants={fadeInUp} className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden group md:col-span-2 lg:col-span-1">
              <div className="relative aspect-video overflow-hidden bg-slate-800">
                <Image
                  src="/images/showcase/ByteBeingsBot-Demo.gif"
                  alt="ByteBeingsBot Demo"
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">ByteBeingsBot</h3>
                  <a href="https://github.com/Smeet-Dedhia/ByteBeingsBot" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="View ByteBeingsBot on GitHub">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-slate-400 text-sm mb-4 flex-grow">
                  A personal Telegram bot router agent that delegates natural language instructions to pluggable specialist agents to track macros, automate shopping, and query databases.
                </p>
                <div className="flex gap-2 mt-auto">
                  <span className="text-xs px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300">Agentic RAG</span>
                  <span className="text-xs px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300">Node.js</span>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </div>
  )
}
