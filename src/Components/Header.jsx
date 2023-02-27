import React, { useState } from 'react';
import {
  Heading,
  Box,
  Container,
  Flex,
  Text,
  useDisclosure,
  Button,
} from '@chakra-ui/react';

import { AddIcon } from '@chakra-ui/icons';

import { ColorModeSwitcher } from '../UI Components/ColorModeSwitcher';
import MyDrawer from '../UI Components/Drawer';
import ModalWindow from '../UI Components/Modal';

const Header = ({ counter, create, setFilter, filter }) => {
  const [note, setNote] = useState({ body: '', importance: '' });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEmpty, setIsEmpty] = useState({ body: false, importance: false });

  const addNewNote = data => {
    if (data.body === '') {
      setIsEmpty({ ...isEmpty, body: true });
    } else if (data.importance === '') {
      setIsEmpty({ ...isEmpty, importance: true });
    } else {
      create(data.body, data.importance);
      onClose();
      setNote({ body: '', importance: '' });

    }
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
          <MyDrawer setFilter={setFilter} filter={filter} />
          <Heading>Your Todo List</Heading>
          <ColorModeSwitcher mt="3" />
        </Flex>
        <Flex
          maxW="550px"
          justifyContent="space-between"
          alignItems="center"
          mt="10"
        >
          {filter !== 'completed' ? (
            <Heading display="flex" size="lg">
              You’ve got
              <Text mx="2" color="#d53f8c">
                {counter} task
              </Text>
              today
            </Heading>
          ) : (
            <Heading display="flex" size="lg">
              You’ve complete
              <Text mx="2" color="#d53f8c">
                {counter} task
              </Text>
              today
            </Heading>
          )}
          {filter === 'completed' ? null : (
            <Button
              display="flex"
              justifyContent="space-around"
              w="140px"
              size="md"
              mt="3"
              colorScheme="pink"
              onClick={onOpen}
            >
              <AddIcon />
              Add New
            </Button>
          )}
        </Flex>
      </Container>
      <ModalWindow
        isOpen={isOpen}
        onClose={onClose}
        note={note}
        func={addNewNote}
        isEmpty={isEmpty}
      />
    </Box>
  );
};

export default Header;
