import { useQuery } from 'react-query';
import { Product } from '../types/Products';

const PRODUCTS_API = process.env.GATSBY_PRODUCTS_API || '';
const useProducts = () => {
  const { data, isLoading } = useQuery('products', async () => {
    const products = await fetch(PRODUCTS_API)
      .then(res => res.json()) as Array<Product>;

    window.localStorage.setItem('products', JSON.stringify(products));

    return products;
  }, { initialData: [] });

  return { data, isLoading };
};

export default useProducts;