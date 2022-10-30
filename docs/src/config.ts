export const SITE = {
  title: 'maryoku',
  description: '以web优先的UI组件库. 希望它可以给使用者提供源源不断的魔力(máꜜryòkù)',
  defaultLanguage: 'zh_Hans',
};

export const OPEN_GRAPH = {
  image: {
    src: 'https://cdn.jsdelivr.net/gh/innocces/maryoku-ui/docs/public/favicon.svg',
    alt: 'maryoku-ui logo',
  },
  twitter: '',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description?: string;
  layout?: string;
  image?: { src: string; alt: string };
  dir?: 'ltr' | 'rtl';
  ogLocale?: string;
  lang?: string;
};

export const KNOWN_LANGUAGES = {
  English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/innocces/maryoku-ui/tree/main/docs`;

export const COMMUNITY_INVITE_URL = `https://maryoku-ui.onrender.com/chat`;

export const SOCIALS = {
  discord: 'https://discord.gg/N82HK72uJk',
  github: 'https://github.com/innocces/maryoku-ui',
  discussion: 'https://github.com/innocces/maryoku-ui/discussions/1',
} as const;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: 'XXXXXXXXXX',
  appId: 'XXXXXXXXXX',
  apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
  typeof KNOWN_LANGUAGE_CODES[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  en: {
    'Section Header': [
      { text: 'Introduction', link: 'en/introduction' },
      { text: 'Page 2', link: 'en/page-2' },
      { text: 'Page 3', link: 'en/page-3' },
    ],
    'Another Section': [{ text: 'Page 4', link: 'en/page-4' }],
  },
};
