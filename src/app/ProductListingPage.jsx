import React from 'react';
import { GridItem, Grid } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Products from './Products';

function ProductListingPage() {
  return (
    <Grid h="200px" templateColumns="2fr 6fr" gap={4}>
      <GridItem m={2}>
        <Sidebar />
      </GridItem>
      <GridItem m={2}>
        <Products />
      </GridItem>
    </Grid>
  );
}

export default ProductListingPage;
