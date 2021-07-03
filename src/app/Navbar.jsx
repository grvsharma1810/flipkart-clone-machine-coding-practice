import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

import React from 'react';

function Navbar() {
  return (
    <Flex p={3}>
      <Text>Flipkart Clone</Text>
      <Spacer />
      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  );
}

export default Navbar;
