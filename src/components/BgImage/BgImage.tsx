import React from 'react';
import { styled, SxProps, Theme } from '@mui/system';

interface BgImageContainerProps {
  backgroundImage: string;
  mobileBackgroundImage: string;
}
interface BgImageProps {
  backgroundImage?: string;
  mobileBackgroundImage?: string;
  sx?: SxProps<Theme>;
}

const Container = styled('section', {
  shouldForwardProp: (prop) => prop === 'children',
})<BgImageContainerProps>(
  ({ theme, backgroundImage, mobileBackgroundImage }) => ({
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('sm')]: {
      backgroundSize: 'cover',
      backgroundPosition: 'bottom',
      backgroundImage: mobileBackgroundImage,
    },
  })
);

const BgImage: React.FC<BgImageProps> = ({
  backgroundImage,
  mobileBackgroundImage,
  sx,
  children,
}) => {
  return (
    <Container
      backgroundImage={`url('${backgroundImage}')`}
      mobileBackgroundImage={`url('${
        mobileBackgroundImage || backgroundImage
      }')`}
      sx={sx}
    >
      {children}
    </Container>
  );
};

export default BgImage;
