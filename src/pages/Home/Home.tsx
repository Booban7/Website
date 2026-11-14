import { ContactSection } from '@/features/contact'
import { ExperienceSection } from '@/features/experience'
import { HeroSection } from '@/features/hero'
import { ProjectsSection } from '@/features/projects'
import { SkillsSection } from '@/features/skills'

export function Home() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}
