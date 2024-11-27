"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from "next/navigation"
import { sidebarLinks } from "@/constants";
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from './mode-toggle';
import { useRef } from 'react';

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export default function MenuBar() {
    const pathname = usePathname();
    const router = useRouter();
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    const handleLinkClick = () => {
        closeButtonRef.current?.click();
    };

  return (
    <div className="">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-[1.8rem] w-[1.8rem] rotate-0 scale-100 transition-all"/>
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetClose ref={closeButtonRef} className="hidden" />
            <div>
              <div className="absolute mt-0 right-4">
                <ModeToggle />
              </div>
              <div className="flex w-full flex-1 flex-col gap-6 px-6 my-10 py-10">
                {sidebarLinks.map((link) =>{
                    const isActive = (pathname.includes(link.route)&&link.route.length>1)|| pathname===link.route;
                    return(
                        <Link 
                            href={link.route} 
                            key={link.label} 
                            className={`relative flex justify-start gap-4 rounded-lg p-3 ${isActive&&'text-cyan-600 dark:text-cyan-400'}`}
                            onClick={handleLinkClick}
                        >
                            <Image 
                                src={link.imgURL} 
                                className={`dark:invert ${isActive&&'fill-sky-600'}`} 
                                alt={link.label} 
                                width={24} 
                                height={24} 
                            />
                            <p className={`text-dark-2 dark:text-light-1 ${isActive&&''}`}>
                                {link.label}
                            </p>
                        </Link>
                    )
                })}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
