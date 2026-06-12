import React from 'react';

import { Box, Typography } from '@mui/material';

export const HeroStats = ({ t }: { t: any }) => (
  <Box sx={{ display: 'flex', gap: 3 }}>
    <Box>
      <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
        500+
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {t('home.stats.projects')}
      </Typography>
    </Box>
    <Box>
      <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
        10+
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {t('home.stats.experience')}
      </Typography>
    </Box>
    <Box>
      <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
        100%
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {t('home.stats.clients')}
      </Typography>
    </Box>
  </Box>
);

export default HeroStats;
