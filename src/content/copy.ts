export type Alignment = "good" | "evil";

export interface SectionCopy {
  eyebrow: string;
  title: string;
  intro?: string;
}

interface AlignmentContent {
  label: string;
  tagline: string;
  gateTitle: string;
  gateDescription: string;
  gateCta: string;
  hero: {
    eyebrow: string;
    name: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  about: SectionCopy & { paragraphs: string[] };
  skills: SectionCopy;
  experience: SectionCopy;
  projects: SectionCopy;
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    cta: string;
  };
  footerNote: string;
}

export const content: Record<Alignment, AlignmentContent> = {
  good: {
    label: "The Radiant Path",
    tagline: "Champion of the Light",
    gateTitle: "The Radiant Path",
    gateDescription:
      "Walk in the light. Build with honour, lift others up, and let your work shine as a beacon.",
    gateCta: "Take the Oath",
    hero: {
      eyebrow: "Paladin · Builder · Guardian of Good Code",
      name: "Robin Davoust",
      title: "Crafting software worthy of the light.",
      subtitle:
        "I build with care and conviction — clean code, honest work, and interfaces that guide people gently toward what they need.",
      primaryCta: "Behold my deeds",
      secondaryCta: "Send a raven",
    },
    about: {
      eyebrow: "The Hero's Tale",
      title: "A little about the champion behind the code",
      paragraphs: [
        "I'm a developer who believes technology should serve people with clarity and kindness. Every line of code is a small vow: to be honest, maintainable, and good.",
        "My journey has taken me through many realms and guilds, always seeking to leave things brighter than I found them.",
        "When the day's quests are done, I recharge by learning new craft and mentoring those just setting out on the path.",
      ],
    },
    skills: {
      eyebrow: "Sacred Abilities",
      title: "Skills & blessings",
      intro: "The virtues and tools I wield in service of great work.",
    },
    experience: {
      eyebrow: "Chronicle of Deeds",
      title: "Quests & campaigns",
      intro: "The noble causes and fellowships that forged my craft.",
    },
    projects: {
      eyebrow: "Relics of Light",
      title: "Artifacts I've forged",
      intro: "A handful of creations, each made to help and to heal.",
    },
    contact: {
      eyebrow: "Answer the Call",
      title: "Let us join forces for a greater cause",
      text: "Have a noble quest, a fellowship to build, or a good word to share? My door is always open to the worthy.",
      cta: "Send word",
    },
    footerNote: "Forged in the light · Ever in service of good code",
  },
  evil: {
    label: "The Shadow Path",
    tagline: "Sovereign of the Dark",
    gateTitle: "The Shadow Path",
    gateDescription:
      "Embrace the dark. Bend systems to your will, command power without mercy, and let your work strike awe and dread.",
    gateCta: "Sign in Blood",
    hero: {
      eyebrow: "Warlock · Architect · Master of Ruthless Code",
      name: "Robin Davoust",
      title: "Bending software to an iron will.",
      subtitle:
        "I build with ambition and cunning — merciless efficiency, dark elegance, and interfaces that command rather than ask.",
      primaryCta: "Witness my conquests",
      secondaryCta: "Summon me",
    },
    about: {
      eyebrow: "The Villain's Origin",
      title: "A little about the power behind the code",
      paragraphs: [
        "I'm a developer who believes technology is power — and power is meant to be wielded. Every line of code bends the world a little more to my design.",
        "My path has cut through many kingdoms and guilds, always claiming what mattered and discarding the rest.",
        "When the conquests pause, I sharpen my craft in the dark, hoarding knowledge that others fear to seek.",
      ],
    },
    skills: {
      eyebrow: "Forbidden Arts",
      title: "Powers & dark arts",
      intro: "The weapons and rituals I command to bend any project to my will.",
    },
    experience: {
      eyebrow: "Ledger of Conquests",
      title: "Campaigns & sieges",
      intro: "The kingdoms I marched through and the strongholds I claimed.",
    },
    projects: {
      eyebrow: "Cursed Relics",
      title: "Artifacts I've conjured",
      intro: "A handful of creations, each forged to dominate and endure.",
    },
    contact: {
      eyebrow: "Summon the Dark",
      title: "Bind your fate to mine",
      text: "Have a conquest to wage, an empire to raise, or a bargain to strike? Speak my name and I shall answer.",
      cta: "Summon me",
    },
    footerNote: "Sworn to the shadow · Ruthless in every commit",
  },
};
