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
  Select,
  IconButton,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

function EditNote({ edit, id, note }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [useNote, setUseNote] = useState({
    body: note.body,
    importance: note.importance,
  });

  const addNewNote = () => {
    if (useNote.body === '') {
      alert('Name is empty!');
    } else if (useNote.importance === '') {
      alert('Choose Importance');
    } else {
      edit(id, useNote.body, useNote.importance);
      onClose();
    }
  };

  return (
    <>
      <IconButton
        colorScheme="pink"
        aria-label="Edit"
        icon={<EditIcon />}
        onClick={onOpen}
        mx="3"
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Note name</FormLabel>
              <Input
                placeholder="Note name"
                value={useNote.body}
                onChange={e => setUseNote({ ...useNote, body: e.target.value })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Note importance</FormLabel>
              <Select
                onChange={e =>
                  setUseNote({ ...useNote, importance: e.target.value })
                }
              >
                <option disabled>Importance...</option>
                <option value="minor">Minor</option>
                <option value="normal">Normal</option>
                <option value="critical">Critical</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="pink" mr={3} onClick={addNewNote}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditNote;
