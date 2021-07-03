import React from 'react';
import { Box, Image, Spacer } from '@chakra-ui/react';

function ProductCard({ product }) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        src={`https://picsum.photos/300/300?random=${product.id}`}
        alt={product.name}
      />
      <Spacer />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {product.brand}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {product.name}
        </Box>

        <Box>{product.price}</Box>

        <Box d="flex" mt="2" alignItems="center">
          Size : &nbsp;
          {product.size.map(size => {
            return <span>{size}&nbsp;</span>;
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default ProductCard;
