import { HeroCards } from "@/components/hero-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

  export default function Home() {
    return (
      <section className="container grid lg:grid-cols-2 -mt-28 place-items-center py-20 md:py-32 gap-10 bottom-4">
      <div className="text-center h-screen lg:h-auto flex flex-col items-center lg:text-start space-y-6">
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

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dicta sequi mollitia blanditiis quo fugit minus 
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
      <div className="w-full lg:-mt-60 py-8">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
    );
  }
