import * as React from 'react';
import { useProducts } from '../../hooks/';
import ProductCard from './components/ProductCard';
import * as styles from './index.module.scss';
import ProductFilter from './components/ProductFilter';

const ProductGrid = () => {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const { data } = useProducts();

  const filteredData = data?.filter(
    product => product
      .color
      .toLowerCase()
      .includes(searchValue.toLocaleLowerCase()));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handleClear = () => {
    setSearchValue("");
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.productGridContainer}>
      <ProductFilter
        defaultValue={searchValue}
        onClear={handleClear}
        onChange={handleChange}
      />
      <div className={styles.productGrid}>
        {filteredData?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;