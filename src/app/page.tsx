import { HeroSection } from '@/components/HeroSection';
import { ExploreMore } from '@/components/ExploreMore';
import { AboutSection } from '@/components/AboutSection';
import { TechStackSection } from '@/components/TechStackSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { ResearchSection } from '@/components/ResearchSection';
import { CertificatesSection } from '@/components/CertificatesSection';
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
        <TechStackSection />
        <div id="projects">
          <ProjectsSection />
        </div>
        <ProjectShowcase />
        <div id="research">
          <ResearchSection />
        </div>
        <CertificatesSection />
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
