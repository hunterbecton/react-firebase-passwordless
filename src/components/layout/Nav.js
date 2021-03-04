import React from 'react';
import { GridItem, Box, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

const Nav = () => {
  const { user, logout } = useAuth();

  return (
    <GridItem colStart={1} colSpan={3} p={3}>
      <Flex>
        {user && (
          <>
            <Link to="/">
              <Text fontSize="md" mr={8}>
                Dashboard
              </Text>
            </Link>
            <Box as="button" onClick={logout}>
              <Text fontSize="md" mr={8}>
                Logout
              </Text>
            </Box>
          </>
        )}
        {!user && (
          <Link to="/login">
            <Text fontSize="md" mr={8}>
              Login
            </Text>
          </Link>
        )}
      </Flex>
    </GridItem>
  );
};

export default Nav;
