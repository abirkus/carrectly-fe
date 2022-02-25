import React from 'react';
import { Control, FieldErrors } from 'react-hook-form';
import { List, ListItem, Typography } from '@mui/material';
import ControlledInputField from './Fields/ControlledInputField';

interface AddressFormProps {
  control: Control;
  errors: FieldErrors;
}

export const AddressForm: React.FC<AddressFormProps> = ({
  control,
  errors,
}) => {
  const locationFields = [
    {
      fieldName: 'address',
      fieldLabel: 'Address',
    },
    {
      fieldName: 'city',
      fieldLabel: 'City',
    },
    {
      fieldName: 'zipCode',
      fieldLabel: 'Zip Code',
    },
    {
      fieldName: 'customerComments',
      fieldLabel: 'Additional Comments',
      extraProps: {
        multiline: true,
        minRows: 2,
      },
      rules: {
        required: false,
        minLength: undefined,
      },
    },
  ];

  return (
    <>
      <Typography variant="h4" component="h4">
        Pickup Location
      </Typography>
      <List>
        {locationFields.map((field) => (
          <ListItem key={`address-input-${field.fieldName}`}>
            <ControlledInputField
              control={control}
              errors={errors}
              required
              minLength={3}
              fieldName={field.fieldName}
              fieldLabel={field.fieldLabel}
              customRules={field.rules}
              extraProps={field.extraProps}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};
