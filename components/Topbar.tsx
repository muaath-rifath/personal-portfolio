"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from "next/navigation"
import { sidebarLinks } from "@/constants";
import { ModeToggle } from './mode-toggle';
import MenuBar from "@/components/menu";
export default function Topbar() {
  const pathname = usePathname();
    const router = useRouter();
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-inherit shadow ">
      <div className="container px-4 md:px-6">
        <div className="flex h-14 items-center">
          <Link className="mr-auto flex items-center gap-2 text-lg font-semibold" href="#">
            <PackageIcon className="w-5 h-5" />
            <span>Portfolio</span>
          </Link>
          <nav className="ml-auto hidden md:justify-center md:w-full md:flex items-center space-x-4">
          {sidebarLinks.map((link) =>{
                const isActive = (pathname.includes(link.route)&&link.route.length>1)|| pathname===link.route;
                return(
                    
                <Link href={link.route} key={link.label} className={` text-sm border-b-2 border-transparent transition-colors ${isActive&&'text-cyan-600 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-none font-semibold dark:text-cyan-400'} hover:text-gray-900 hover:border-cyan-600 dark:hover:text-gray-50 dark:hover:border-cyan-400`}>
                    <Image src={link.imgURL} className={`dark:invert p-1 flex gap-6 lg:hidden h-full ${isActive&&'invert rounded-sm bg-red-500 dark:bg-red-400'}`} alt={link.label} width={28} height={28} />
                    <p className={`text-dark-2 dark:text-light-1 ${isActive&&''} max-lg:hidden`}>{link.label}</p>
                </Link>
            )})}
            
            
          </nav>
          <span className="hidden md:flex">
          <ModeToggle />
          </span>
          <MenuBar />
        </div>
      </div>
    </nav>
  )
}

function PackageIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}