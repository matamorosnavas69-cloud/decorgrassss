import { useState } from 'react';

import { motion } from 'framer-motion';

import { ZoomIn as ZoomInIcon } from '@mui/icons-material';
import { Box, Card, CardMedia, Fade, IconButton, Typography } from '@mui/material';

import { OptimizedImage } from '../common/OptimizedImage';

interface ProjectData {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface ProjectCardProps {
  project: ProjectData;
  onClick: (project: ProjectData) => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
    >
      <Card
        sx={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 3,
          cursor: 'pointer',
          height: 280,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
            transform: 'translateY(-2px)',
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onClick(project)}
      >
        <Box sx={{ position: 'relative', height: '100%' }}>
          <OptimizedImage
            src={project.image}
            alt={project.title}
            maxWidth="100%"
            width="100%"
            height="100%"
            aspectRatio={280 / 280}
            borderRadius={0}
          />

          {/* Overlay */}
          <Fade in={isHovered}>
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: 2,
              }}
            >
              {/* Zoom icon */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'white',
                      transform: 'scale(1.1)',
                    },
                  }}
                >
                  <ZoomInIcon />
                </IconButton>
              </Box>

              {/* Project info */}
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    fontWeight: 600,
                    mb: 1,
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                  }}
                >
                  {project.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: '0.9rem',
                  }}
                >
                  {project.description}
                </Typography>
              </Box>
            </Box>
          </Fade>
        </Box>
      </Card>
    </motion.div>
  );
}
