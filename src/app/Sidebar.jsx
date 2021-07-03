import { Box, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { BrandData, SizeData } from '../data/products-data';
import { useProducts } from '../providers/ProductsProvider';
import {
  CLEAR_FILTERS,
  REMOVE_BRAND,
  REMOVE_SIZE,
  SET_BRAND,
  SET_GENDER,
  SET_SIZE,
  SORT_BY_PRICE,
} from '../reducers/products-reducer';

function Sidebar() {
  const { productsState, productsDispatch } = useProducts();
  return (
    <Box width="100%" height="100%">
      <Box>
        <Text>Sort By</Text>
        <input
          type="radio"
          id="highToLow"
          name="sort"
          value="highToLow"
          checked={productsState?.sortByPrice === 'highToLow'}
          onChange={() =>
            productsDispatch({
              type: SORT_BY_PRICE,
              payload: { value: 'highToLow' },
            })
          }
        />
        <label htmlFor="highToLow">High to Low</label>
        <br />
        <input
          type="radio"
          id="lowToHigh"
          name="sort"
          value="lowToHigh"
          checked={productsState?.sortByPrice === 'lowToHigh'}
          onChange={() =>
            productsDispatch({
              type: SORT_BY_PRICE,
              payload: { value: 'lowToHigh' },
            })
          }
        />
        <label htmlFor="lowToHigh">Low to High</label>
      </Box>
      <br />
      <Box>
        <Text>Gender</Text>
        <input
          type="radio"
          id="men"
          name="gender"
          value="men"
          checked={productsState?.gender === 'men'}
          onChange={() =>
            productsDispatch({
              type: SET_GENDER,
              payload: { value: 'men' },
            })
          }
        />
        <label htmlFor="men">Men</label>
        <br />
        <input
          type="radio"
          id="women"
          name="gender"
          value="women"
          checked={productsState?.gender === 'women'}
          onChange={() =>
            productsDispatch({
              type: SET_GENDER,
              payload: { value: 'women' },
            })
          }
        />
        <label htmlFor="women">Women</label>
      </Box>
      <br />
      <Box>
        <Text>Size</Text>
        {SizeData.map(size => {
          return (
            <>
              <input
                type="checkbox"
                id={size}
                name="size"
                value={size}
                checked={productsState?.size.includes(size)}
                onChange={() => {
                  if (productsState?.size.includes(size)) {
                    productsDispatch({
                      type: REMOVE_SIZE,
                      payload: { value: { size } },
                    });
                  } else {
                    productsDispatch({
                      type: SET_SIZE,
                      payload: { value: { size } },
                    });
                  }
                }}
              />
              <label htmlFor={size}>&nbsp;{size}</label>
              <br />
            </>
          );
        })}
      </Box>
      <br />
      <Box>
        <Text>Brand</Text>
        {BrandData.map(brand => {
          return (
            <>
              <input
                type="checkbox"
                id={brand}
                name="brand"
                value={brand}
                checked={productsState?.brand.includes(brand)}
                onChange={() => {
                  if (productsState?.brand.includes(brand)) {
                    productsDispatch({
                      type: REMOVE_BRAND,
                      payload: { value: { brand } },
                    });
                  } else {
                    productsDispatch({
                      type: SET_BRAND,
                      payload: { value: { brand } },
                    });
                  }
                }}
              />
              <label htmlFor={brand}>&nbsp;{brand}</label>
              <br />
            </>
          );
        })}
      </Box>
      <br />
      <Button
        onClick={() => {
          productsDispatch({
            type: CLEAR_FILTERS,
          });
        }}
      >
        Clear Filters
      </Button>
    </Box>
  );
}

export default Sidebar;
