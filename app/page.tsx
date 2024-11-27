import { HeroCards } from "@/components/hero-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaGraduationCap } from "react-icons/fa";

export default function Home() {
  return (
    <section className="lg:container mb-100">
      <section className="grid lg:grid-cols-2 -mt-20 lg:h-screen lg:-mt-40 place-items-center py-20 lg:py-32 gap-20">
        <div className="text-center px-10 h-screen lg:h-auto flex flex-col items-center lg:text-start space-y-6 mb-10 md:mb-0">
          <main className="text-5xl md:text-6xl flex flex-col items-center mt-40 lg:pt-8 font-bold">
            <h1 className="inline py-2">
              <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
                Welcome
              </span>{" "}
              to my
            </h1>{" "}
            {" "}
            <h2 className="inline">
              <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                Personal Portfolio
              </span>{" "}
            </h2>
          </main>

          <p className="text-xl text-center text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
              I'm an ECE student specializing in IoT and Embedded Systems, with a strong foundation in intelligent automation.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Link href="/contact"><Button className="w-full md:w-1/3">Contact</Button></Link>

            <Link
              rel="Muaath Rifath"
              href="https://github.com/muaath-rifath"
              target="_blank"
              className={`w-full p-4 md:w-1/3`}
            >
              <span className="inline-block py-4">My Resume</span>
            </Link>
          </div>
        </div>

        {/* Hero cards sections */}
        <div className="w-full  md:max-lg:max-w-xl md:max-lg:flex md:max-lg:justify-center lg:px-0 lg:-mt-40 lg:pb-10">
          <HeroCards />
        </div>
        {/* Shadow effect */}
        <div className="shadow"></div>
      </section>
      <div className="h-20 w-full block lg:hidden mt-96 "></div>
    </section>
  );
}
