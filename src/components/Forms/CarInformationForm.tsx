import React, { useEffect, useState } from 'react';
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { List, ListItem, Typography } from '@mui/material';
import { CarMake, carDatabaseApi, CarModel } from 'apiWrappers/carDatabaseApi';
import ControlledInputField from './Fields/ControlledInputField';
import ControlledRadioGroupField from './Fields/ControlledRadioGroupField';
import ControlledAutocompleteField from './Fields/ControlledAutoCompleteField';
import moment from 'moment';

interface CarInformationFromProps {
  control: Control;
  errors: FieldErrors;
  watch: UseFormWatch<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}

export const CarInformationFrom: React.FC<CarInformationFromProps> = ({
  control,
  errors,
  watch,
  setValue,
}) => {
  const [watchCarYear, watchCarMake, watchCarModel] = watch([
    'carYear',
    'carMake',
    'carModel',
  ]);
  const [carMakes, setCarMakes] = useState<CarMake[]>([]);
  const [carModels, setCarModels] = useState<CarModel[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    carDatabaseApi.getAllMakes().then((carMakes) => {
      setCarMakes(carMakes);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const fetchCarModels = async () => {
      if (watchCarYear && watchCarMake && carMakes.length) {
        const carMake = carMakes.find((make) => make === watchCarMake);
        if (carMake) {
          carDatabaseApi
            .getAllModels(carMake, watchCarYear)
            .then((carModels) => {
              setCarModels(carModels);
              if (
                watchCarModel &&
                !carModels.find((carModel) => carModel.Model === watchCarModel)
              ) {
                setValue('carModel', null);
              }
            });
        }
      }
    };

    setLoading(true);
    fetchCarModels().finally(() => setLoading(false));
  }, [watchCarYear, watchCarMake, carMakes]);

  const vehicleFields = [
    {
      fieldName: 'carYear',
      fieldLabel: 'Car Year',
      options: Array.from({ length: moment().get('year') - 1979 }, (_, i) =>
        (moment().get('year') - i).toString()
      ),
    },
    {
      fieldName: 'carMake',
      fieldLabel: 'Car Make',
      loading,
      options: carMakes?.map((make) => make) || [],
      disabled: !Boolean(watchCarYear),
    },
    {
      fieldName: 'carModel',
      fieldLabel: 'Car Model',
      loading,
      options: carModels?.map((model) => model.Model) || [],
      disabled: !Boolean(watchCarMake),
    },
  ];

  const vehicleDetails = [
    { fieldName: 'carColor', fieldLabel: 'Paint Color' },
    { fieldName: 'vin', fieldLabel: 'Vin Number' },
  ];
  return (
    <>
      <Typography component="h4" variant="h4" align="center">
        Car Information
      </Typography>
      <List>
        {vehicleFields.map((field) => (
          <ListItem key={`vehicle-info-input-${field.fieldName}`}>
            <ControlledAutocompleteField
              control={control}
              errors={errors}
              required
              loading={field.loading}
              disabled={field.disabled}
              fieldName={field.fieldName}
              fieldLabel={field.fieldLabel}
              options={field.options}
            />
          </ListItem>
        ))}

        {vehicleDetails.map((field) => (
          <ListItem key={`vehicle-info-input-${field.fieldName}`}>
            <ControlledInputField
              control={control}
              errors={errors}
              fieldName={field.fieldName}
              fieldLabel={field.fieldLabel}
            />
          </ListItem>
        ))}
        <ListItem>
          <ControlledRadioGroupField
            control={control}
            fieldName={'transmission'}
            fieldLabel={'Transmission'}
            options={[
              { label: 'Automatic', value: 'automatic' },
              { label: 'Manual', value: 'manual' },
            ]}
          />
        </ListItem>
      </List>
    </>
  );
};
