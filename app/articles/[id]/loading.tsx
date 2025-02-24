"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-black text-white">
      {/* Echo Pen Animation */}
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: [0.8, 1.2, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gray-800 shadow-xl"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="absolute h-24 w-24 rounded-full border-2 border-gray-600 opacity-40"
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute h-32 w-32 rounded-full border border-gray-500 opacity-30"
            animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-2xl">🖋</span> {/* Echo Pen Icon */}
        </motion.div>
      </motion.div>

      {/* Updated Gradient & Glow Effect */}
      <span className="mt-6 text-3xl font-bold">
        <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
          Echo
        </span>
        <span className="text-gray-200 drop-shadow-lg">
          Pen
        </span>
      </span>

      {/* Typewriter Effect */}
      <motion.div
        className="mt-2 text-sm text-gray-400"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        Crafting words, shaping thoughts ✍️
      </motion.div>
    </div>
  );
}
