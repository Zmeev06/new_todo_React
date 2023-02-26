import React from 'react';
import { Heading, Box, Container, Flex, Text } from '@chakra-ui/react';

import { ColorModeSwitcher } from '../UI Components/ColorModeSwitcher';
import NewNote from '../UI Components/NewNote';
import MyDrawer from '../UI Components/Drawer';

const Header = ({ counter, create, setFilter, activeFilter }) => {
  const getFilterString = () => {
    if (activeFilter === 'all') return activeFilter;

    return activeFilter ? 'completed' : 'active';
  };

  return (
    <Box as="header">
      <Container maxW="container.lg" py="2">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid #CBD5E0"
          pb="3"
        >
          <MyDrawer setFilter={setFilter} />
          <Heading>Your Todo List</Heading>
          <ColorModeSwitcher mt="3" />
        </Flex>
        <Flex justifyContent="space-between" alignItems="center" mt="10">
          <Heading display="flex" size="lg">
            You’ve got
            <Text mx="2" color="#d53f8c">
              {counter} task
            </Text>
            today
          </Heading>
          <NewNote create={create} />
          <Heading size={'lg'}>Filter: {getFilterString()}</Heading>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
