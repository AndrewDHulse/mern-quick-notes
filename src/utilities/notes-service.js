import * as notesAPI from './notes-api'

export async function createNote(noteData){
    const note = await notesAPI.createNote(noteData);
    return note
}

export async function getAllNotes(){
    const note = await notesAPI.getAllNotes();
    return note
}