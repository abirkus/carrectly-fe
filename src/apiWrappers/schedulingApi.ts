import axios from 'axios';

export type timeSlot = {
  hour: string;
  count: string;
};

export const schedulingApi = {
  getDisabledTimes: async () => {
    const disabledTimes = await axios.get('/api/getDisabledTimes').then((response) => response.data as timeSlot[]);
    return disabledTimes;
  },
};
