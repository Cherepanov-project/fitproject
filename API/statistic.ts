import axios from 'axios';

export const getUserStatistics = async (token: string) => {
  const { data } = await axios.get(process.env.API_GET_STATISTICS, {
    headers: {
      Authentication: token,
    },
  });
  return data;
};
