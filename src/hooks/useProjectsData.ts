import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { IMAGES, getCategoryStats } from '../utils/images';

export interface ProjectData {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const useProjectsData = () => {
  const { t, i18n } = useTranslation();

  const projects = useMemo((): ProjectData[] => {
    const list: ProjectData[] = [];
    let id = 1;

    IMAGES.gallery.residential.forEach((image, index) => {
      const phraseKey = ((index % 7) + 1).toString();
      list.push({
        id: id++,
        title: t(`gallery.phrases.residential.${phraseKey}`, `Proyecto Residencial ${index + 1}`),
        category: t('gallery.categories.residential', 'residential'),
        image,
        description: t(
          `gallery.phrases.residential.${phraseKey}`,
          'Instalación residencial premium de grama sintética con acabados de lujo.',
        ),
      });
    });

    IMAGES.gallery.commercial.forEach((image, index) => {
      const phraseKey = ((index % 4) + 1).toString();
      list.push({
        id: id++,
        title: t(`gallery.phrases.commercial.${phraseKey}`, `Proyecto Comercial ${index + 1}`),
        category: t('gallery.categories.commercial', 'commercial'),
        image,
        description: t(
          `gallery.phrases.commercial.${phraseKey}`,
          'Instalación comercial profesional con grama sintética de alta resistencia.',
        ),
      });
    });

    IMAGES.gallery.sports.forEach((image, index) => {
      const phraseKey = ((index % 13) + 1).toString();
      list.push({
        id: id++,
        title: t(`gallery.phrases.sports.${phraseKey}`, `Campo Deportivo ${index + 1}`),
        category: t('gallery.categories.sports', 'sports'),
        image,
        description: t(
          `gallery.phrases.sports.${phraseKey}`,
          'Instalación deportiva profesional con grama sintética de alta resistencia.',
        ),
      });
    });

    IMAGES.gallery.publicParks.forEach((image, index) => {
      const phraseKey = ((index % 5) + 1).toString();
      list.push({
        id: id++,
        title: t(`gallery.phrases.publicParks.${phraseKey}`, `Parques Públicos ${index + 1}`),
        category: 'publicParks',
        image,
        description: t(
          `gallery.phrases.publicParks.${phraseKey}`,
          'Diseño de parques públicos con grama sintética multicolor.',
        ),
      });
    });

    return list;
  }, [i18n.language]);

  const categoryCounts = getCategoryStats();

  return { projects, categoryCounts };
};

export default useProjectsData;
