"use client";
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
import { useState } from "react";
import Toast from "@/components/Toast";



export default function ContactPage() {
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState("success");
  const [toastTitle, setToastTitle] = useState("");
  const [toastDescription, setToastDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    // Basic validation
    if (!data.email || !data.message) {
      setToastType("error");
      setToastTitle("Missing Information");
      setToastDescription("Please fill in all required fields.");
      setShowToast(true);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/xzzvgpee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setToastType("success");
        setToastTitle("Message Sent!");
        setToastDescription(
          "Thanks for contacting us. We'll get back to you soon."
        );
        setShowToast(true);
        form.reset();
      } else {
        setToastType("error");
        setToastTitle("Submission Failed");
        setToastDescription(
          "There was a problem submitting your message. Please try again."
        );
        setShowToast(true);
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setToastType("error");
      setToastTitle("Error");
      setToastDescription("Something went wrong. Please try again.");
      setShowToast(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <Toast
        isVisible={showToast}
        type={toastType}
        title={toastTitle}
        description={toastDescription}
        onClose={() => setShowToast(false)}
        duration={5000}
      />

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
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input name="firstName" placeholder="First Name" />
                  <Input name="lastName" placeholder="Last Name" />
                </div>
                <Input type="email" name="email" placeholder="Email" required />
                <Input type="tel" name="phone" placeholder="Phone Number" />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
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
                    misandigital@outlook.com
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
                    +234 813 476 2781
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
                  <p className="text-primary">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
}
