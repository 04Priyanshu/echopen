import HeroSection from "@/components/home/hero-section";
import Navbar from "@/components/home/header/Navbar";
import TopArticles from "@/components/home/top-articles";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BlogFooter from "@/components/home/blog-footer";
import React, { Suspense } from "react";
import AnimateWrapper from "../animateWrapper";


export default function Home() {
  return (
    <main>
      
        <Navbar />
     

      <AnimateWrapper>
        <HeroSection />
      </AnimateWrapper>

      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimateWrapper>
            <div className="text-center flex flex-col items-center mb-8 md:mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Articles
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Discover our most popular and trending content
              </p>
            </div>
          </AnimateWrapper>

          <Suspense fallback={<div>Loading...</div>}>
          <AnimateWrapper>
            <TopArticles />
          </AnimateWrapper>
          </Suspense>

          

          <AnimateWrapper>
            <div className="flex justify-center mt-12">
              <Link href={"/articles"}>
                <Button className="rounded-full hover:bg-gray-900 hover:text-white dark:bg-white dark:hover:text-gray-900">
                  View all articles
                </Button>
              </Link>
            </div>
          </AnimateWrapper>
        </div>
      </section>

      <AnimateWrapper>
        <BlogFooter />
      </AnimateWrapper>
    </main>
  );
}