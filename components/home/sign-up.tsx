"use client";
import React from 'react';
import { SignUp } from '@clerk/nextjs';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { redirect } from 'next/navigation';

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden bg-black before:absolute before:left-1/4 before:top-0 before:h-[500px] before:w-[500px] before:rounded-full before:bg-gradient-to-r before:from-violet-600/20 before:to-indigo-600/20 before:blur-3xl">
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md shadow-2xl rounded-2xl bg-white bg-opacity-10 backdrop-blur-lg border border-gray-700">
          <h1 className="text-3xl mt-4 font-extrabold text-center text-white mb-6">Welcome to <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Echo
                </span> <span>Pen</span></h1>
          <CardContent>
            <SignUp routing="hash" />
          </CardContent>
        </Card>
      </motion.div>
      {redirect("/login")}
    </div>
    
  );
}
