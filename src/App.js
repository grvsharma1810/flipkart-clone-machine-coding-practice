import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Navbar from './app/Navbar';
import ProductListingPage from './app/ProductListingPage';
import { ProductsProvider } from './providers/ProductsProvider';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <ProductsProvider>
        <ProductListingPage />
      </ProductsProvider>
    </ChakraProvider>
  );
}

export default App;
