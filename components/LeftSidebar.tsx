"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from "next/navigation"
import { sidebarLinks } from "@/constants";
export default function LeftSidebar() {
    const pathname = usePathname();
    const router = useRouter();
    return (
        <aside className="fixed top-20 left-0 z-50 flex flex-col items-center justify-between h-full p-10 h-4/5 border-r border-gray-200 dark:border-gray-700">
            <div className="flex w-full flex-1 flex-col gap-6 lg:px-6">
            {sidebarLinks.map((link) =>{
                const isActive = (pathname.includes(link.route)&&link.route.length>1)|| pathname===link.route;
                return(
                    
                <Link href={link.route} key={link.label} className={`relative flex justify-start gap-4 rounded-lg p-3 ${isActive&&'text-slate-500 dark:text-cyan-500'}`}>
                    <Image src={link.imgURL} className={`dark:invert ${isActive&&'fill-cyan-500 dark:fill-cyan-500'}`} alt={link.label} width={24} height={24} />
                    <p className={`text-dark-2 dark:text-light-1 ${isActive&&''} max-lg:hidden`}>{link.label}</p>
                </Link>
            )})}
        </div>
        </aside>
    );
}