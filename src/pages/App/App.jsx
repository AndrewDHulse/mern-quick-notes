import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import {getAllNotes} from '../../utilities/notes-service';
import NoteForm from '../../components/NoteForm/NoteForm'
import NotePage from '../NotePage/NotePage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const initialNotes=[]
  
  const [notes, setNotes]= useState(initialNotes);
  
  function addNote(note){
    setNotes([...notes, note])
  }
  
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route
              path="/notes/new"
              element={<NoteForm notes={notes} addNote={addNote} />}
              />
              <Route
                  path="notes/"
                  element={<NotePage addNote={addNote} notes={notes} />}
              />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
        )}
    </main>
  );
}
