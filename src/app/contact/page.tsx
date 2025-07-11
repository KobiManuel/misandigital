import { type Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { AnimatedWrapper } from "@/components/animations/animated-wrapper";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | MisanDigital",
  description:
    "Get in touch with the MisanDigital team. We are here to answer your questions and help you get started on your digital growth journey.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <AnimatedWrapper className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Get In Touch
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          We're here to help and answer any question you might have. We look
          forward to hearing from you.
        </p>
      </AnimatedWrapper>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <AnimatedWrapper delay={200}>
          <Card className="h-full bg-card/50">
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Phone Number" />
                <Textarea placeholder="Your Message" rows={5} />
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </AnimatedWrapper>
        <AnimatedWrapper delay={400}>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-accent">
              Contact Information
            </h2>
            <p className="text-muted-foreground">
              Alternatively, you can reach us through the following channels.
              We're ready to discuss your next project.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-muted-foreground">
                    Send us an email for inquiries.
                  </p>
                  <a
                    href="mailto:support@misandigital.com"
                    className="text-primary hover:underline"
                  >
                    support@misandigital.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-muted-foreground">
                    Give us a call to speak with our team.
                  </p>
                  <a
                    href="tel:+971505175180"
                    className="text-primary hover:underline"
                  >
                    +971 50 517 518 0
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Office</h3>
                  <p className="text-muted-foreground">
                    Visit our office for a face-to-face meeting.
                  </p>
                  <p className="text-primary">Dubai, UAE</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
}
