import { ReactNode } from 'react';

import { CircularProgress, Button as MuiButton, ButtonProps as MuiButtonProps, useTheme } from '@mui/material';

interface ButtonProps extends MuiButtonProps {
  loading?: boolean;
  loadingText?: string;
  children: ReactNode;
  styleVariant?: 'whatsapp' | 'primary' | 'secondary';
}

export const Button = ({
  loading = false,
  loadingText,
  children,
  disabled,
  styleVariant,
  sx,
  ...props
}: ButtonProps) => {
  const theme = useTheme();
  const customStyles = styleVariant ? theme.customStyles.buttons[styleVariant] : {};

  return (
    <MuiButton
      disabled={disabled || loading}
      sx={{
        ...customStyles,
        ...sx,
      }}
      {...props}
    >
      {loading ? (
        <>
          <CircularProgress size={16} sx={{ mr: 1 }} />
          {loadingText || children}
        </>
      ) : (
        children
      )}
    </MuiButton>
  );
};

export default Button;
