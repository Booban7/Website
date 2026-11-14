import type { TimelineItem } from '@/types/experience.types'

export const work: TimelineItem[] = [
  {
    id: 'walley',
    title: 'Frontend Developer',
    place: 'Walley',
    start: 'Aug 2023',
    end: 'Present',
    location: 'Gothenburg, Sweden',
    type: 'Hybrid',
    description: 'Working on the Walley app, continuously improving and developing it to deliver a smooth and great user experience.',
  },
  {
    id: 'pinpointer',
    title: 'Frontend Developer',
    place: 'Pinpointer AB (consultant via Academic Work)',
    start: 'Jun 2022',
    end: 'Jun 2023',
    location: 'Gothenburg, Sweden',
    // TODO: edit
    description:
      'Developed the web platform for managing excavated soil and construction mass logistics, as a consultant through Academic Work.',
  },
  {
    id: 'infor',
    title: 'Junior Software Engineer',
    place: 'Infor',
    start: 'Jul 2021',
    end: 'Dec 2021',
    location: 'Linköping, Sweden',
    description: "Worked on Infor M3, the company's ERP system, developing its new web interface built with Angular.",
  },
  {
    id: 'aengeln',
    title: 'Web Developer',
    place: 'Aengeln AB',
    start: 'Mar 2021',
    end: 'Jun 2021',
    location: 'Växjö, Sweden',
    type: 'Internship',
    description: 'Built an e-commerce website with React together with one other developer.',
  },
  {
    id: 'alpacha',
    title: 'Web Developer',
    place: 'Alpacha AB',
    start: 'Sep 2020',
    end: 'Nov 2020',
    location: 'Kalmar, Sweden',
    type: 'Internship',
    description: 'Worked on a website builder tool built with Angular.',
  },
]

export const studies: TimelineItem[] = [
  {
    id: 'ec-utbildning',
    title: 'Frontend Developer, Higher Vocational Education (YH)',
    place: 'EC Utbildning',
    start: '2019',
    end: 'Jun 2021',
    type: 'Vocational diploma (Yrkesexamen)',
    // TODO: edit
    description:
      'Two-year vocational programme in frontend development, covering HTML, CSS, JavaScript, React, UX and agile teamwork, including internships at Alpacha and Aengeln.',
  },
]
