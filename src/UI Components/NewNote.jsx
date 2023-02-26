import React, { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    useDisclosure, 
    Select
  } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

function NewNote ({create}) {
    const { isOpen, onOpen, onClose } = useDisclosure()    

    const [note, setNote] = useState({body:"", importance:""})


    const addNewNote = () => {
        if (note.body === "") {
            alert("Name is empty!")
        } else if (note.importance === ""){
          alert("Choose Importance")
        } else {
            create(note.body, note.importance)
            onClose()
            setNote({body:"", importance:""})
        }
        }
    

    return (
      <>
        <Button display="flex" justifyContent="space-around" w="140px" size="md" colorScheme="pink" onClick={onOpen}><AddIcon />Add New</Button>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>New Note</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Note name</FormLabel>
                <Input placeholder='Note name' value={note.body} onChange={e => setNote({...note, body:e.target.value})}/>
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Note importance</FormLabel>
                <Select placeholder='Importance' onChange={e => setNote({...note, importance:e.target.value})}>
                    <option value='minor'>Minor</option>
                    <option value='normal'>Normal</option>
                    <option value='critical'>Critical</option>
                </Select>
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='pink' mr={3} onClick={addNewNote}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default NewNote ;