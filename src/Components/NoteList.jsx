import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import Note from './Note';

const NoteList = ({ notes, remove, setstatus, edit }) => {
  return (
    <Box w="100%">
      <Container maxW="container.lg" pt="6">
        <Heading mb="4" size="md">
          On Hold
        </Heading>
        {notes().map(note => (
          <Note
            note={note}
            setstatus={setstatus}
            edit={edit}
            remove={remove}
            key={note.id}
          />
        ))}
      </Container>
    </Box>
  );
};

export default NoteList;
