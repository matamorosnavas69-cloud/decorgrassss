import { motion } from 'framer-motion';

import { Box } from '@mui/material';

import { ApplicationsSection } from '../components/sections/ApplicationsSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { GalleryPreview } from '../components/sections/GalleryPreview';
import { Hero } from '../components/sections/Hero';
import { StatsSection } from '../components/sections/StatsSection';

const HomeView = () => {
  return (
    <Box>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <Hero />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <FeaturesSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <ApplicationsSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <GalleryPreview />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <StatsSection />
      </motion.div>
    </Box>
  );
};

export default HomeView;
