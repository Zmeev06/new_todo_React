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

const MyDrawer = ({ setFilter, filter }) => {
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
            {filter === 'all' ? null : (
              <Container borderBottom="1px solid #CBD5E0" mb="3" py="3">
                <Heading size="md" mb="2">
                  All Notes
                </Heading>
                <Button colorScheme="pink" onClick={() => setFilter('all')}>
                  Open
                </Button>
              </Container>
            )}
            {filter === "active" ? null : <Container borderBottom="1px solid #CBD5E0" mb="3" py="3">
              <Heading size="md" mb="2">
                Active Notes
              </Heading>
              <Button colorScheme="pink" onClick={() => setFilter("active")}>
                Open
              </Button>
            </Container> }
            
            {filter === "completed" ? null :<Container borderBottom="1px solid #CBD5E0" mb="3" py="3">
              <Heading size="md" mb="2">
                Completed Notes
              </Heading>
              <Button colorScheme="pink" onClick={() => setFilter("completed")}>
                Open
              </Button>
            </Container>}
            
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MyDrawer;
