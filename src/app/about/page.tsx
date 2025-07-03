import { type Metadata } from 'next';
import Image from 'next/image';
import { AnimatedWrapper } from '@/components/animations/animated-wrapper';
import WhyUsSection from '@/components/sections/why-us';

export const metadata: Metadata = {
  title: 'About Us | MisanDigital',
  description: 'Learn more about MisanDigital, our mission, values, and the team dedicated to your success.',
};

export default function AboutPage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimatedWrapper className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">About MisanDigital</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                We are a passionate team of marketing experts, strategists, and creatives dedicated to helping businesses thrive in the digital landscape.
            </p>
        </AnimatedWrapper>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight text-accent">Our Story</h2>
                    <p className="text-muted-foreground">
                        Founded with the vision of providing transparent, results-driven digital marketing, MisanDigital has grown from a small startup to a full-service agency serving clients across the globe. Our journey is one of passion, innovation, and an unwavering commitment to our clients' success.
                    </p>
                    <p className="text-muted-foreground">
                        We believe in building partnerships, not just client lists. Our approach is collaborative, data-informed, and always focused on achieving your specific business objectives.
                    </p>
                </div>
            </AnimatedWrapper>
        </div>
      </div>
      <WhyUsSection />
    </>
  );
}
