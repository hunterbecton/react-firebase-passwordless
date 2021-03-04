import React from 'react';
import { Grid } from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <Grid
      minH="100vh"
      templateColumns="repeat(3, 1fr)"
      templateRows="max-content"
      gap={6}
      p={3}
    >
      <Nav />
      <ColorModeSwitcher position="absolute" top={3} right={3} />
      {children}
    </Grid>
  );
};

export default Layout;
