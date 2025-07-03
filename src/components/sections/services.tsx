import { services } from "@/lib/services";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AnimatedWrapper } from "@/components/animations/animated-wrapper";
import Link from "next/link";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

const ServicesSection = () => {
    const featuredServices = services.slice(0, 6);

    return (
        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <AnimatedWrapper className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Services</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        From market studies to full-scale digital marketing campaigns, we offer everything you need to grow your business.
                    </p>
                </AnimatedWrapper>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredServices.map((service, index) => (
                        <AnimatedWrapper key={service.slug} delay={index * 100}>
                            <Link href={`/services/${service.slug}`} className="h-full block">
                                <Card className="h-full bg-card hover:border-primary transition-colors duration-300 shadow-lg hover:shadow-primary/20">
                                    <CardHeader>
                                        <div className="mb-4">
                                            <service.icon className="h-10 w-10 text-primary" />
                                        </div>
                                        <CardTitle>{service.title}</CardTitle>
                                        <CardDescription className="pt-2">{service.description.substring(0, 100)}...</CardDescription>
                                    </CardHeader>
                                </Card>
                            </Link>
                        </AnimatedWrapper>
                    ))}
                </div>
                <AnimatedWrapper delay={featuredServices.length * 100} className="mt-12 text-center">
                    <Button asChild size="lg" variant="outline">
                        <Link href="/services">View All Services <MoveRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </AnimatedWrapper>
            </div>
        </section>
    )
}

export default ServicesSection;
