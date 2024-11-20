import React from "react";
import Countdown from "../../components/Countdown";
import ProductGrid from "../../components/ProductGrid";
import Header from "../../components/Common/Header";
import CheckoutButton from "../../components/CheckoutButton";
import * as styles from './index.module.scss';
import { useMediaQuery } from "../../hooks";

const Counter = (): JSX.Element => {

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      <Header >
        <div id='right-side' className={styles.container}>
          {isDesktop && <Countdown seconds={300} />}
          <CheckoutButton />
        </div>
      </Header>
      <ProductGrid />
    </>
  );
};

export default Counter;