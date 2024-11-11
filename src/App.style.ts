import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

export const Wrapper = styled('div')({
  margin: '40px',
});

export const StyledButton = styled(IconButton)({
  position: 'fixed',
  zIndex: 100,
  right: '20px',
  top: '20px',
});
