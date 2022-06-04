import React from 'react'
import {useSelector} from 'react-redux'
import {FaTrashAlt} from 'react-icons/fa'

function NoteItem({note, onDeleteNote}) {
    const {user} = useSelector((state) => state.auth)
  
    return (
        <div className="note" style={{
            backgroundColor: note.isStaff ? 'rgba(0,0,0,0.7)' : '#fff',
            color: note.isStaff ? '#fff' : '#000'
        }}>
            <h4>{note.isStaff ? <span>Staff</span> : <span>{user.name}</span>}</h4>
            <hr  className='bottom-margin-note' />
            <p>{note.text}</p>
            <div className="note-date">
                {new Date(note.createdAt).toLocaleString('en-IN')}
            </div>
            <FaTrashAlt className='delete-note' onClick={() => onDeleteNote()}  />
        </div>
  )
}

export default NoteItem