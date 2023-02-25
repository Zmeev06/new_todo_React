import React from 'react'
import { Box, Container, Heading } from '@chakra-ui/react'
import Note from './Note';

const NoteList = ({notes, remove, status, edit}) => {
    return ( 
        <Box w="100%">
            <Container maxW="container.lg" pt="6">
                <Heading mb="4" size="md">On Hold</Heading>
                {notes.map(note => note.status ?
                    <Note note={note} status={status} edit={edit} remove={remove} key={note.id}/> :
                    null)}
            </Container>
        </Box>
     );
}
 
export default NoteList;