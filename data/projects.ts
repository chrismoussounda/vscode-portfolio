export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Qwisti',
    description:
      'Led full-stack development of an application testing streamlining tool, built with React and Node.js.',
    logo: '/logos/qwisti-logo.svg',
    link: '',
    slug: 'qwisti',
  },
  {
    title: 'Copileo',
    description:
      'A project management tool for steering committees. Led backend development, modernized codebase, and improved performance.',
    logo: '/logos/copileo-logo.png',
    link: '',
    slug: 'copileo',
  },
  {
    title: 'Daxium Connect',
    description:
      'Collaborated on front-end development using React, improving client interactions with forms and connectors.',
    logo: '/logos/daxium-connect-logo.png',
    link: '',
    slug: 'daxium-connect',
  },
  {
    title: 'Just Notion',
    description:
      'A note-taking app with rich text documents that can be published with a public URL for others to read.',
    logo: '/logos/just-notion-logo.svg',
    link: '',
    slug: 'just-notion',
  },
];
