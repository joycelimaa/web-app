import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Themes.css'
import { faCaretRight, faCaretLeft, faMinus } from '@fortawesome/free-solid-svg-icons'
import Draggable from 'react-draggable'

export default function Themes({ toggleThemes }) {
  
  return (
    <Draggable handle=".modal-title">
    <div className="themes-modal">
      <div className="modal-minus" onClick={toggleThemes}>
        <FontAwesomeIcon icon={faMinus} />
      </div>
      <div className="modal-title">
            <p>Themes</p>
      </div>
      <ul className="themes-menu">
        <li className="menu-item">
          <div className="arrow-item-left"><FontAwesomeIcon icon={faCaretLeft} /></div>
          <p>Dark academia</p>
          <div className="arrow-item-right"><FontAwesomeIcon icon={faCaretRight} /> </div>
        </li>
        <li className="menu-item">
        <div className="arrow-item-left"><FontAwesomeIcon icon={faCaretLeft} /></div>
          <p> lo-fi aesthetic</p>
          <div className="arrow-item-right"><FontAwesomeIcon icon={faCaretRight} /> </div>
        </li>
        <li className="menu-item">
        <div className="arrow-item-left"><FontAwesomeIcon icon={faCaretLeft} /></div>
          <p>Light academia</p>
          <div className="arrow-item-right"><FontAwesomeIcon icon={faCaretRight} /> </div>
        </li>
        <li className="menu-item">
        <div className="arrow-item-left"><FontAwesomeIcon icon={faCaretLeft} /></div>
          <p>Vintage aesthetic</p>
          <div className="arrow-item-right"><FontAwesomeIcon icon={faCaretRight} /> </div>
        </li>
        <li className="menu-item">
        <div className="arrow-item-left"><FontAwesomeIcon icon={faCaretLeft} /></div>
          <p>Clean aesthetic</p>
          <div className="arrow-item-right"><FontAwesomeIcon icon={faCaretRight} /> </div>
        </li>
        <li className="menu-item">
        <div className="arrow-item-left"><FontAwesomeIcon icon={faCaretLeft} /></div>
          <p>Beach aesthetic</p>
          <div className="arrow-item-right"><FontAwesomeIcon icon={faCaretRight} /> </div>
        </li>
        <li className="menu-item">
        <div className="arrow-item-left"><FontAwesomeIcon icon={faCaretLeft} /></div>
          <p>80's aesthetic</p>
          <div className="arrow-item-right"><FontAwesomeIcon icon={faCaretRight} /> </div>
        </li>
        <li className="menu-item">
        <div className="arrow-item-left"><FontAwesomeIcon icon={faCaretLeft} /></div>
          <p>Cottage aesthetic</p>
          <div className="arrow-item-right"><FontAwesomeIcon icon={faCaretRight} /> </div>
        </li>
      </ul>
    </div>
    </Draggable>

  )
}
