import React from 'react';
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormWatch,
} from 'react-hook-form';
import { List, ListItem, Typography } from '@mui/material';
import ControlledDatePickerField from './Fields/ControlledDatePickerField';
import moment from 'moment';

interface ServiceDateFormProps {
  control: Control;
  errors: FieldErrors;
  watch: UseFormWatch<FieldValues>;
}

export const ServiceDateForm: React.FC<ServiceDateFormProps> = ({
  control,
  errors,
  watch,
}) => {
  const watchPickupDate = watch('pickupDate');

  return (
    <>
      <Typography component="h4" variant="h4" align="center">
        Service Date
      </Typography>
      <List>
        <ListItem>
          <ControlledDatePickerField
            control={control}
            errors={errors}
            fieldName={'pickupDate'}
            fieldLabel={'vehicle pick up date'}
            required
          />
        </ListItem>
        <ListItem>
          <ControlledDatePickerField
            control={control}
            errors={errors}
            disabled={!Boolean(watchPickupDate)}
            startDate={moment(watchPickupDate).add(4, 'hours')}
            fieldName={'dropoffDate'}
            fieldLabel={'vehicle drop off date'}
            required
          />
        </ListItem>
      </List>
    </>
  );
};
