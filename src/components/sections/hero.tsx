import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedWrapper } from "@/components/animations/animated-wrapper";
import { MoveRight } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="py-20 sm:py-28 lg:py-36 bg-gradient-to-b from-background to-card/50">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <AnimatedWrapper>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-white">
                        YOUR PARTNER FOR
                        <br />
                        DIGITAL GROWTH
                    </h1>
                </AnimatedWrapper>
                <AnimatedWrapper delay={200}>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Assembling, Understanding, Customizing marketing plans, and much more!
                        Our teams hold extensive experience that spans over 10 YEARS in the fields of Branding and Marketing.
                    </p>
                </AnimatedWrapper>
                <AnimatedWrapper delay={400}>
                    <div className="mt-10 flex justify-center gap-4">
                        <Button asChild size="lg">
                            <Link href="/services">Our Services</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href="/contact">Book a Free Call <MoveRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </div>
                </AnimatedWrapper>
            </div>
        </section>
    )
}
export default HeroSection;
