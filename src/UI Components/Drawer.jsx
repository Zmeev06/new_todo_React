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

const FILTERS = [
  {
    filter: 'all',
    title: 'All Notes'
  },
  {
    //completed false
    filter: false,
    title: 'Active Note',
  },
  {
    //completed true
    filter: true,
    title: 'Completed Notes'
  }
]
  
const MyDrawer = ({setFilter}) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
        <Button colorScheme="pink" onClick={onOpen}>Notes</Button>
          <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader borderBottomWidth="1px">Choose Your Note List</DrawerHeader>
              <DrawerBody>
                {
                  FILTERS.map((item, i) => 
                  <Container borderBottom="1px solid #CBD5E0" mb="3" py="3" key={i}>
                    <Heading size="md" mb="2">{item.title}</Heading>
                    <Button colorScheme="pink" onClick={() => setFilter(item.filter)}>Open</Button>
                  </Container>)
                }
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
     );
}
 
export default MyDrawer;