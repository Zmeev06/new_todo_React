import React from 'react';
import {
  Box,
  Container,
  IconButton,
  Text,
  Image,
  Flex,
} from '@chakra-ui/react';
import { DeleteIcon, CheckIcon } from '@chakra-ui/icons';
import EditBtn from '../UI Components/EditBtn';

const Note = ({ note, remove, completed, edit }) => {
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
          <Text fontSize="lg" isTruncated>
            {note.body}
          </Text>
        </Flex>
        <Flex alignItems="center" w="20%">
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
          <Text fontSize="lg">{note.importance}</Text>
        </Flex>
        {note.completed ? (
          <Flex justifyContent="space-between" maxW="15%">
            <IconButton
              colorScheme="pink"
              aria-label="Complete"
              icon={<CheckIcon />}
              onClick={() => completed(note.id)}
            />

            <EditBtn edit={edit} id={note.id} note={note} />
            <IconButton
              colorScheme="pink"
              aria-label="Delete"
              icon={<DeleteIcon />}
              onClick={() => remove(note)}
            />
          </Flex>
        ) : (
          <Flex justifyContent="space-between" maxW="15%">
            <EditBtn edit={edit} id={note.id} note={note} />
            <IconButton
              colorScheme="pink"
              aria-label="Delete"
              icon={<DeleteIcon />}
              onClick={() => remove(note)}
            />
          </Flex>
        )}
        {/* <Flex justifyContent="space-between" maxW="15%">
          <IconButton
            colorScheme="pink"
            aria-label="Complete"
            icon={<CheckIcon />}
            onClick={() => completed(note.id)}
          />

          <EditBtn edit={edit} id={note.id} note={note} />
          <IconButton
            colorScheme="pink"
            aria-label="Delete"
            icon={<DeleteIcon />}
            onClick={() => remove(note)}
          />
        </Flex> */}
      </Container>
    </Box>
  );
};

export default Note;
