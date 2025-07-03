import { services } from "@/lib/services";
import { notFound } from "next/navigation";
import Image from "next/image";
import { AnimatedWrapper } from "@/components/animations/animated-wrapper";
import { type Metadata } from "next";
import { KeywordSuggester } from "@/components/features/keyword-suggester";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const service = services.find(s => s.slug === params.slug);

    if (!service) {
        return {
            title: 'Service Not Found',
        };
    }

    return {
        title: `${service.title} | MisanDigital`,
        description: service.description,
    };
}

export async function generateStaticParams() {
    return services.map(service => ({
        slug: service.slug,
    }));
}

export default function ServiceDetailPage({ params }: Props) {
    const service = services.find(s => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    const { title, description, icon: Icon, slug } = service;

    return (
        <div className="bg-background">
            <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <AnimatedWrapper>
                    <Button variant="ghost" asChild className="mb-8">
                        <Link href="/services"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Services</Link>
                    </Button>
                </AnimatedWrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                     <AnimatedWrapper>
                        <div className="space-y-6">
                            <Icon className="h-16 w-16 text-primary" />
                            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">{title}</h1>
                            <p className="text-lg text-muted-foreground">{description}</p>
                        </div>
                    </AnimatedWrapper>
                    <AnimatedWrapper delay={200}>
                         <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                           <Image
                                src={`https://source.unsplash.com/600x400/?${slug}`}
                                alt={`Visual representation of ${title}`}
                                width={600}
                                height={400}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </AnimatedWrapper>
                </div>
                <AnimatedWrapper delay={400}>
                    <KeywordSuggester serviceDescription={description} serviceTitle={title} />
                </AnimatedWrapper>
            </div>
        </div>
    );
}
