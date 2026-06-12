import { useTranslation } from 'react-i18next';

import { motion } from 'framer-motion';

import {
  Business as CommercialIcon,
  GridView as GridViewIcon,
  Park as ParkIcon,
  Home as ResidentialIcon,
  SportsFootball as SportsIcon,
} from '@mui/icons-material';
import { Box, Chip, Stack } from '@mui/material';

const categoryIcons: Record<string, React.ElementType> = {
  all: GridViewIcon,
  residential: ResidentialIcon,
  commercial: CommercialIcon,
  sports: SportsIcon,
  publicParks: ParkIcon,
};

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categoryCounts: Record<string, number>;
}

export function CategoryFilter({ selectedCategory, onCategoryChange, categoryCounts }: CategoryFilterProps) {
  const { t } = useTranslation();

  const categories = [
    { key: 'all', labelKey: 'gallery.all', fallback: 'Todos' },
    { key: 'residential', labelKey: 'gallery.residential', fallback: 'Residencial' },
    { key: 'commercial', labelKey: 'gallery.commercial', fallback: 'Comercial' },
    { key: 'sports', labelKey: 'gallery.sports', fallback: 'Deportivo' },
    { key: 'publicParks', labelKey: 'gallery.publicParks', fallback: 'Parques Públicos' },
  ];

  return (
    <Box sx={{ py: 4 }}>
      <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" sx={{ gap: 1 }}>
        {categories.map((category) => {
          const IconComponent = categoryIcons[category.key as keyof typeof categoryIcons];
          const count = category.key === 'all' ? categoryCounts.total : categoryCounts[category.key] || 0;

          return (
            <motion.div key={category.key} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Chip
                icon={<IconComponent />}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    {t(category.labelKey, category.fallback)}
                    <Box
                      component="span"
                      sx={{
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        color: selectedCategory === category.key ? 'inherit' : 'text.secondary',
                      }}
                    >
                      ({count})
                    </Box>
                  </Box>
                }
                onClick={() => onCategoryChange(category.key)}
                variant={selectedCategory === category.key ? 'filled' : 'outlined'}
                color={selectedCategory === category.key ? 'primary' : 'default'}
                sx={{
                  fontSize: '0.9rem',
                  fontWeight: selectedCategory === category.key ? 600 : 400,
                  px: 2,
                  py: 0.5,
                  borderRadius: 3,
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    backgroundColor: selectedCategory === category.key ? 'primary.main' : 'primary.light',
                    color: selectedCategory === category.key ? 'white' : 'primary.main',
                  },
                }}
              />
            </motion.div>
          );
        })}
      </Stack>
    </Box>
  );
}
