import { useTranslation } from 'react-i18next';

import { Email, LocationOn, Phone } from '@mui/icons-material';
import { List, ListItem, ListItemIcon, ListItemText, Stack } from '@mui/material';

import { CONTACT_INFO } from '@/utils/constants';

export function FooterContactList() {
  const { t } = useTranslation();
  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <Phone color="success" />
        </ListItemIcon>
        <ListItemText primary={CONTACT_INFO.phone.number} secondary={t('footer.phone', 'Teléfono')} />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Email color="success" />
        </ListItemIcon>
        <ListItemText primary={CONTACT_INFO.email} secondary={t('footer.email', 'Email')} />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <LocationOn color="success" />
        </ListItemIcon>
        <ListItemText primary={CONTACT_INFO.address} secondary={t('footer.address', 'Dirección')} />
      </ListItem>
    </List>
  );
}
