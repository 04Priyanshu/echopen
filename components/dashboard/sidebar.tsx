"use client";
import { Button } from "@/components/ui/button"

import {
  Sheet,
  
  SheetContent,
  
  SheetTrigger,
} from "@/components/ui/sheet"
import { BarChart, FileText, LayoutDashboard, MessageCircle, Settings } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        
   <Sheet open={isOpen} onOpenChange={setIsOpen}>
    <SheetTrigger asChild>
        <Button variant={"outline"}  className="md:hidden m-4">
            <LayoutDashboard className="h-5 w-5" />
            New Article
        </Button>
    </SheetTrigger>
    <SheetContent side="left" className="w-[250px]">
        <DashboardSidebar />
    </SheetContent>
   </Sheet>
    <div className="hidden md:block h-screen w-[250px] border-r bg-background">
         <DashboardSidebar />
    </div>     
   </div>
  )
}

export default Sidebar

const DashboardSidebar = () => {
    return (
        <div className="h-full px-4 py-6">
          <div className="flex items-center gap-2 mb-8 px-2">
            <Link href={"/"}>
            <span className='text-2xl font-bold'>
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Echo
                </span>
                <span className="text-foreground">
                  Pen
                </span>
              </span>
            </Link>
          </div>
          <nav className="space-y-1">
            <Link href={"/dashboard"}>
              <Button
                variant="ghost"
                className="w-full justify-start"
             //   onClick={closeSheet}
              >
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Overview
              </Button>
            </Link>
    
            <Link href={"/dashboard/articles/create"}>
              <Button
                variant="ghost"
                className="w-full justify-start"
              //  onClick={closeSheet}
              >
                <FileText className="mr-2 h-4 w-4" />
                Articles
              </Button>
            </Link>
            <Button
              variant="ghost"
              className="w-full justify-start"
            //  onClick={closeSheet}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Comments
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
             // onClick={closeSheet}
            >
              <BarChart className="mr-2 h-4 w-4" />
              Analytics
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              //onClick={closeSheet}
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </nav>
        </div>
      );
}
