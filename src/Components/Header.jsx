import React from 'react';
import {
  Heading,
  Box,
  Container,
  Flex,
  Text} from '@chakra-ui/react';

import { ColorModeSwitcher } from '../UI Components/ColorModeSwitcher';
import NewNote from '../UI Components/NewNote';
import MyDrawer from '../UI Components/Drawer';

const Header = ({ counter, create, filter }) => {

  return (
    <Box as="header">
      <Container maxW="container.lg" py="2">
        <Flex justifyContent="space-between" alignItems="center" borderBottom="1px solid #CBD5E0" pb="3">
            <MyDrawer filter={filter}/>
            <Heading>Your Todo List</Heading>
          <ColorModeSwitcher mt="3" />
        </Flex>
        <Flex maxW="550px" justifyContent="space-between" alignItems="center"  mt="10">
            <Heading display="flex" size="lg">
              You’ve got
              <Text mx="2" color="#d53f8c">
                {counter} task
              </Text>
              today
            </Heading>
            <NewNote create={create} />
          </Flex>
      </Container>
    </Box>
  );
};

export default Header;
