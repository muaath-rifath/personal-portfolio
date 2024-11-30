import { HeroCards } from "@/components/hero-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muaath Rifath",
  description: "Welcome to the personal portfolio of Mohamed Muaath Rifath, an ECE student specializing in IoT and Embedded Systems.",
  keywords: ["Mohamed Muaath Rifath", "IoT", "embedded systems", "Electronics and Communication Engineering", "ECE", "intelligent automation", "edge computing", "Docker", "Kubernetes", "Machine Learning", "Python", "C", "Node.js", "Next.js", "TypeScript", "networking"],
  openGraph: {
    title: "Muaath Rifath",
    description: "Welcome to the personal portfolio of Mohamed Muaath Rifath, an ECE student specializing in IoT and Embedded Systems.",
    // images: ["/assets/avatar.jpg"],
    url: "https://muaathrifath.vercel.com",
    type: "website"
  }
};

export default function Home() {
  return (
    <section className="lg:container mb-100 lg:mb-0">
      <section className="grid items-center justify-center lg:grid-cols-2 lg:-mt-20 lg:h-screen place-items-center md:max-lg:py-20">
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
        <div className="w-full  max-w-xl md:max-lg:flex md:max-lg:justify-center firefox:px-0 px-4 lg:px-0 lg:-mt-40">
          <HeroCards />
        </div>
        {/* Shadow effect */}
        <div className="shadow"></div>
      </section>
      <div className="h-60 w-full block lg:hidden mt-96 "></div>
    </section>
  );
}
