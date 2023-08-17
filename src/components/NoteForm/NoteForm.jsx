import { useState } from "react"
import { createNote } from "../../utilities/notes-api";


export default function NoteForm({addNote}){
    const [newNote, setNewNote] = useState('');

    async function handleSubmit(evt) {
        evt.preventDefault();
        if (newNote !== "") {
            try {
                const savedNote = await createNote({
                    text: newNote,
                });
                addNote(savedNote)
                setNewNote('');
            } catch (err) {
                console.error("error saving note", err);
            }
        }
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={newNote}
                    onChange={(evt) => setNewNote(evt.target.value)}
                    placeholder="new note..."
                />
                <button type="submit">Add Note</button>
            </form>
        </>
    )
}