import { type Metadata } from "next";
import { AnimatedWrapper } from "@/components/animations/animated-wrapper";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Users,
  Clock,
  Package,
  Star,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | MisanDigital",
  description:
    "Get answers to common questions about our services, processes, and how we can help grow your business.",
};

const faqs = [
  {
    question: "What kinds of businesses do you work with?",
    answer:
      "We partner with businesses of all sizes — from startups to global brands. We especially excel with e-commerce, clinics, coaches, real estate, luxury and service-based businesses.",
    icon: Users,
  },
  {
    question: "How long before we see results?",
    answer:
      "It depends on your goals. Some campaigns see traction in weeks; more complex strategies (like SEO or branding) may take a few months for full impact. We'll give you realistic timelines from day one.",
    icon: Clock,
  },
  {
    question: "Do you offer one-time projects or only monthly packages?",
    answer:
      "Both! We handle one-time projects (like website builds or rebrands) as well as ongoing retainers for social media, content, ads, and growth marketing.",
    icon: Package,
  },
  {
    question: "What makes you different from other agencies?",
    answer:
      "We combine creativity, data, and automation. No cookie-cutter packages — everything is tailored. And we care deeply about transparency. You'll always know where your money goes and what's working.",
    icon: Star,
  },
  {
    question: "How do we get started?",
    answer:
      'Simple. Click "Book Your Free Strategy Call" and we\'ll map out a clear path to growing your brand.',
    icon: ArrowRight,
  },
];

const additionalQuestions = [
  {
    question: "Do you work with international clients?",
    answer:
      "Yes! We work with clients globally and understand the nuances of different markets and time zones.",
  },
  {
    question: "What's included in your reporting?",
    answer:
      "We provide detailed monthly reports with key metrics, insights, and recommendations. You'll always know how your campaigns are performing.",
  },
  {
    question: "Can you help with rebranding?",
    answer:
      "Absolutely! We offer complete rebranding services including logo design, brand guidelines, and messaging strategy.",
  },
  {
    question: "Do you provide content creation?",
    answer:
      "Yes, we create all types of content including social media posts, blog articles, videos, and marketing materials.",
  },
  {
    question: "What's your typical contract length?",
    answer:
      "For ongoing services, we typically recommend 6-12 month contracts to see meaningful results, but we're flexible based on your needs.",
  },
  {
    question: "Do you offer training for our team?",
    answer:
      "Yes! We can provide training sessions to help your team understand and implement digital marketing best practices.",
  },
];

export default function FAQPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimatedWrapper className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-6">
            Frequently Asked Questions
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Get answers to the most common questions about our services,
            process, and how we can help grow your business.
          </p>
        </AnimatedWrapper>

        <div className="space-y-6 mb-16">
          {faqs.map((faq, index) => (
            <AnimatedWrapper key={faq.question} delay={index * 100}>
              <Card className="bg-card hover:border-primary transition-colors duration-300 shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <faq.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-3 text-left">
                        {faq.question}
                      </CardTitle>
                      <CardDescription className="text-base text-left">
                        {faq.answer}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>

        <AnimatedWrapper delay={600}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-accent mb-8 text-center">
              More Questions & Answers
            </h2>
            <div className="space-y-4">
              {additionalQuestions.map((item, index) => (
                <div
                  key={item.question}
                  className="border-b border-border pb-4"
                >
                  <h3 className="text-lg font-semibold text-primary mb-2 flex items-center gap-2">
                    <HelpCircle className="h-5 w-5" />
                    {item.question}
                  </h3>
                  <p className="text-muted-foreground ml-7">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper delay={800}>
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-accent mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We're here to help! Book a free strategy call and get personalized
              answers to your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-200"
              >
                Contact Us
              </a>
              <a
                href="/book-call"
                className="inline-flex items-center justify-center px-8 py-3 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary hover:text-white transition-colors duration-200"
              >
                Book Your Free Strategy Session
              </a>
            </div>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper delay={1000}>
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-accent mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-6">
              Let's discuss your specific needs and create a custom strategy for
              your business.
            </p>
            <a
              href="/book-call"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-200"
            >
              Book Your Free Strategy Call
            </a>
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
}
