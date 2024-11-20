import * as React from 'react';
import * as styles from './index.module.scss';

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export default Layout;
