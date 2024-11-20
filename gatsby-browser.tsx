import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './src/styles/global.css';

const queryClient = new QueryClient();

export const wrapRootElement = ({ element }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {element}
    </QueryClientProvider>
  );
};