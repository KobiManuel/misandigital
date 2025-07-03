import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ServicesSection from '@/components/sections/services';
import WhyUsSection from '@/components/sections/why-us';
import TestimonialsSection from '@/components/sections/testimonials';
import ProjectsSection from '@/components/sections/projects';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <ProjectsSection />
      <TestimonialsSection />
    </>
  );
}
