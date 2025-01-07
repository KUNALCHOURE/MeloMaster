"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
export default function Navbar({ className }: { className?: string }){
    const [active, setActive] = useState<string | null>(null);
     return(
        <>
          <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 mt-6", className)}>
            <Menu setActive={setActive}>
                <Link  href={"/"}>
                <MenuItem setActive={setActive} active={active} item="Home">
                   
                </MenuItem>
                </Link>

                <Link href={'/courses'}>
             <MenuItem setActive={setActive} active={active} item="Courses">
             <div className="flex flex-col  space-y-6">
                 <HoveredLink href="/courses">All courses</HoveredLink>
                 <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
                 <HoveredLink href="/courses">Advance Composition</HoveredLink>
                 <HoveredLink href="/courses">Songwritting</HoveredLink>
                 <HoveredLink href="/courses">Music Production</HoveredLink>
                 </div>
             </MenuItem>
             </Link>

             <Link href={'/contact'}>
             <MenuItem setActive={setActive} active={active} item="Contact us ">
                
             </MenuItem>
             </Link>


            </Menu>
          </div>
        </>
     )
}