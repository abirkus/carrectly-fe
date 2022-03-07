import React, { useEffect } from 'react';
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { List, ListItem, Typography } from '@mui/material';
import ControlledDatePickerField from './Fields/ControlledDatePickerField';
import moment from 'moment';

interface ServiceDateFormProps {
  control: Control;
  errors: FieldErrors;
  watch: UseFormWatch<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}

export const ServiceDateForm: React.FC<ServiceDateFormProps> = ({
  control,
  errors,
  watch,
  setValue,
}) => {
  const watchPickupDate = watch('pickupDate');
  const watchDropOffDate = watch('dropoffDate');
  useEffect(() => {
    if (!watchPickupDate || watchDropOffDate < watchPickupDate)
      setValue('dropoffDate', null);
  }, [watchPickupDate, watchDropOffDate, setValue]);

  return (
    <>
      <Typography variant="h4" component="h4">
        Service Dates
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
        <Typography
          sx={{
            fontSize: '0.75rem',
            margin: '0px 25px 0px',
            opacity: 0.6,
          }}
        >
          Note: The drop off date can be changed based on the selected services.
          We will contact you in case of a reschedule.
        </Typography>
      </List>
    </>
  );
};
