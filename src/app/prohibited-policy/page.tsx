import { type Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Prohibited Policy | MisanDigital',
  description: 'Our ethical, legal, and responsible marketing practices and guidelines.',
};

export default function ProhibitedPolicyPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8">
      <Card className="bg-card/50">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary tracking-tight text-center">
            Prohibited Products, Services & Industries
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-invert max-w-none text-muted-foreground space-y-6">
          <p className="text-center">
            At Misan Digital, we prioritize ethical, legal, and responsible marketing practices. To ensure the safety of consumers and compliance with advertising platform policies, we do not provide services to businesses involved in any of the following:
          </p>
          
          <div>
            <h2 className="text-xl font-semibold text-accent mb-2">Prohibited Products & Services</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Fake or unapproved sexual enhancement products or supplements</li>
              <li>Unregulated or unsafe weight loss products (e.g., teas, pills, injections)</li>
              <li>Harmful or medically unapproved body modification services (e.g., skin bleaching, illegal fillers, DIY surgeries, or unsafe cosmetic procedures)</li>
              <li>Tobacco products, including cigarettes, cigars, chewing tobacco, and related accessories</li>
              <li>Unlicensed pharmaceuticals or medical products</li>
              <li>Adult entertainment, pornography, or explicit content</li>
              <li>Weapons, firearms, ammunition, or self-defense gadgets not legally approved</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-accent mb-2">Prohibited Business Practices</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Illegal activities or services in any jurisdiction</li>
              <li>Counterfeit goods, fake luxury items, or replica products</li>
              <li>Gambling, betting, or lottery platforms (unless government-licensed)</li>
              <li>Cryptocurrency or forex schemes not legally regulated</li>
              <li>Multi-level marketing (MLM), pyramid schemes, or deceptive financial systems</li>
              <li>False advertising, fake testimonials, or spammy lead generation</li>
              <li>Hate speech, political extremism, or discriminatory content of any kind</li>
            </ul>
          </div>

          <p>
            We reserve the right to refuse service or terminate any client relationship that violates these standards, local laws, or the terms of platforms like Meta (Facebook/Instagram), Google, TikTok, or YouTube.
          </p>

          <p className="font-semibold text-center text-foreground">
            Not sure if your business qualifies? Feel free to contact us for clarity before booking.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
