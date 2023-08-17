import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export function getAllNotes(){
    return sendRequest (BASE_URL)
}

export function createNote(noteData){
    return sendRequest(`${BASE_URL}/new`, 'POST', noteData)
}