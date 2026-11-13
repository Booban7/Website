import { ContactSection } from '@/features/contact'
import { ExperienceSection } from '@/features/experience'
import { HeroSection } from '@/features/hero'
import { ProjectsSection } from '@/features/projects'

export function Home() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}
