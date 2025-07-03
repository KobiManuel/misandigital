import { AnimatedWrapper } from "@/components/animations/animated-wrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Rafa",
        title: "Marketing Team",
        quote: "Working with Misan Digital has been a transformative experience characterized by exceptional professionalism and unwavering support. Their team consistently demonstrates a proactive approach, anticipating our needs and providing tailored solutions.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&q=80&fit=crop",
    },
    {
        name: "Youssef Dimachk",
        title: "Group General Manager, MUST GROUP",
        quote: "A straight forward and clear communication allowed us to move forward within a perfectly adapted timeline. They were helpful at anytime and able to understand our goals and needs and the result resonates with our version.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80&fit=crop",
    },
    {
        name: "Bashir El Alieh",
        title: "Sales & Marketing Manager, TASKEEN",
        quote: "I sincerely appreciate the time your teams spent reviewing our website design and recommending ideas. Your support was very helpful and gave us a new positive spirit. I greatly appreciate the care you have provided to us.",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&q=80&fit=crop",
    },
];

const TestimonialsSection = () => {
    return (
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <AnimatedWrapper className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">What Our Clients Say!</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Real stories from satisfied partners who have experienced growth with us.
                    </p>
                </AnimatedWrapper>

                <AnimatedWrapper delay={200} className="mt-12">
                     <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full max-w-4xl mx-auto"
                    >
                        <CarouselContent>
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-4">
                                        <Card className="bg-background">
                                            <CardContent className="p-8 text-center flex flex-col items-center">
                                                <Avatar className="w-20 h-20 mb-4">
                                                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                                <div className="flex gap-1 text-accent mb-4">
                                                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                                                </div>
                                                <p className="text-lg italic text-foreground mb-4">"{testimonial.quote}"</p>
                                                <p className="font-bold text-primary">{testimonial.name}</p>
                                                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </AnimatedWrapper>
            </div>
        </section>
    );
};

export default TestimonialsSection;
