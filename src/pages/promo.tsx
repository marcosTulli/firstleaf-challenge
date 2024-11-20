import React from "react";
import Countdown from "../components/Countdown";
import ProductGrid from "../components/ProductGrid";
import Header from "../components/Common/Header";

const Counter = (): JSX.Element => (
  <>
    <Header>
      <Countdown seconds={300} />
    </Header>

    <ProductGrid />
  </>
);

export default Counter;
