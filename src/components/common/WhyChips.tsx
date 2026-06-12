import { useTranslation } from 'react-i18next';

import { Chip, Stack } from '@mui/material';

interface WhyChipsProps {
  itemsKeys: string[];
}

export function WhyChips({ itemsKeys }: WhyChipsProps) {
  const { t } = useTranslation();
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2}>
      {itemsKeys.map((key) => (
        <Chip
          key={key}
          label={t(key)}
          color="success"
          variant="outlined"
          sx={{ fontWeight: 600, fontSize: '1rem', m: 0.5 }}
        />
      ))}
    </Stack>
  );
}
