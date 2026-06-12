import React from 'react';

import { Box, Button } from '@mui/material';

interface NavItem {
  path: string;
  label: string;
}

interface Props {
  navItems: NavItem[];
  locationPath: string;
  onNavClick: (path: string) => void;
}

export const DesktopNav = ({ navItems, locationPath, onNavClick }: Props) => {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
      {navItems.map((item) => (
        <Button
          key={item.path}
          onClick={() => onNavClick(item.path)}
          sx={{
            color: locationPath === item.path ? 'primary.main' : '#2E7D32',
            fontWeight: locationPath === item.path ? 700 : 600,
            fontSize: '0.95rem',
            px: 2,
            py: 1,
            borderRadius: 2,
          }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );
};

export default DesktopNav;
