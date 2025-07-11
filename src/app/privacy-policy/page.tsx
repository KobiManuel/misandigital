import { type Metadata } from "next";
import { AnimatedWrapper } from "@/components/animations/animated-wrapper";

export const metadata: Metadata = {
  title: "Privacy Policy | MisanDigital",
  description:
    "Learn how MisanDigital collects, uses, and protects your personal information when you visit our website or use our services.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimatedWrapper className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Effective date: July, 2025
          </p>
        </AnimatedWrapper>

        <div className="prose prose-lg max-w-none">
          <AnimatedWrapper delay={100}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-accent mb-4">
                1. Who We Are
              </h2>
              <p className="text-muted-foreground">
                This Privacy Policy describes how Misan Digital collects, uses,
                and protects your information when you visit our website
                www.misandigital.com or use our services.
              </p>
            </section>
          </AnimatedWrapper>

          <AnimatedWrapper delay={200}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-accent mb-4">
                2. What Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    a) Personal Information
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    When you fill out a form, request a quote, book a call, or
                    otherwise interact with us, we may collect:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Business name</li>
                    <li>Any other details you voluntarily provide</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    b) Usage & Technical Data
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    We may automatically collect:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Pages visited & time spent</li>
                    <li>Device information</li>
                    <li>Cookies & similar tracking technologies</li>
                  </ul>
                  <p className="text-muted-foreground mt-3">
                    This helps us improve your experience on our site.
                  </p>
                </div>
              </div>
            </section>
          </AnimatedWrapper>

          <AnimatedWrapper delay={300}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-accent mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-muted-foreground mb-3">
                We use the data we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Provide and improve our services</li>
                <li>Respond to inquiries or customer support requests</li>
                <li>Send marketing emails (you can opt out anytime)</li>
                <li>
                  Analyze website usage & optimize our marketing strategies
                </li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>
          </AnimatedWrapper>

          <AnimatedWrapper delay={400}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-accent mb-4">
                4. Cookies & Tracking
              </h2>
              <p className="text-muted-foreground mb-3">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Understand how visitors use our site</li>
                <li>Personalize content and ads</li>
                <li>Improve site performance</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                You can control cookies through your browser settings. By
                continuing to use our site, you consent to our use of cookies.
              </p>
            </section>
          </AnimatedWrapper>

          <AnimatedWrapper delay={500}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-accent mb-4">
                5. How We Share Your Information
              </h2>
              <p className="text-muted-foreground mb-3">
                We may share your data with trusted third-party partners who
                help us:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Host our website</li>
                <li>Send emails & newsletters</li>
                <li>Manage advertising campaigns</li>
                <li>Analyze website performance</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                We only share the minimum necessary data and ensure these
                partners uphold strict privacy standards.
              </p>
              <p className="text-muted-foreground font-semibold mt-2">
                We do not sell your personal information.
              </p>
            </section>
          </AnimatedWrapper>

          <AnimatedWrapper delay={600}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-accent mb-4">
                6. Data Security
              </h2>
              <p className="text-muted-foreground">
                We implement reasonable security measures to protect your data.
                However, no system is 100% secure. Use our services at your own
                risk, and please notify us immediately if you suspect
                unauthorized use.
              </p>
            </section>
          </AnimatedWrapper>

          <AnimatedWrapper delay={700}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-accent mb-4">
                7. Your Rights
              </h2>
              <p className="text-muted-foreground mb-3">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Access, correct, or delete your personal data</li>
                <li>Object to processing or request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                To exercise these rights, please contact us.
              </p>
            </section>
          </AnimatedWrapper>

          <AnimatedWrapper delay={800}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-accent mb-4">
                8. Changes to This Policy
              </h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy occasionally. We'll post any
                changes here, with an updated effective date.
              </p>
            </section>
          </AnimatedWrapper>

          <AnimatedWrapper delay={900}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-accent mb-4">
                9. Contact Us
              </h2>
              <p className="text-muted-foreground mb-3">
                If you have questions about this Privacy Policy or how we handle
                your data, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong>Email:</strong> misandigital@outlook.com
                </p>
                <p>
                  <strong>Address:</strong> Lagos, Nigeria
                </p>
              </div>
            </section>
          </AnimatedWrapper>
        </div>
      </div>
    </div>
  );
}
