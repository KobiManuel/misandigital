import { type Metadata } from "next";
import Image from "next/image";
import { AnimatedWrapper } from "@/components/animations/animated-wrapper";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Target, Heart, Lightbulb, BarChart3, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | MisanDigital",
  description:
    "Learn about MisanDigital - the Growth Architects your business has been waiting for. Our mission, values, and commitment to your success.",
};

const coreValues = [
  {
    title: "Results Over Hype",
    description:
      "We focus on what moves the needle. Vanity metrics are nice — ROI is better.",
    icon: Target,
  },
  {
    title: "Integrity & Transparency",
    description:
      "No shortcuts, no smoke and mirrors. We keep it ethical, measurable, and honest.",
    icon: Heart,
  },
  {
    title: "Creativity with Strategy",
    description:
      "Eye-catching content is nothing without the right strategy. We blend both seamlessly.",
    icon: Lightbulb,
  },
  {
    title: "Data-Driven Decisions",
    description:
      "Your gut is good. Data is better. We back our ideas with real insights.",
    icon: BarChart3,
  },
  {
    title: "Continuous Growth",
    description:
      "For you and for us. We invest in learning, evolving, and pushing creative boundaries.",
    icon: TrendingUp,
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimatedWrapper className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-6">
            We're the Growth Architects Your Business Has Been Waiting For
          </h1>
          <p className="max-w-4xl mx-auto text-lg text-muted-foreground">
            At Misan Digital, we don't just "do social media" or "run ads." We
            engineer growth. We tell brand stories that make people stop
            scrolling and start buying. We turn overlooked businesses into
            unforgettable brands.
          </p>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <AnimatedWrapper delay={200}>
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&q=80"
                alt="Creative team working on a project"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper delay={400}>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-accent">
                Our Mission
              </h2>
              <p className="text-muted-foreground text-lg">
                From sleek startups to established enterprises, our mission is
                simple: To help you dominate your digital space, drive real
                sales, and build a brand that lasts.
              </p>
              <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-muted-foreground font-medium">
                  Our mission is to empower ambitious businesses to thrive
                  online by crafting data-driven strategies, compelling content,
                  and automated systems that fuel long-term growth. We exist to
                  turn your boldest business goals into reality.
                </p>
              </div>
            </div>
          </AnimatedWrapper>
        </div>

        <AnimatedWrapper delay={600}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-accent mb-4">
              Our Core Values
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              These principles guide everything we do and shape how we work with
              our clients.
            </p>
          </div>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {coreValues.map((value, index) => (
            <AnimatedWrapper key={value.title} delay={700 + index * 100}>
              <Card className="h-full bg-card hover:border-primary transition-colors duration-300 shadow-lg hover:shadow-primary/20">
                <CardHeader className="text-center">
                  <div className="mb-4 flex justify-center">
                    <value.icon className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-3">{value.title}</CardTitle>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>

        <AnimatedWrapper delay={1200}>
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-accent mb-4">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Let's build something extraordinary together.
            </p>
            <a
              href="https://calendly.com/misandigital/30min"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-200"
            >
              Book Your Free Strategy Session
            </a>
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
}
