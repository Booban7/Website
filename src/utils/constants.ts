export const SECTIONS = [
  { id: 'hero', label: 'Status' },
  { id: 'experience', label: 'Quest Log' },
  { id: 'projects', label: 'Key Items' },
  { id: 'contact', label: 'Save' },
] as const

export type SectionId = (typeof SECTIONS)[number]['id']

export const SOUND_STORAGE_KEY = 'portfolio:sound-enabled'
