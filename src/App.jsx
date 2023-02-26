import React, { useState } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Header from './Components/Header';
import NoteList from './Components/NoteList';

function App() {
  const [notes, setNotes] = useState([
    { id: 1, body: 'cdscd', importance: 'minor', status: "active" },
  ]);

  const [activeFilter, setActiveFilter] = React.useState('all');

  const createNote = (body, importance) => {
    setNotes([
      ...notes,
      { id: Date.now(), body: body, importance: importance, status: "active" },
    ]);
  };

  const setstatusNote = id => {
    setNotes(notes.map(e => (e.id === id ? { ...e, status: "completed" } : e)));
  };

  const editNote = (id, body, importance) => {
    setNotes(
      notes.map(e =>
        e.id === id ? { ...e, body: body, importance: importance } : e
      )
    );
  };

  const filteredNotes = () => {
    return activeFilter === 'all'
      ? notes
      : notes.filter(item => item.status === activeFilter);
  };

  const removeNote = note => {
    setNotes(notes.filter(n => n.id !== note.id));
  };

  return (
    <ChakraProvider theme={theme}>
      <Header
        counter={filteredNotes().length}
        create={createNote}
        setFilter={setActiveFilter}
        filter={activeFilter}
      />
      <NoteList
        notes={filteredNotes}
        setstatus={setstatusNote}
        edit={editNote}
        remove={removeNote}
      />
    </ChakraProvider>
  );
}

export default App;
