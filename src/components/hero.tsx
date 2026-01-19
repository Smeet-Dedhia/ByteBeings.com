"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      {/* Background gradient with blur effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-base text-muted-foreground sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hi there! I&apos;m{" "}
            <Link 
              href="/resume" 
              className="relative inline-block text-foreground hover:text-foreground/80 transition-colors"
            >
              <span className="relative">
                Smeet
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-yellow-400 shadow-[0_0_8px_2px_rgba(250,204,21,0.6)]" />
              </span>
            </Link>
            .
          </motion.p>
          <motion.p
            className="mt-2 text-lg text-muted-foreground sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            Welcome to my website:
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-4 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Image
            src="/logos/ByteBeings-logo-new.png"
            alt="ByteBeings"
            width={600}
            height={240}
            className="h-auto w-[320px] sm:w-[450px] md:w-[550px] lg:w-[600px]"
            priority
          />
        </motion.div>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground sm:text-2xl md:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A space where I share my thoughts about{" "}
          <span className="font-bold text-foreground">everything that exists as bytes</span>
          {" "}—{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
              from data to software to AI
            </span>
            <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 shadow-[0_0_10px_2px_rgba(168,85,247,0.6)]" />
          </span>
          .
        </motion.p>

        <motion.div
          className="mt-10 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
            <Link href="/blog">Read Blog</Link>
          </Button>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute bottom-20 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  )
}

