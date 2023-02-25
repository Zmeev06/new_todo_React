import React, {useState} from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Header from './Components/Header';
import NoteList from './Components/NoteList';

function App() {

  const [notes, setNotes] = useState([
    {id:1, body:"cdscd", importance:"minor", status:true}
  ])

  const [filtered, setFiltered] = useState(notes);

  const createNote = (body, importance) => {
    setNotes([...notes, {id:Date.now(), body:body, importance:importance, status:true}])
  }

  const statusNote = (id) => {
    setNotes(notes.map(e => e.id === id ? ({...e, status:!e.status}) : e))
  };

  const editNote = (id, body, importance) => {
    setNotes(notes.map(e => e.id === id ? ({...e, body:body, importance:importance}) : e))
  };

  const setFilter = (status) => {
    if (status === "all") {
      setFiltered(notes);
    } else {
      setFiltered([...notes].filter((n) => n.status === status));
    }
  };

  const removeNote = (note) => {
    setNotes(notes.filter((n) => n.id !== note.id));
  };

  return (
    <ChakraProvider theme={theme}>
      <Header counter={notes.length} create={createNote} filter={setFilter}/>
      <NoteList notes={notes} status={statusNote} edit={editNote} remove={removeNote}/>
    </ChakraProvider>
  );
}

export default App;
