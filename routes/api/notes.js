const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');

module.exports = router

router.post('/new', notesCtrl.createNote);
router.get('/', notesCtrl.getAllNotes);
