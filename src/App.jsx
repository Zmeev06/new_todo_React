import React, { useState } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Header from './Components/Header';
import NoteList from './Components/NoteList';

function App() {
  const [notes, setNotes] = useState([
    { id: 1, body: 'cdscd', importance: 'minor', completed: true },
  ]);
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredNotes = () => {
    return activeFilter === 'all'
      ? notes
      : notes.filter(item => item.completed === activeFilter);
  };

  const createNote = (body, importance) => {
    setNotes([
      ...notes,
      { id: Date.now(), body: body, importance: importance, completed: false },
    ]);
  };

  const changeCompleteStatus = id => {
    setNotes(
      notes.map(e => (e.id === id ? { ...e, completed: !e.completed } : e))
    );
  };

  const editNote = (id, body, importance) => {
    setNotes(
      notes.map(e =>
        e.id === id ? { ...e, body: body, importance: importance } : e
      )
    );
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
        activeFilter={activeFilter}
      />
      <NoteList
        notes={filteredNotes()}
        changeCompleteStatus={changeCompleteStatus}
        editNote={editNote}
        removeNote={removeNote}
      />
    </ChakraProvider>
  );
}

export default App;
