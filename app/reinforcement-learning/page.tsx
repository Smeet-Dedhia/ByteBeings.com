"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, BrainCircuit, Database, Target, ShieldAlert, GitMerge, GraduationCap, Code2, Network, Activity } from "lucide-react"

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

export default function ReinforcementLearningShowcase() {
  return (
    <div className="min-h-screen bg-black text-slate-200 selection:bg-indigo-900 selection:text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-10 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-500 mb-4 sm:mb-6 pb-2">
              Reinforcement Learning Showcase
            </h1>
            <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto font-light">
              Designing robust reward systems, deterministic execution environments, and policy optimization frameworks to align AI behavior with real-world efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* RLEF Environment Proposal (Now First) */}
      <section className="py-12 sm:py-24 border-t border-white/5 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            <motion.div variants={fadeInUp} className="mb-10 sm:mb-16">
              <div className="inline-flex items-center rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-3 py-1 text-sm font-medium text-fuchsia-400 mb-4">
                Environment Architecture
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">Sequel2SQL & Reinforcement Learning from Execution Feedback (RLEF)</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-6">
                    In my capstone project, <strong>Sequel2SQL</strong>, sponsored by <strong>Microsoft</strong>, I addressed the challenge of translating natural language to SQL. While standard supervised fine-tuning generates functionally correct queries, it often produces computationally disastrous execution plans for enterprise databases (e.g., triggering massive nested loops instead of efficient hash joins).
                  </p>
                  <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                    To solve this, I designed a deterministic RLEF environment using a live PostgreSQL engine to train models in <span className="text-fuchsia-300">Algorithmic Refactoring</span>. By using strict hardware execution metrics rather than a biased LLM-as-a-Judge, RLEF actively guides the LLM to write <strong>better, highly-efficient SQL</strong> that natively utilizes database indices, minimizes buffer reads, and optimizes query planner paths.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="relative group w-full">
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
                  <a
                    href="https://github.com/Smeet-Dedhia/sequel2sql"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-fuchsia-400 hover:text-fuchsia-300 transition-colors w-fit group text-sm font-medium self-start lg:self-center"
                  >
                    View Microsoft Capstone Repository
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <motion.div variants={fadeInUp} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-fuchsia-400" /> State & Action Space
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-slate-400 text-sm">
                    <ChevronRight className="w-4 h-4 text-fuchsia-500 shrink-0 mt-0.5" />
                    <span><strong>Observation:</strong> Models observe the full highly normalized schema, realistic database statistics (row counts, value estimates), and the computationally inefficient baseline query.</span>
                  </li>
                  <li className="flex gap-3 text-slate-400 text-sm">
                    <ChevronRight className="w-4 h-4 text-fuchsia-500 shrink-0 mt-0.5" />
                    <span><strong>Action:</strong> A two-step generation enforcing an explicit reasoning trace of query planner constraints, followed by the highly optimized SQL output.</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-fuchsia-400" /> Deterministic Reward Signal
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-slate-400 text-sm">
                    <ChevronRight className="w-4 h-4 text-fuchsia-500 shrink-0 mt-0.5" />
                    <span><strong>Query Planner Efficiency:</strong> The environment runs <code className="text-xs bg-slate-800 px-1 py-0.5 rounded text-fuchsia-300">EXPLAIN</code> to extract actual execution cost, rewarding the model for learning index utilization and hash joins.</span>
                  </li>
                  <li className="flex gap-3 text-slate-400 text-sm">
                    <ChevronRight className="w-4 h-4 text-fuchsia-500 shrink-0 mt-0.5" />
                    <span><strong>Hardware I/O Analysis:</strong> Modifiers are applied based on physical disk buffer reads vs. memory hits, heavily penalizing queries that force full table scans on disk.</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 md:col-span-2">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-fuchsia-400" /> Mitigating Reward Hacking
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  RL loops in code generation are highly susceptible to agents cheating the reward system. I architected specific defenses:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-black/40 rounded-xl border border-slate-800/80">
                    <h4 className="text-fuchsia-300 text-sm font-semibold mb-2">Literal Matching Hacks</h4>
                    <p className="text-xs text-slate-500">Implemented hidden dataset replicas to prevent models from hardcoding strings to pass equivalence checks.</p>
                  </div>
                  <div className="p-4 bg-black/40 rounded-xl border border-slate-800/80">
                    <h4 className="text-fuchsia-300 text-sm font-semibold mb-2">Empty Result Hacks</h4>
                    <p className="text-xs text-slate-500">Strict baseline comparison immediately fails queries that append <code className="text-fuchsia-400 bg-slate-900 px-1">LIMIT 0</code> to artificially lower execution time.</p>
                  </div>
                  <div className="p-4 bg-black/40 rounded-xl border border-slate-800/80">
                    <h4 className="text-fuchsia-300 text-sm font-semibold mb-2">Planner Manipulation</h4>
                    <p className="text-xs text-slate-500">Evaluated on <code className="text-fuchsia-400 bg-slate-900 px-1">EXPLAIN ANALYZE</code> hardware execution, not just theoretical cost estimates.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modern Alignment & LLMs (Now Second) */}
      <section className="py-12 sm:py-24 border-t border-white/5 relative bg-slate-950/50">
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
                  { title: "RLHF & DPO", desc: "Leveraged Reinforcement Learning from Human Feedback and Direct Preference Optimization to align LLMs. Shifted models from generic generation to highly specialized, context-aware behaviors.", icon: <Network className="w-5 h-5 text-indigo-400" /> },
                  { title: "Huggingface TRL", desc: "Extensively utilized the Huggingface ecosystem, specifically the Transformer Reinforcement Learning (TRL) library, to orchestrate complex PPO loops and preference model training pipelines.", icon: <Code2 className="w-5 h-5 text-indigo-400" /> },
                  { title: "Sequel2SQL Capstone", desc: "Applied these advanced alignment techniques in a Microsoft-sponsored capstone project. Optimized language models for Natural Language to SQL translation, ensuring semantic accuracy in enterprise environments.", icon: <Database className="w-5 h-5 text-indigo-400" /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-xl border border-indigo-500/10 bg-indigo-500/5 hover:border-indigo-500/30 transition-colors">
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
              <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-400 mb-4">
                Generative AI
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">LLM Alignment & Preferences</h2>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-6">
                Moving beyond next-token prediction, I build systems that teach models <span className="text-indigo-300 font-medium">how to think</span>. By utilizing reward models and preference optimization, I align foundational models to complex objectives where simple supervised fine-tuning falls short.
              </p>

              <a
                href="https://github.com/Smeet-Dedhia/sequel2sql/blob/main/notebooks/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors w-fit group text-sm font-medium mt-4"
              >
                Check Code Notebook
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Theoretical Foundations (Now Third) */}
      <section className="py-12 sm:py-24 border-t border-white/5 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-400 mb-4">
              Theory & Implementation
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white max-w-2xl">Foundational Knowledge</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
          >
            {[
              { title: "Classical RL Theory", desc: "Studied core reinforcement learning theory directly from the works of Barto and Sutton. Mastered Markov Decision Processes (MDPs), value iteration, and foundational policy evaluation.", icon: <GraduationCap className="w-6 h-6 text-indigo-400" />, color: "border-indigo-500/20 bg-indigo-500/5" },
              { title: "Multi-Armed Bandits", desc: "Implemented and analyzed exploration vs. exploitation tradeoffs using Multi-Armed Bandit algorithms, understanding the math behind optimal action selection and regret bounds.", icon: <Target className="w-6 h-6 text-violet-400" />, color: "border-violet-500/20 bg-violet-500/5" },
              { title: "Deep Q-Learning", desc: "Completed intensive coursework bridging classical RL with deep neural networks. Built Deep Q-Network (DQN) agents to approximate value functions in continuous and high-dimensional state spaces.", icon: <BrainCircuit className="w-6 h-6 text-fuchsia-400" />, color: "border-fuchsia-500/20 bg-fuchsia-500/5" },
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
    </div>
  )
}
