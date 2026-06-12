import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { motion } from 'framer-motion';

import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';

import { CategoryFilter, ProjectGrid, ProjectModal } from '../components/gallery';
import useProjectsData from '../hooks/useProjectsData';

interface ProjectData {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const GalleryView = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { projects: allProjects, categoryCounts } = useProjectsData();

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') {
      return allProjects;
    }
    return allProjects.filter((project) => project.category === selectedCategory);
  }, [allProjects, selectedCategory]);

  // Simulate loading with shorter duration
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600); // Reduced from 800ms to 600ms
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const handleProjectClick = (project: ProjectData) => {
    setSelectedProject(project);
  };

  const handleModalClose = () => {
    setSelectedProject(null);
  };

  const currentProjectIndex = selectedProject ? filteredProjects.findIndex((p) => p.id === selectedProject.id) : -1;

  const handleNext = () => {
    if (currentProjectIndex < filteredProjects.length - 1) {
      setSelectedProject(filteredProjects[currentProjectIndex + 1]);
    }
  };

  const handlePrevious = () => {
    if (currentProjectIndex > 0) {
      setSelectedProject(filteredProjects[currentProjectIndex - 1]);
    }
  };

  return (
    <Box
      sx={{
        pt: { xs: 6, md: 8 },
        minHeight: '100vh',
        backgroundColor: 'background.default',
      }}
    >
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Container
          maxWidth="xl"
          sx={{
            py: { xs: 6, md: 10 },
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Box
            textAlign="center"
            sx={{
              mb: { xs: 6, md: 8 },
              maxWidth: 1000,
              mx: 'auto',
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 800,
                fontSize: {
                  xs: '2.2rem',
                  sm: '2.8rem',
                  md: '3.5rem',
                  lg: '4rem',
                },
                background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: { xs: 2, md: 3 },
                lineHeight: { xs: 1.2, md: 1.1 },
              }}
            >
              {t('gallery.hero.title', 'Galería de Proyectos Realizados')}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: { xs: '100%', md: 800 },
                mx: 'auto',
                lineHeight: { xs: 1.6, md: 1.8 },
                fontSize: { xs: '1.1rem', md: '1.25rem' },
              }}
            >
              {t(
                'gallery.hero.subtitle',
                'Descubre la calidad de nuestro trabajo a través de proyectos reales. Cada instalación refleja nuestro compromiso con la excelencia y la satisfacción del cliente.',
              )}
            </Typography>
          </Box>
        </Container>
      </motion.div>

      {/* Categories Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Container
          maxWidth="xl"
          sx={{
            px: { xs: 2, sm: 3, md: 4 },
            mb: { xs: 4, md: 6 },
          }}
        >
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            categoryCounts={categoryCounts}
          />
        </Container>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Container
          maxWidth="xl"
          sx={{
            px: { xs: 2, sm: 3, md: 4 },
            pb: { xs: 6, md: 10 },
          }}
        >
          <ProjectGrid projects={filteredProjects} onProjectClick={handleProjectClick} isLoading={isLoading} />
        </Container>
      </motion.div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        open={!!selectedProject}
        onClose={handleModalClose}
        onNext={currentProjectIndex < filteredProjects.length - 1 ? handleNext : undefined}
        onPrevious={currentProjectIndex > 0 ? handlePrevious : undefined}
        hasNext={currentProjectIndex < filteredProjects.length - 1}
        hasPrevious={currentProjectIndex > 0}
      />
    </Box>
  );
};

export default GalleryView;
