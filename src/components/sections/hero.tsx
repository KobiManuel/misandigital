import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedWrapper } from "@/components/animations/animated-wrapper";
import { MoveRight } from "lucide-react";
import SwirlingSVGs from "../animations/swirling-svgs";
import aiImage from "./robot.gif";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 bg-gradient-to-b from-background to-card/50 overflow-hidden flex justify-end">
      <div className="hidden sm:block absolute top-0 right-0 h-full w-4/5 bg-black z-0" />
      <SwirlingSVGs />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 437 199"
        width="437"
        height="199"
        preserveAspectRatio="xMidYMid meet"
        className="absolute bottom-0 left-[25%] z-10 hidden sm:block"
      >
        <defs>
          <clipPath id="clipPath">
            <rect width="437" height="199" x="0" y="0"></rect>
          </clipPath>
        </defs>
        <g clipPath="url(#clipPath)">
          <g
            transform="matrix(1.3323999643325806,0,0,1.335800051689148,0,0)"
            opacity="1"
          >
            <g transform="matrix(0.25257495045661926,-0.7061911225318909,0.7061911225318909,0.25257495045661926,40.18000030517578,202.72000122070312)">
              <path
                strokeLinecap="butt"
                strokeLinejoin="miter"
                fillOpacity="0"
                strokeMiterlimit="10"
                stroke="rgb(255,255,255)"
                strokeOpacity="1"
                strokeWidth="1"
                d="M269.94,97.12 C269.94,224.67 246.98,328.06 218.65,328.06 C190.32,328.06 167.36,224.66 167.36,97.12 C167.36,-30.43 190.32,-133.82 218.65,-133.82 C246.98,-133.82 269.94,-30.42 269.94,97.12"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="1000"
                  to="0"
                  dur="2s"
                  begin="0s"
                  fill="freeze"
                />
                <animate
                  attributeName="stroke-dasharray"
                  from="0 1000"
                  to="1000 0"
                  dur="2s"
                  begin="0s"
                  fill="freeze"
                />
              </path>
            </g>
            <g transform="matrix(1,0,0,1,0,0)">
              <path
                fill="#aaf387"
                fillOpacity="0.6453887509531583"
                d="M62.4,7.46 C62.4,11.58 59.06,14.93 54.94,14.93 C50.82,14.93 47.48,11.58 47.48,7.46 C47.48,3.34 50.82,0 54.94,0 C59.06,0 62.4,3.34 62.4,7.46"
              />
            </g>
            <g transform="matrix(1,0,0,1,0,0)">
              <path
                fill="#aaf387"
                fillOpacity="0"
                d="M301.68,141.51 C301.68,145.63 298.34,148.97 294.22,148.97 C290.1,148.97 286.75,145.63 286.75,141.51 C286.75,137.39 290.1,134.05 294.22,134.05 C298.34,134.05 301.68,137.39 301.68,141.51"
              >
                <animate
                  attributeName="fill-opacity"
                  from="0"
                  to="1"
                  dur="0.5s"
                  begin="2s"
                  fill="freeze"
                />
              </path>
            </g>
          </g>
        </g>
      </svg>
      <Image
        src={aiImage}
        alt="AI Robot"
        className="absolute bottom-0 -right-[10%] w-full h-full object-contain hidden sm:block"
      />
      <div className="z-50 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative flex justify-center text-center sm:justify-start sm:text-left">
        <div className="w-full max-w-2xl">
          <AnimatedWrapper>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-left text-white">
              <span className="sm:whitespace-nowrap">
                YOUR P
                <span className="bg-gradient-to-r from-primary via-accent to-white bg-clip-text text-transparent">
                  ART
                </span>
                NER FOR
              </span>
              <br />
              DIGITAL{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-white bg-clip-text text-transparent">
                GROWTH
              </span>
            </h1>
          </AnimatedWrapper>
          <AnimatedWrapper delay={200}>
            <p className="mt-6 text-lg text-muted-foreground text-left">
              Turning Ideas into Unstoppable Brands and Market Leaders - We're a
              Digital Marketing, AI Automation & Creative Agency
            </p>
          </AnimatedWrapper>
          <AnimatedWrapper delay={400}>
            <div className="mt-10 flex gap-4 justify-start max-[430px]:flex-col">
              <Button asChild size="lg">
                <a href="mailto:misandigital@outlook.com">Get In Touch</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="https://calendly.com/misandigital/30min">
                  Book a Free Call <MoveRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
