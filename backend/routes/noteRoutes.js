const express = require('express')
const router = express.Router({mergeParams: true})
const {getNotes, addNote, deleteNote} = require('../controllers/noteController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getNotes).post(protect, addNote).delete(protect, deleteNote)


module.exports = router