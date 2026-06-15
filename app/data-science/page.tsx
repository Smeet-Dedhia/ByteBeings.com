"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Database, ShieldCheck, HeartPulse, LineChart, Network, Activity, Server, Zap, BrainCircuit, Code2, ChevronRight, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TiltCard } from "@/components/tilt-card"
import { Psst } from "@/components/psst"

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

export default function DataScienceShowcase() {
  return (
    <div className="min-h-screen bg-black text-slate-200 selection:bg-teal-900 selection:text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/20 via-black to-black -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-500 mb-4 sm:mb-6 pb-2">
              Data Scientist
            </h1>
            <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto font-light">
              Transforming raw data into actionable insights to improve healthcare outcomes, ensure rigorous compliance, and build resilient, enterprise-scale AI infrastructures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intuitive - Healthcare AI & Data */}
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
              <div className="inline-flex items-center rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-sm font-medium text-teal-400 mb-4 gap-2">
                <HeartPulse className="w-4 h-4" /> Healthcare & Enterprise AI
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2">Intuitive</h2>
              <p className="text-teal-500 font-medium mb-6">Data Scientist (Co-Op) • Sunnyvale, CA • Jun 2025 - Mar 2026</p>

              <div className="prose prose-invert mb-8">
                <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                  Developed an Agentic AI Framework with Node.js, Langchain & Azure for 15+ Enterprise Apps, enabling rapid infusion of AI into enterprise workflows, resulting in a <strong>65% reduction in support tickets</strong>.
                </p>
                <p className="text-slate-400 text-base sm:text-lg leading-relaxed mt-4">
                  Built robust RAG Pipelines for enterprise knowledge discovery, grounded AI with rigorous domain-specific datasets, and optimized ML infrastructure for high-throughput healthcare environments.
                </p>
              </div>

              <div className="relative group w-full max-w-md hidden lg:block">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-[4/3]">
                  <Image src="/images/showcase/smeet-intuitive.jpg" alt="Smeet at Intuitive" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="relative group w-full max-w-md lg:hidden mb-8">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-[4/3]">
                  <Image src="/images/showcase/smeet-intuitive.jpg" alt="Smeet at Intuitive" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>

              <div className="grid gap-4 sm:gap-6">
                {[
                  { title: "Data Governance & Healthcare", desc: "Data made available to AI compliant with HIPAA, with no PII leaving company servers, strictly following FDA and Medical-Devices Regulatory SOPs.", icon: <ShieldCheck className="w-5 h-5 text-teal-400" /> },
                  { title: "AI Evaluation Benchmarks", desc: "Constructed benchmarks to quantify AI performance on retrieval precision, grounding accuracy, hallucination rate & task success.", icon: <LineChart className="w-5 h-5 text-teal-400" /> },
                  { title: "Inference Optimization", desc: "Reduced chat latency from 90 to 20 sec by tuning multi-threading for optimal GPU memory utilization & batching, yielding a 4x boost in RAG throughput. Minimized Azure & API costs using on-prem GPUs via Kubernetes.", icon: <Zap className="w-5 h-5 text-teal-400" /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-xl border border-teal-500/10 bg-teal-500/5 hover:border-teal-500/30 transition-colors">
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

      {/* University of Washington - MLOps & Data Pipelines */}
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
              <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 mb-4 gap-2">
                <Database className="w-4 h-4" /> Data Pipelines & MLOps
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2">University of Washington - IT</h2>
              <p className="text-blue-500 font-medium mb-6">Software Engineer • Seattle, WA • Mar 2025 - Present</p>

              <div className="prose prose-invert mb-8 lg:mb-0">
                <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                  Architected massive-scale data pipelines on AWS (S3, Athena, Redshift) using Terraform to ingest and process org-wide digital assets, delivering actionable analytics to PowerBI dashboards.
                </p>
                <p className="text-slate-400 text-base sm:text-lg leading-relaxed mt-4">
                  Leveraged advanced MLOps to train gradient-boosted tree models (<strong className="text-blue-300">XGBoost, LightGBM</strong>) specifically targeted for intricate document structure analysis and remediation effort prediction. Furthermore, deployed advanced time-series forecasting models (<strong className="text-blue-300">ARIMA</strong>) to proactively project workload capacity and resource allocation across IT divisions.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="order-2 lg:order-1 relative group w-full">
              <div className="grid gap-4 relative">
                {[
                  { title: "AWS Data Architectures", desc: "Designed robust ELT pipelines processing websites, PDFs, and documents at organizational scale.", icon: <Server className="w-5 h-5 text-blue-400" /> },
                  { title: "Automated Compliance", desc: "Automated WCAG 2.1 compliance evaluation by integrating Adobe APIs into pipelines to generate vital accessibility metrics.", icon: <Activity className="w-5 h-5 text-blue-400" /> },
                  { title: "Advanced Predictive Modeling", desc: "Trained XGBoost and LightGBM for complex document scoring and utilized ARIMA time-series models for precision workload and capacity forecasting.", icon: <BrainCircuit className="w-5 h-5 text-blue-400" /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl border border-blue-500/10 bg-blue-500/5 backdrop-blur-sm hover:border-blue-500/30 transition-colors">
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

      {/* Sequel2SQL - Advanced SQL & RAG */}
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
              <div className="inline-flex items-center rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-3 py-1 text-sm font-medium text-fuchsia-400 mb-4 gap-2">
                <Code2 className="w-4 h-4" /> SQL Optimization & LLMs
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2">Sequel2SQL</h2>
              <p className="text-fuchsia-500 font-medium mb-6">Microsoft Sponsored • University Capstone Project</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-6">
                    <strong>Sequel2SQL</strong> is an agentic LLM + RAG framework specifically engineered for automated SQL error diagnosis, rigorous optimization, and self-correction. By deep diving into advanced SQL primitives—such as CTEs, Window Functions, and query optimization metrics—we developed highly nuanced reasoning methods for LLM and RAG performance.
                  </p>
                  <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                    By heavily scrutinizing low-level execution engine implementations, we were able to provide Language Models with highly targeted and semantically rich feedback. This enabled a <strong className="text-fuchsia-300">6% absolute improvement</strong> over the baseline on the rigorous BIRD-CRITIC Benchmark for Natural Language to SQL task performance.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="relative group w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
                    <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                    <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-square flex flex-col items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
                      <Image 
                        src="/images/showcase/sequel2sql.jpg" 
                        alt="Sequel2SQL Architecture" 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Network className="w-5 h-5 text-fuchsia-400" /> AST Based Targeting
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Designed AST-based, segment-level parsing and transformation layers to selectively process exceptionally large queries. This ensured peak memory efficiency while strictly applying highly targeted optimization strategies per query block.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-fuchsia-400" /> Advanced SQL Execution
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Explored and implemented the low-level mechanics of execution engines to accurately evaluate query planner paths, translating database-native heuristics into actionable reinforcement signals for LLMs.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12 sm:py-24 border-t border-white/5 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400 mb-4">
              Academic Background
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white text-center">Education</h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
            {/* MS Data Science */}
            <motion.div variants={fadeInUp}>
              <TiltCard className="h-full">
                <Card className="h-full transition-shadow hover:shadow-lg relative overflow-visible bg-slate-900 border-slate-800">
                  <Psst position="top-right" style={{ '--psst-top': '0.5rem', '--psst-right': '0.5rem' } as React.CSSProperties}>
                    Graduating in March'26. Looking for full-time roles from May!
                  </Psst>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <img
                      src="/logos/university_of_washington_logo.jpg"
                      alt="University of Washington logo"
                      className="h-16 w-16 rounded-full object-cover border border-slate-700 mb-4"
                    />
                    <p className="text-sm font-medium text-slate-400 mb-1">
                      University of Washington
                    </p>
                    <h3 className="text-lg font-semibold text-white leading-tight mb-2">Master of Science (MS), Data Science</h3>
                    <div className="flex items-center gap-1 text-xs text-slate-400 mb-3">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>Seattle, WA, USA</span>
                    </div>
                    <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20">
                      3.9 GPA
                    </Badge>
                  </CardContent>
                </Card>
              </TiltCard>
            </motion.div>

            {/* BTech Data Science */}
            <motion.div variants={fadeInUp}>
              <TiltCard className="h-full">
                <Card className="h-full transition-shadow hover:shadow-lg relative overflow-visible bg-slate-900 border-slate-800">
                  <Psst position="top-right" style={{ '--psst-top': '0.5rem', '--psst-right': '0.5rem' } as React.CSSProperties}>
                    The same Uni MSFT CEO Satya Nadella went to...
                  </Psst>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <img
                      src="/logos/manipal_institute_of_technology_logo.jpg"
                      alt="Manipal Institute of Technology logo"
                      className="h-16 w-16 rounded-full object-cover border border-slate-700 mb-4"
                    />
                    <p className="text-sm font-medium text-slate-400 mb-1">
                      Manipal Institute of Technology
                    </p>
                    <h3 className="text-lg font-semibold text-white leading-tight mb-2">B.Tech Data Science & Engineering</h3>
                    <div className="flex items-center gap-1 text-xs text-slate-400 mb-3">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>Manipal, India</span>
                    </div>
                    <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20">
                      3.9 GPA
                    </Badge>
                    <p className="text-xs text-slate-500 mt-3">
                      Minors in Finance & Portfolio Management
                    </p>
                  </CardContent>
                </Card>
              </TiltCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
