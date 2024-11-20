import * as React from 'react';
import * as styles from './index.module.scss';
import Logo from '../../../assets/logo.svg';

const Header: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <header className={styles.header} id='header'>
            <div className={styles.container}>
                <Logo className={styles.logo} />
                <div className={styles.children}>
                    {children}
                </div>
            </div>
        </header>
    );
};

export default Header;