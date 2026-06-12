import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { motion, useInView } from 'framer-motion';

import { Box, Container, Stack, Typography } from '@mui/material';

export function StatsSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    cities: 0,
    experience: 0,
  });

  const targetCounts = {
    projects: 500,
    clients: 450,
    cities: 15,
    experience: 10,
  };

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepTime = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounts({
          projects: Math.floor(targetCounts.projects * progress),
          clients: Math.floor(targetCounts.clients * progress),
          cities: Math.floor(targetCounts.cities * progress),
          experience: Math.floor(targetCounts.experience * progress),
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounts(targetCounts);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  const stats = [
    {
      value: counts.projects,
      suffix: '+',
      label: t('home.stats.projects', 'Proyectos Completados'),
      color: '#2E7D32',
    },
    {
      value: counts.clients,
      suffix: '+',
      label: t('home.stats.clients', 'Clientes Satisfechos'),
      color: '#4CAF50',
    },
    {
      value: counts.cities,
      suffix: '+',
      label: t('home.stats.cities', 'Ciudades Atendidas'),
      color: '#66BB6A',
    },
    {
      value: counts.experience,
      suffix: '+',
      label: t('home.stats.experience', 'Años de Experiencia'),
      color: '#81C784',
    },
  ];

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
        color: 'white',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            sx={{
              fontWeight: 600,
              mb: 8,
              color: 'white',
            }}
          >
            Números que Nos Respaldan
          </Typography>
        </motion.div>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {(stats || []).map((stat, index) => (
            <Box
              sx={{
                flex: 1,
                minWidth: '200px',
                textAlign: 'center',
              }}
              key={index}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Stack spacing={1} alignItems="center">
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: '2.5rem', md: '3.5rem' },
                      color: 'white',
                      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                    }}
                  >
                    {stat.value}
                    {stat.suffix}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 500,
                      color: 'rgba(255,255,255,0.9)',
                      textAlign: 'center',
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Stack>
              </motion.div>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
