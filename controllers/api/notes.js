const Note = require('../../models/note')

module.exports={
    createNote,
    getAllNotes
}

async function createNote(req, res){
    const note = await Note.create({
        text: req.body.text,
        user: req.user
    })
    res.status(200).json(note);
}

async function getAllNotes(req, res){
    const note = await Note.find({});
    if(note){
        res.status(200).json(note);
    }else{
        res.status(401).json(error)
    }
}