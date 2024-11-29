import MenuBar from "@/components/menu";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About - Mohamed Muaath Rifath",
    description: "Learn more about Mohamed Muaath Rifath, a passionate IoT and embedded systems enthusiast pursuing a Bachelor of Engineering degree in Electronics and Communication Engineering.",
    keywords: ["Mohamed Muaath Rifath", "IoT", "embedded systems", "Electronics and Communication Engineering", "ECE", "intelligent automation", "edge computing", "Docker", "Kubernetes", "Machine Learning", "Python", "C", "Node.js", "Next.js", "TypeScript", "networking"],
    openGraph: {
        title: "About - Mohamed Muaath Rifath",
        description: "Learn more about Mohamed Muaath Rifath, a passionate IoT and embedded systems enthusiast pursuing a Bachelor of Engineering degree in Electronics and Communication Engineering.",
        // images: ["/assets/avatar.jpg"],
        url: "https://yourwebsite.com/about",
        type: "website"
    }
};

export default function About() {
    return (
        <section>
            <div className="mt-10 lg:pt-10 md:p-4">
                <div className="flex flex-col items-center justify-center space-y-8">
                    <Image
                        src="/assets/avatar.jpg"
                        alt="Mohamed Muaath Rifath L M"
                        width={200}
                        height={200}
                        className="rounded-full"
                    />
                    <h1 className="scroll-m-20 md:text-4xl text-2xl text-center 
                    font-extrabold tracking-tight lg:text-5xl relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]">
                        Mohamed Muaath Rifath <span className="inline-block">L M</span>
                    </h1>
                    <h2 className="text-2xl font-bold tracking-tight">Software Engineer</h2>
                    <p className="text-justify">
                    With a passion for IoT and embedded systems, I am pursuing a Bachelor of Engineering degree in Electronics and Communication Engineering at Aalim Muhammed Salegh College of Engineering.
    
    In my coursework and projects, I have developed knowledge and skills in IoT, Cloud and Edge Computing, Docker and Kubernetes, Machine Learning at the Edge, Python, C, Node.js, Next.js, TypeScript, and networking.
    
    I have earned multiple certifications from LinkedIn, ISRO, NPTEL, HackerRank, etc for completing courses and workshops on these topics, demonstrating my commitment to continuous learning and professional development. 
    
    I am eager to apply my knowledge and skills to solve real-world problems and contribute to the advancement of science and technology. I am looking for internships or projects that will allow me to gain valuable experience and learn from experts and peers in the ECE domain.
                    </p>
                </div>
            </div>
        </section>
    );
}
