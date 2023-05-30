import { useFetch } from '../useFetch';

export const useFetchProduct = (productId: string): ReturnType<typeof useFetch> => {
  return useFetch(`/products/${productId}`);
};
