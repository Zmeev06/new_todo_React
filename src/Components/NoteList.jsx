import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import Note from './Note';

const NoteList = ({ notes, remove, setstatus, edit, filter }) => {
  return (
    <Box w="100%">
      <Container maxW="container.lg" pt="6">
        {filter === 'all' ? (
          <Heading mb="4" size="md">
            All Notes
          </Heading>
        ) : filter === 'active' ? (
          <Heading mb="4" size="md">
            Active Notes
          </Heading>
        ) : filter === 'completed' ? (
          <Heading mb="4" size="md">
            Completed Notes
          </Heading>
        ) : null}

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
