import React, { useCallback } from 'react';
import moment, { Moment } from 'moment';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { DatePicker } from 'antd';
import { Box, Typography } from '@mui/material';
interface ControlledDatePickerFieldProps {
  fieldName: string;
  fieldLabel: string;
  control: Control;
  errors: FieldErrors;
  required?: boolean;
  disabled?: boolean;
  startDate?: Moment;
}

function range(start: number, end: number) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

const ControlledDatePickerField: React.FC<ControlledDatePickerFieldProps> = ({
  control,
  errors,
  fieldName,
  fieldLabel,
  required,
  startDate = moment(),
  disabled,
}) => {
  const disabledDate = useCallback(
    (date: Moment) => {
      const dateToCheck = date
        .clone()
        .set({ hour: startDate.hour(), minute: 10, second: 0 });
      return (
        dateToCheck.weekday() === 0 ||
        dateToCheck < startDate.clone().startOf('day') ||
        (dateToCheck.isSame(startDate, 'day') &&
          dateToCheck >
            startDate.clone().set({ hour: 16, minute: 0, second: 0 }))
      );
    },
    [startDate]
  );

  const disabledTime = useCallback(
    (date: Moment | null) => {
      if (date && date.isSame(startDate, 'day')) {
        return {
          disabledHours: () => [
            ...range(
              0,
              startDate.clone().add(150, 'minutes').startOf('hour').hour()
            ),
            ...range(18, 24),
          ],
        };
      }
      return {
        disabledHours: () => [...range(0, 8), ...range(18, 24)],
      };
    },
    [startDate]
  );

  return (
    <Controller
      control={control}
      name={fieldName}
      rules={{ required }}
      render={({ field }) => (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <DatePicker
            format="YYYY-MM-DD HH:00"
            placeholder={`Select desired ${fieldLabel}`}
            disabled={disabled}
            showTime={{
              showHour: true,
              hideDisabledOptions: true,
            }}
            showNow={false}
            disabledDate={disabledDate}
            disabledTime={disabledTime}
            style={{
              padding: '16.5px 14px',
              borderColor: Boolean(errors[fieldName]) ? '#ff1744' : '',
              borderRadius: '4px',
            }}
            size="large"
            {...field}
          />
          {Boolean(errors[fieldName]) && (
            <Typography
              sx={{
                color: '#ff1744',
                fontSize: '0.75rem',
                margin: '3px 14px 0px',
              }}
            >{`${
              fieldLabel.charAt(0).toUpperCase() + fieldLabel.slice(1)
            } is required`}</Typography>
          )}
        </Box>
      )}
    />
  );
};

export default ControlledDatePickerField;
