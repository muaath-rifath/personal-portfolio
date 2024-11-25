import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const HeroCards = () => {
  return (
    <div className="flex flex-wrap gap-8 relative max-w-xl">
      <Card className="absolute flex flex-col drop-shadow-md shadow-black/10 dark:shadow-white/10">{/* shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] */}
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="/assets/profile.png"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Mohamed Muaath Rifath <span className="inline-block">L M</span></CardTitle>
          <CardDescription className="font-normal text-primary dark:text-primary">
            Software Engineer
          </CardDescription>
        </CardHeader>

        <CardContent className="text-justify pb-2 -px-8">
          <p>
          With a passion for IoT and embedded systems, I am pursuing a Bachelor of Engineering degree in Electronics and Communication Engineering at Aalim Muhammed Salegh College of Engineering.
  
  In my coursework and projects, I have developed knowledge and skills in IoT, Cloud and Edge Computing, Docker and Kubernetes, Machine Learning at the Edge, Python, C, Node.js, Next.js, TypeScript, and networking.
  
  I am eager to apply my knowledge and skills to solve real-world problems and contribute to the advancement of science and technology. I am looking for internships or projects that will allow me to gain valuable experience and learn from experts and peers in the ECE domain.
          </p>
        </CardContent>

        <CardFooter className="flex justify-center w-full">
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/muaath-rifath"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="https://x.com/MuaathRifath"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">X icon</span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground w-5 h-5"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>

            <a
              rel="muaath rifath"
              href="https://www.linkedin.com/in/mohamed-muaath-rifath-6a713027b/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>
      
    </div>
  );
};