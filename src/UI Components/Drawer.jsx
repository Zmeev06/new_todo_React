import React from 'react';
import {
  Heading,
  Container,
  Button,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  Drawer,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';

const MyDrawer = ({ setFilter }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="pink" onClick={onOpen}>
        Notes
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            Choose Your Note List
          </DrawerHeader>
          <DrawerBody>
            <Container borderBottom="1px solid #CBD5E0" mb="3" py="3">
              <Heading size="md" mb="2">
                All Notes
              </Heading>
              <Button colorScheme="pink" onClick={() => setFilter('all')}>
                Open
              </Button>
            </Container>

            <Container borderBottom="1px solid #CBD5E0" mb="3" py="3">
              <Heading size="md" mb="2">
                Active Notes
              </Heading>
              <Button colorScheme="pink" onClick={() => setFilter(true)}>
                Open
              </Button>
            </Container>

            <Container borderBottom="1px solid #CBD5E0" mb="3" py="3">
              <Heading size="md" mb="2">
                Completed Notes
              </Heading>
              <Button colorScheme="pink" onClick={() => setFilter(false)}>
                Open
              </Button>
            </Container>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MyDrawer;
