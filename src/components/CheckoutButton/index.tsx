import * as React from 'react';
import * as styles from './index.module.scss';

const CheckoutButton: React.FC = () => {
    return (
        <button className={styles.button} >Checkout</button>
    );
};

export default CheckoutButton;