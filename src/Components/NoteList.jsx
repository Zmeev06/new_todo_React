import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import Note from './Note';

const NoteList = ({ notes, remove, changeCompleteStatus, editNote }) => {
  return (
    <Box w="100%">
      <Container maxW="container.lg" pt="6">
        <Heading mb="4" size="md">
          On Hold
        </Heading>
        {notes.map(note =>
            <Note
              note={note}
              changeCompleteStatus={changeCompleteStatus}
              editNote={editNote}
              remove={remove}
              key={note.id}
            />
        )}
      </Container>
    </Box>
  );
};

export default NoteList;
