import * as React from 'react';
import * as styles from './index.module.scss';
import { Product } from '../../../../types/Products';


interface IProductCardProps {
    product: Product;
}

const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
    return (
        <div className={styles.productCard}>
            <div className={styles.imageContainer}>
                <img src={product.images} alt={product.display_name} className={styles.productImage} />
            </div>
            <div className={styles.contentContainer}>
                <h2 className={styles.productName}>{product.display_name}</h2>
                <p className={styles.tagline}>{product.vintage} - {product.tag_line}</p>
                <div className={styles.details}>
                    <div className={styles.detailItem}>
                        {product.origin}
                    </div>
                    <div className={styles.detailItem}>
                        {product.fanciful_varietal}
                    </div>
                </div>
                <div className={styles.priceRating}>
                    <div className={styles.prices}>
                        <p className={styles.originalPrice}>{product.display_msrp} Retail Price</p>
                        <p className={styles.salePrice}>{product.display_price} Member Price </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;