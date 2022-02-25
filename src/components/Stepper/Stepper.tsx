import { Step, StepLabel, Stepper, Typography } from '@mui/material';
import React from 'react';

export default function StepperComponent({ activeStep = 0 }) {
  const isStepActive = (step: number) => activeStep === step;

  return (
    <Stepper
      activeStep={activeStep}
      alternativeLabel
      sx={{ padding: '30px 0px' }}
    >
      {['Shopping cart', 'Personal Info', 'Place Order'].map((label, step) => (
        <Step key={step}>
          <StepLabel>
            <Typography
              color={isStepActive(step) ? 'primary' : 'dimgray'}
              fontSize="1.1rem"
              fontWeight="bold"
            >
              {label}
            </Typography>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
