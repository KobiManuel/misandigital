import { AnimatedWrapper } from "@/components/animations/animated-wrapper"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const projects = [
    { title: "Brand Identity Revamp", image: "https://images.unsplash.com/photo-1619451428271-87a2a0478083?w=600&h=400&q=80", category: "Branding" },
    { title: "Corporate Website Launch", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&q=80", category: "Web Development" },
    { title: "Organic Search Growth", image: "https://images.unsplash.com/photo-1559526324-593bc0a63da8?w=600&h=400&q=80", category: "SEO" },
    { title: "Social Engagement Campaign", image: "https://images.unsplash.com/photo-1634942537034-142827441b42?w=600&h=400&q=80", category: "Social Media" },
    { title: "E-commerce Store Optimization", image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d54?w=600&h=400&q=80", category: "E-commerce" },
]

const ProjectsSection = () => {
    return (
        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <AnimatedWrapper className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Projects</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Each project embodies our commitment to excellence and innovation. Discover how we have helped businesses elevate their brand presence.
                    </p>
                </AnimatedWrapper>

                <AnimatedWrapper delay={200} className="mt-12">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {projects.map((project, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card className="overflow-hidden group">
                                            <CardContent className="p-0 relative">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    width={600}
                                                    height={400}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                                    <p className="text-primary">{project.category}</p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-[-50px] hidden sm:flex" />
                        <CarouselNext className="right-[-50px] hidden sm:flex" />
                    </Carousel>
                </AnimatedWrapper>
            </div>
        </section>
    )
}

export default ProjectsSection
