import { AnimatedWrapper } from "@/components/animations/animated-wrapper"
import Image from "next/image"

const AboutSection = () => {
    return (
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <AnimatedWrapper>
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                                We are all about ‘Upscale’-ing your brand to new heights and levels!
                            </h2>
                            <p className="text-muted-foreground">
                                We pride ourselves with the outstanding results we’ve seen after innumerable collaborations with some of the most distinguishable media companies in the MENA region.
                            </p>
                            <p className="text-muted-foreground">
                                Turning into a media hub across Dubai & Lebanon – and soon in Saudi Arabia! – providing all essential marketing services stands as a proof of our robust & comprehensive marketing strategies that distinguishably meet all brands’ needs.
                            </p>
                        </div>
                    </AnimatedWrapper>
                     <AnimatedWrapper delay={200}>
                        <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                           <Image
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&q=80"
                                alt="Team collaborating in a modern office"
                                width={600}
                                height={400}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </AnimatedWrapper>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;
