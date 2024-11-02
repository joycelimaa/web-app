import React from 'react'
import './Notes.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import Draggable from 'react-draggable'
import { useEffect, useState } from 'react'

export default function Notes({toggleNotes}) {

    const [text, setText] = useState('');

    // Load initial value from localStorage
    useEffect(() => {
        const savedText = localStorage.getItem('notesText');
        if (savedText) {
        setText(savedText);
        }
    }, []);

    // Save text to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('notesText', text);
    }, [text]);

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    return (
    <Draggable handle=".notes-title">
    <div className='notes'>
        <div className="notes-minus" onClick={toggleNotes}>
            <FontAwesomeIcon icon={faMinus} />
        </div>
        <div className="notes-title">
            <p>Notes</p>
        </div>
        <div className='notes-text'>
            <textarea placeholder="I'm thinking about...."
            value={text} 
            onChange={handleTextChange}  />
        </div>
    </div>
    </Draggable>
    )
}
