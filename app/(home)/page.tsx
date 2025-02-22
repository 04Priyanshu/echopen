import HeroSection from "@/components/ui/home/hero-section";
import Navbar from "@/components/ui/home/header/Navbar";
import TopArticles from "@/components/ui/home/top-articles";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BlogFooter from "@/components/ui/home/blog-footer";
import React from "react";


export default function Home() {
  return (
    <main>
      <Navbar />
      
      <HeroSection />
      
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center flex flex-col items-center mb-8 md:mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Top <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">Articles</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Discover our most popular and trending content
            </p>
          </div>

          <TopArticles />

          <div className="flex justify-center mt-12">
            <Link href={'/articles'}>
              <Button className="rounded-full hover:bg-gray-900 hover:text-white dark:bg-white dark:hover:text-gray-900">
                View all articles
              </Button>
            </Link>
          </div>
        </div>
      </section>


      <BlogFooter />
    </main>
  );
}