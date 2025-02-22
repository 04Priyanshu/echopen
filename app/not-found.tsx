"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-black text-white">
      {/* Animated 404 */}
      <motion.h1
        className="text-8xl font-extrabold text-gray-700 md:text-9xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        404
      </motion.h1>

      {/* "Page Not Found" Text with Glow */}
      <motion.p
        className="mt-4 text-2xl font-semibold text-gray-400 md:text-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Oops! The ink seems to have vanished... 🖋
      </motion.p>

      {/* Animated "Echo Pen" Branding */}
      <motion.span
        className="mt-2 text-xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
          Echo
        </span>
        <span className="text-gray-200 drop-shadow-lg"> Pen</span>
      </motion.span>

      {/* Home Button */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <Link
          href="/"
          className="rounded-full border border-gray-500 px-6 py-3 text-gray-300 transition hover:border-blue-400 hover:bg-blue-500 hover:text-white"
        >
          Go Home 
        </Link>
      </motion.div>
    </div>
  );
}
