import React from 'react';
import { styled, SxProps, Theme } from '@mui/system';
import { Carousel, CarouselProps } from 'antd';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';

interface CustomCarouselProps extends CarouselProps {
  arrowSpacing: string;
  dotSpacing?: string;
  sx?: SxProps<Theme>;
}

const StyledCarousel = styled(Carousel)<CustomCarouselProps>(
  ({ arrowSpacing, dotSpacing }) => ({
    '> .slick-next': {
      right: arrowSpacing,
    },
    '> .slick-prev': {
      left: arrowSpacing,
    },
    '.slick-arrow': {
      color: 'white',
      width: '70px',
      height: 'auto',
      zIndex: 3,
    },
    '.slick-arrow:hover': {
      color: '#cdafde ',
    },
    '> .slick-dots li button': {
      marginTop: dotSpacing,
      width: '10px',
      height: '10px',
      borderRadius: '100%',
      background: '#83509f',
    },
    '> .slick-dots li.slick-active button': {
      width: '12px',
      height: '12px',
      background: '#cdafde',
    },
  })
);

const StyledCarouselComponent: React.FC<CustomCarouselProps> = ({
  arrowSpacing,
  dotSpacing = '50px',
  children,
  sx,
  ...rest
}) => {
  return (
    <StyledCarousel
      prevArrow={<KeyboardArrowLeftOutlinedIcon />}
      nextArrow={<ChevronRightOutlinedIcon />}
      arrowSpacing={arrowSpacing}
      dotSpacing={dotSpacing}
      sx={sx}
      {...rest}
    >
      {children}
    </StyledCarousel>
  );
};

export default StyledCarouselComponent;
