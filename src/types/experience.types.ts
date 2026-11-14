export interface TimelineItem {
  id: string
  title: string
  place: string
  start: string
  end: string
  description: string
  location?: string
  /** e.g. "Hybrid", "Internship" */
  type?: string
}
