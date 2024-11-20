import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { render, cleanup } from "@testing-library/react";
import { useProducts } from "../src/hooks";
import Promo from "../src/pages/promo";
import mockProducts from "./db.json";

jest.mock("../src/hooks/useProducts");
const mockedUseProduct = useProducts as jest.Mock<object>;

interface Props {
  children: JSX.Element;
}

const QueryWrapper: React.FC<Props> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

describe("Promo page", () => {
  afterEach(cleanup);

  beforeEach(() => {
    mockedUseProduct.mockImplementation(() => ({ isLoading: true }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without errors", () => {
    render(
      <QueryWrapper>
        <Promo />
      </QueryWrapper>
    );
  });

  it("renders a checkout button", () => {
    const { getByText } = render(
      <QueryWrapper>
        <Promo />
      </QueryWrapper>
    );

    expect(getByText("Checkout")).toBeDefined();
  });

  it("defaults to 5 minutes", () => {
    const { getByText } = render(
      <QueryWrapper>
        <Promo />
      </QueryWrapper>
    );

    expect(getByText(/5:00/i)).toBeDefined();
  });

  it("renders 5 products", () => {
    mockedUseProduct.mockImplementation(() => ({ isLoading: false, data: mockProducts }));

    const { getAllByRole } = render(
      <QueryWrapper>
        <Promo />
      </QueryWrapper>
    );

    expect(getAllByRole('listitem')).toHaveLength(mockProducts.length);
  });
});