import { services } from "@/lib/services";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AnimatedWrapper } from "@/components/animations/animated-wrapper";
import Link from "next/link";
import { type Metadata } from "next";

export const metadata: Metadata = {
    title: 'Our Services | MisanDigital',
    description: 'Explore the wide range of digital marketing services we offer to help your business grow. From SEO to branding, we have you covered.',
};


const ServicesPage = () => {
    return (
        <div className="bg-background">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <AnimatedWrapper className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Our Comprehensive Services</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                        We provide a full spectrum of digital marketing services tailored to elevate your brand. Explore our offerings to find the perfect solution for your business needs.
                    </p>
                </AnimatedWrapper>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <AnimatedWrapper key={service.slug} delay={index * 50}>
                             <Link href={`/services/${service.slug}`} className="h-full block">
                                <Card className="h-full bg-card hover:border-primary transition-colors duration-300 shadow-lg hover:shadow-primary/20 flex flex-col">
                                    <CardHeader className="flex-grow">
                                        <div className="mb-4">
                                            <service.icon className="h-10 w-10 text-primary" />
                                        </div>
                                        <CardTitle>{service.title}</CardTitle>
                                        <CardDescription className="pt-2">{service.description}</CardDescription>
                                    </CardHeader>
                                </Card>
                            </Link>
                        </AnimatedWrapper>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServicesPage
