import { useTranslation } from 'react-i18next';

import { AnimatePresence, motion } from 'framer-motion';

import { Box, Typography } from '@mui/material';

import { ProjectCard } from './ProjectCard';

interface ProjectData {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface ProjectGridProps {
  projects: ProjectData[];
  onProjectClick: (project: ProjectData) => void;
  isLoading?: boolean;
}

export function ProjectGrid({ projects, onProjectClick, isLoading }: ProjectGridProps) {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <Box
        display="grid"
        gridTemplateColumns={{
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
          xl: 'repeat(5, 1fr)',
        }}
        gap={3}
        sx={{ px: { xs: 2, md: 0 } }}
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <Box
            key={index}
            sx={{
              height: 280,
              backgroundColor: 'grey.100',
              borderRadius: 3,
              animation: 'pulse 1.5s ease-in-out infinite',
            }}
          />
        ))}
      </Box>
    );
  }

  if (projects.length === 0) {
    return (
      <Box
        sx={{
          textAlign: 'center',
          py: 8,
          px: 2,
        }}
      >
        <Typography variant="h6" color="text.secondary" gutterBottom>
          {t('gallery.noResults', 'No se encontraron proyectos')}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t('gallery.noResultsDesc', 'Intenta seleccionar una categoría diferente')}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        xs: '1fr',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
        lg: 'repeat(4, 1fr)',
        xl: 'repeat(5, 1fr)',
      }}
      gap={3}
      sx={{ px: { xs: 2, md: 0 } }}
    >
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={onProjectClick} />
        ))}
      </AnimatePresence>
    </Box>
  );
}
