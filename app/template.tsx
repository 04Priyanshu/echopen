"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // Ensures animation triggers on route change
        initial={{ opacity: pathname === "/loading" ? 1 : 0, y: pathname === "/loading" ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: pathname === "/loading" ? 1 : 0, y: pathname === "/loading" ? 0 : -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
