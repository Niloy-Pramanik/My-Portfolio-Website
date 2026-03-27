import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { AboutSection } from '@/components/AboutSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ArticlesSection } from '@/components/ArticlesSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { HeaderWrapper } from '@/components/HeaderWrapper';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeaderWrapper />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <TestimonialsSection />
        <ArticlesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
