import React, { useState } from 'react';
import {
  Box,
  Container,
  IconButton,
  Text,
  Image,
  Flex,
  useDisclosure
} from '@chakra-ui/react';
import { DeleteIcon, CheckIcon, EditIcon } from '@chakra-ui/icons';
import ModalWindow from '../UI Components/Modal';

const Note = ({ note, remove, setstatus, edit }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isEmpty, setIsEmpty] = useState({body:false, importance:false});


  const editNote = (data) => {
    if (note.body === '') {
      setIsEmpty({...isEmpty, body:true});
    } else if (note.importance === '') {
      setIsEmpty({...isEmpty, importance:true});
    } else {
      edit(note.id, data.body, data.importance);
      onClose();
    }
  }

  return (
    <Box>
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        maxW="container.lg"
        mb="4"
      >
        <Flex alignItems="center" w="60%">
          <Image w="15px" mr="2" mt="1" src="./assets/img/point.svg" />
          <Text
            fontSize="lg"
            isTruncated
            color={
              note.status === 'completed'
                ? '#CBD5E0'
                : 'rgba(255, 255, 255, 0.92)'
            }
            as={note.status === 'completed' ? 'del' : ''}
          >
            {note.body}
          </Text>
        </Flex>
        <Flex justifyContent="space-between" w="35%">
          <Flex alignItems="center">
            <Image
              w="15px"
              mr="2"
              mt="1"
              src={
                note.importance === 'minor'
                  ? './assets/img/minor.svg'
                  : note.importance === 'normal'
                  ? './assets/img/normal.svg'
                  : './assets/img/critical.svg'
              }
            />
            <Text
              fontSize="lg"
              color={
                note.status === 'completed'
                  ? '#CBD5E0'
                  : 'rgba(255, 255, 255, 0.92)'
              }
              as={note.status === 'completed' ? 'del' : ''}
            >
              {note.importance}
            </Text>
          </Flex>

          <Flex justifyContent="flex-end">
            {note.status === 'completed' ? (
              <IconButton
                colorScheme="pink"
                aria-label="Delete"
                icon={<DeleteIcon />}
                onClick={() => remove(note)}
              />
            ) : (
              <>
                <IconButton
                  colorScheme="pink"
                  aria-label="Complete"
                  icon={<CheckIcon />}
                  onClick={() => setstatus(note.id)}
                />
                <IconButton
                  colorScheme="pink"
                  aria-label="Edit"
                  icon={<EditIcon />}
                  onClick={onOpen}
                  mx="3"
                />
                <IconButton
                  colorScheme="pink"
                  aria-label="Delete"
                  icon={<DeleteIcon />}
                  onClick={() => remove(note)}
                />
              </>
            )}
          </Flex>
        </Flex>
        <ModalWindow isOpen={isOpen} onClose={onClose} note={note} func={editNote} isEmpty={isEmpty} />
      </Container>
    </Box>
  );
};

export default Note;
