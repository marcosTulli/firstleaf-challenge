import React from 'react';
import * as styles from './index.module.scss';

interface IProductCardProps {
    product: {
        id: number;
        special_notes: string;
        name: string;
        tag_line: string;
        vintage: string;
        origin: string;
        fanciful_varietal: string;
        msrp: number;
        price: number;
        display_msrp: string;
        display_price: string;
        award_highlights: { [key: string]: number; };
        pairings: string;
        color: string;
        images: string;
        ratings_pct: number;
        display_name: string;
    };
}

const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
    return (
        <div className={styles.productCard}>
            <div className={styles.imageContainer}>
                <img src={product.images} alt={product.display_name} className={styles.productImage} />
            </div>
            <div className={styles.contentContainer}>
                <h2 className={styles.productName}>{product.display_name}</h2>
                <p className={styles.tagline}>{product.tag_line}</p>
                <div className={styles.details}>
                    <div className={styles.detailItem}>
                        <span className={styles.label}>Vintage:</span> {product.vintage}
                    </div>
                    <div className={styles.detailItem}>
                        <span className={styles.label}>Origin:</span> {product.origin}
                    </div>
                    <div className={styles.detailItem}>
                        <span className={styles.label}>Varietal:</span> {product.fanciful_varietal}
                    </div>
                    <div className={styles.detailItem}>
                        <span className={styles.label}>Color:</span> {product.color}
                    </div>
                </div>
                <div className={styles.priceRating}>
                    <div className={styles.prices}>
                        <span className={styles.originalPrice}>{product.display_msrp}</span>
                        <span className={styles.salePrice}>{product.display_price}</span>
                    </div>
                    <div className={styles.ratings}>
                        <span className={styles.label}>Ratings:</span> {product.ratings_pct}%
                    </div>
                </div>
                <div className={styles.pairings}>
                    <span className={styles.label}>Pairings:</span> {product.pairings}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;