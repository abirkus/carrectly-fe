import axios from 'axios';
import { CarMake, CarModel } from '../../utils/types';

export const carDatabaseApi = {
  getAllMakes: async () => {
    const carMakes = await axios
      .get('/api/getAllMakes')
      .then((response) => (response as any).data as CarMake[]);
    return carMakes;
  },

  getAllModels: async (carMake: CarMake, carYear: string) => {
    const carModels = await axios
      .get(`/api/getModels/${carMake}/${carYear}`)
      .then((response) => (response as any).data as CarModel[]);

    return carModels;
  },
};
