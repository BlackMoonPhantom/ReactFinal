import { useFetch } from '../useFetch';

export const useFetchProducts = (): ReturnType<typeof useFetch> => {
  return useFetch('/products');
};
