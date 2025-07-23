import { type Metadata } from "next";
import { AnimatedWrapper } from "@/components/animations/animated-wrapper";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  ShoppingCart,
  Stethoscope,
  Building,
  Home,
  GraduationCap,
  Plane,
  Briefcase,
  Heart,
  Monitor,
  Coffee,
  Palette,
  Mail,
  Target,
  BarChart,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve | MisanDigital",
  description:
    "Discover the diverse range of industries MisanDigital serves. From e-commerce to healthcare, we have the expertise to grow your business.",
};

const industries = [
  {
    title: "E-commerce Brands",
    description:
      "Drive sales and build customer loyalty with strategic digital marketing tailored for online retailers.",
    icon: ShoppingCart,
  },
  {
    title: "Health, Wellness & Medical",
    description:
      "Connect with patients and build trust through compliant, effective healthcare marketing strategies.",
    icon: Stethoscope,
  },
  {
    title: "Finance & Legal Firms/Advisors",
    description:
      "Establish authority and generate qualified leads in highly regulated professional services.",
    icon: Building,
  },
  {
    title: "Real Estate & Construction",
    description:
      "Showcase properties and services to attract buyers, sellers, and contractors in your market.",
    icon: Home,
  },
  {
    title: "Education, Coaching & Consultation",
    description:
      "Build your expert brand and attract students or clients with compelling educational content.",
    icon: GraduationCap,
  },
  {
    title: "Lifestyle, Luxury & Travel",
    description:
      "Create aspirational content that drives bookings and builds premium brand experiences.",
    icon: Plane,
  },
  {
    title: "B2B Service Providers",
    description:
      "Generate quality leads and build lasting business relationships through targeted B2B strategies.",
    icon: Briefcase,
  },
  {
    title: "NGOs & Social Impact Brands",
    description:
      "Amplify your mission and drive meaningful engagement for causes that matter.",
    icon: Heart,
  },
  {
    title: "Tech Startups & SaaS Companies",
    description:
      "Scale your user base and demonstrate product value with data-driven growth marketing.",
    icon: Monitor,
  },
  {
    title: "Restaurants & Cafes",
    description:
      "Fill tables and build a loyal customer base with mouth-watering content and local marketing.",
    icon: Coffee,
  },
  {
    title: "Local Artisans & Product Creators",
    description:
      "Share your craft story and reach customers who value handmade, authentic products.",
    icon: Palette,
  },
];

export default function IndustriesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimatedWrapper className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-6">
            Industries We Serve
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            We partner with businesses across diverse industries, bringing
            specialized expertise and tailored strategies to help you dominate
            your market. From startups to global brands, we have the knowledge
            and experience to drive your success.
          </p>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <AnimatedWrapper key={industry.title} delay={index * 100}>
              <Card className="h-full bg-card hover:border-primary transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mb-4 flex justify-center">
                    <industry.icon className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-3">
                    {industry.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>

        <AnimatedWrapper delay={1200}>
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
            <div className="mb-6">
              <Mail className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold tracking-tight text-accent mb-4">
                Don't See Your Industry?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Not sure your business is on the list? We work with many other
                industries too. Feel free to contact us for clarity before
                booking your strategy session.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-secondary bg-primary hover:bg-primary/90 transition-colors duration-200"
              >
                Contact Us
              </a>
              <a
                href="https://calendly.com/misandigital/30min"
                className="inline-flex items-center justify-center px-8 py-3 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary hover:text-white transition-colors duration-200"
              >
                Book Your Free Strategy Session
              </a>
            </div>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper delay={1400}>
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-accent mb-6">
              Why Industry Expertise Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  Targeted Strategies
                </h3>
                <p className="text-muted-foreground">
                  We understand your industry's unique challenges and
                  opportunities, creating strategies that resonate with your
                  specific audience.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <BarChart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  Proven Results
                </h3>
                <p className="text-muted-foreground">
                  Our industry-specific experience means we know what works and
                  what doesn't, delivering faster and more effective results.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  Industry Insights
                </h3>
                <p className="text-muted-foreground">
                  Stay ahead of industry trends and best practices with insights
                  from our specialized expertise and market knowledge.
                </p>
              </div>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
}
