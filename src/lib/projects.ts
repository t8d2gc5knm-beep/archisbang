import data from '../data/projects.json';

export type CategoryKey = 'scolastica' | 'riqualificazioni' | 'aziende';

export interface Project {
  slug: string;
  title: string;
  category: CategoryKey;
  location: string;
  tag: string;
  cover: string;
  gallery: string[];
}

export const projects = data as Project[];

export interface Category {
  key: CategoryKey;
  slug: string; // URL segment under /progetti/
  label: string;
  blurb: string;
}

export const categories: Category[] = [
  {
    key: 'scolastica',
    slug: 'architettura-scolastica',
    label: 'Architettura Scolastica',
    blurb:
      'Edifici scolastici innovativi di ogni ordine e grado: ambienti flessibili, apertura extrascolastica e sostenibilità energetica nZEB.',
  },
  {
    key: 'riqualificazioni',
    slug: 'riqualificazioni',
    label: 'Riqualificazioni',
    blurb:
      'Rigenerazione architettonica ed energetica del costruito: restyling, efficientamento e nuova vita per spazi esistenti.',
  },
  {
    key: 'aziende',
    slug: 'aziende-e-spazi-smart',
    label: 'Aziende e Spazi Smart',
    blurb:
      'Spazi di lavoro smart che raccontano il brand: flessibilità, benessere e identità per uffici e ambienti produttivi.',
  },
];

export const categoryByKey = (key: CategoryKey): Category =>
  categories.find((c) => c.key === key)!;

export const categoryBySlug = (slug: string): Category | undefined =>
  categories.find((c) => c.slug === slug);

export const projectsByCategory = (key: CategoryKey): Project[] =>
  projects.filter((p) => p.category === key);

export const projectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
