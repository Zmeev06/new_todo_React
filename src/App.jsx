import React, { useState } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Header from './Components/Header';
import NoteList from './Components/NoteList';

function App() {
  const [notes, setNotes] = useState([
    { id: 1, body: 'cdscd', importance: 'minor', status: true },
  ]);

  const [activeFilter, setActiveFilter] = React.useState('all');

  const createNote = (body, importance) => {
    setNotes([
      ...notes,
      { id: Date.now(), body: body, importance: importance, status: true },
    ]);
  };

  const statusNote = id => {
    setNotes(notes.map(e => (e.id === id ? { ...e, status: !e.status } : e)));
  };

  const editNote = (id, body, importance) => {
    setNotes(
      notes.map(e =>
        e.id === id ? { ...e, body: body, importance: importance } : e
      )
    );
  };

  const getFilteredNotes = () => {
    if (activeFilter === 'all') return notes;

    return notes.filter(item => activeFilter && item.status);
  };

  const removeNote = note => {
    setNotes(notes.filter(n => n.id !== note.id));
  };

  return (
    <ChakraProvider theme={theme}>
      <Header
        counter={notes.length}
        create={createNote}
        setFilter={setActiveFilter}
      />
      <NoteList
        notes={getFilteredNotes}
        status={statusNote}
        edit={editNote}
        remove={removeNote}
      />
    </ChakraProvider>
  );
}

export default App;
