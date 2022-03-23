import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

interface IButtonProps {
  backgroundColor: string;
  fontColor: string;
}
interface StyledEmotionButtonProps {
  bgColor: string;
  textColor: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const StyledButton = styled(Button)<IButtonProps>(
  ({ backgroundColor, fontColor }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '13px',
    lineHeight: '15px',
    textTransform: 'uppercase',
    borderRadius: '4px',
    padding: '5px',
    gap: '3px',
    backgroundColor,
    color: fontColor,
    '&:hover': {
      color: backgroundColor,
      backgroundColor: fontColor,
    },
  })
);

const StyledEmotionButton: React.FC<StyledEmotionButtonProps> = ({
  bgColor,
  textColor,
  children,
  handleClick,
}) => {
  return (
    <StyledButton
      backgroundColor={bgColor}
      fontColor={textColor}
      onClick={handleClick}
    >
      {children}
    </StyledButton>
  );
};

export default StyledEmotionButton;
