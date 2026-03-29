import { HeroSection } from '@/components/HeroSection';
import { ExploreMore } from '@/components/ExploreMore';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { ResearchSection } from '@/components/ResearchSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col bg-slate-950">
      <main className="flex-1">
        <div id="home">
          <HeroSection />
        </div>
        <ExploreMore />
        <AboutSection />
        <SkillsSection />
        <div id="projects">
          <ProjectsSection />
        </div>
        <ProjectShowcase />
        <div id="research">
          <ResearchSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
