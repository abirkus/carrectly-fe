import React from 'react';
import { Controller, Control, FieldErrors } from 'react-hook-form';
import {
  Autocomplete,
  TextField,
  createFilterOptions,
  FilterOptionsState,
} from '@mui/material';

export type AutoCompleteProps<OptionsType> = {
  fieldName: string;
  fieldLabel: string;
  options: OptionsType[];
  disabled?: boolean;
  labelOptions?: {
    getOptionLabel: (option: OptionsType) => string;
    isOptionEqualToValue: (option: OptionsType, value: OptionsType) => boolean;
  };
};
interface FormFieldProps<OptionsType> extends AutoCompleteProps<OptionsType> {
  control: Control;
  errors: FieldErrors;
  required?: boolean;
  loading?: boolean;
}

const ControlledAutocompleteField = <OptionsType,>({
  control,
  errors,
  fieldName,
  fieldLabel,
  required,
  options,
  loading,
  disabled,
  labelOptions,
}: FormFieldProps<OptionsType>) => {
  const OPTIONS_LIMIT = 500;
  const defaultFilterOptions = createFilterOptions();

  const filterOptions = (
    options: unknown[],
    state: FilterOptionsState<unknown>
  ) => {
    return defaultFilterOptions(options, state).slice(0, OPTIONS_LIMIT);
  };

  return (
    <Controller
      name={fieldName}
      control={control}
      rules={{ required }}
      defaultValue={null}
      render={({ field }) => (
        <Autocomplete
          {...field}
          {...labelOptions}
          fullWidth
          options={options}
          loading={loading}
          disabled={disabled}
          onChange={(_, data) => field.onChange(data)}
          filterOptions={filterOptions}
          renderInput={(params) => (
            <TextField
              {...params}
              helperText={errors[fieldName] && `${fieldLabel} is required`}
              error={Boolean(errors[fieldName])}
              label={fieldLabel}
              variant="outlined"
            />
          )}
        />
      )}
    />
  );
};

export default ControlledAutocompleteField;
