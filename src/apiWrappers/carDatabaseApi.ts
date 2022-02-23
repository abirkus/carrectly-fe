import axios from 'axios';
export type CarMake = string;

export type CarModel = {
  Model: string;
  Category: string;
};

export const carDatabaseApi = {
  getAllMakes: async () => {
    const carMakes = await axios
      .get('/api/getAllMakes')
      .then((response) => response.data as CarMake[]);
    return carMakes;
  },

  getAllModels: async (carMake: CarMake, carYear: string) => {
    const carModels = await axios
      .get(`/api/getModels/${carMake}/${carYear}`)
      .then((response) => response.data as CarModel[]);

    return carModels;
  },
};
