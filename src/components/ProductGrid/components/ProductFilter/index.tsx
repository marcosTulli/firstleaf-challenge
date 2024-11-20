import React, { useState } from "react";
import * as styles from './index.module.scss';

interface ProductFilterProps {
    defaultValue: string;
    onClear: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ defaultValue, onClear, onChange }) => {
    return (
        <div className={styles.inputContainer}>
            <input
                type="text"
                value={defaultValue}
                onChange={onChange}
                placeholder="Filter by color"
                className={styles.input}
            />
            {defaultValue.length > 0 && (
                <button
                    onClick={onClear}
                    className={styles.clear}
                    title='Clear filter'
                    aria-label="Clear filter"
                >
                    ✕
                </button>
            )}
        </div>
    );
};

export default ProductFilter;
