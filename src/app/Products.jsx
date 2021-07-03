import React from 'react';
import { Grid } from '@chakra-ui/react';
import { ProductsData } from '../data/products-data';
import ProductCard from './ProductCard';
import { useProducts } from '../providers/ProductsProvider';

const getProductsSortedByPrice = (productsList, sortByPrice) => {
  if (sortByPrice && sortByPrice === 'highToLow') {
    return productsList.sort((a, b) => b.price - a.price);
  }
  if (sortByPrice && sortByPrice === 'lowToHigh') {
    return productsList.sort((a, b) => a.price - b.price);
  }
  return productsList;
};

const getFilteredProducts = (productsList, brand, size, gender) => {
  if (brand?.length > 0) {
    productsList = productsList.filter(product =>
      brand.includes(product.brand)
    );
  }
  if (size.length > 0) {
    size.forEach(s => {
      productsList = productsList.filter(product => product.size.includes(s));
    });
  }
  if (gender) {
    productsList = productsList.filter(
      product => product.gender.toLowerCase() === gender.toLowerCase()
    );
  }
  return productsList;
};

function Products() {
  const { productsState } = useProducts();
  const sortedProducts = getProductsSortedByPrice(
    ProductsData,
    productsState.sortByPrice
  );
  const filteredProducts = getFilteredProducts(
    sortedProducts,
    productsState.brand,
    productsState.size,
    productsState.gender
  );
  console.log(productsState, filteredProducts);
  return (
    <Grid templateColumns="repeat(4, 1fr)" gridGap={2}>
      {filteredProducts.map(product => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </Grid>
  );
}

export default Products;
