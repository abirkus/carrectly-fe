import React, { useEffect, useState } from 'react';
import { Control, FieldErrors, FieldValues, UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { schedulingApi, timeSlot } from 'apiWrappers/schedulingApi';
import { List, ListItem, Typography, CircularProgress } from '@mui/material';
import ControlledDatePickerField from './Fields/ControlledDatePickerField';
import moment from 'moment';

interface ServiceDateFormProps {
  control: Control;
  errors: FieldErrors;
  watch: UseFormWatch<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}

export const ServiceDateForm: React.FC<ServiceDateFormProps> = ({ control, errors, watch, setValue }) => {
  const watchPickupDate = watch('pickupDate');
  const watchDropOffDate = watch('dropoffDate');
  const [loading, setLoading] = useState(false);
  const [disabledTimes, setDisabledTimes] = useState<timeSlot[]>([]);

  useEffect(() => {
    const fetchDisabledTimes = async () => {
      schedulingApi.getDisabledTimes().then((timeSlots) => {
        setDisabledTimes(timeSlots);
      });
    };

    try {
      setLoading(true);
      fetchDisabledTimes().finally(() => setLoading(false));
    } catch (err) {
      console.log('Error fetching schedule dates', err);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!watchPickupDate || watchDropOffDate < watchPickupDate) setValue('dropoffDate', null);
  }, [watchPickupDate, watchDropOffDate, setValue]);

  return (
    <>
      <Typography variant="h4" component="h4">
        Service Dates
      </Typography>
      <List>
        <ListItem>
          {loading ? (
            <ListItem>
              <CircularProgress />
            </ListItem>
          ) : (
            <ControlledDatePickerField
              control={control}
              disabledTimes={disabledTimes}
              errors={errors}
              fieldName={'pickupDate'}
              fieldLabel={'vehicle pick up date'}
              required
            />
          )}
        </ListItem>
        <ListItem>
          {loading ? (
            <ListItem>
              <CircularProgress />
            </ListItem>
          ) : (
            <ControlledDatePickerField
              control={control}
              errors={errors}
              disabled={!Boolean(watchPickupDate)}
              startDate={moment(watchPickupDate).add(2, 'hours')}
              fieldName={'dropoffDate'}
              fieldLabel={'vehicle drop off date'}
              required
            />
          )}
        </ListItem>
        <Typography
          sx={{
            fontSize: '0.75rem',
            margin: '0px 25px 0px',
            opacity: 0.6,
          }}
        >
          Note: The drop off date can be changed based on the selected services. We will contact you in case of a reschedule.
        </Typography>
      </List>
    </>
  );
};
