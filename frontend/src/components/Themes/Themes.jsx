import React from 'react'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCaretLeft, faMinus } from '@fortawesome/free-solid-svg-icons'
import Draggable from 'react-draggable'
import './Themes.css'


export default function Themes({ toggleThemes }) {

  
  const [imageSets, setImageSets] = useState({
    darkAcademia: [],
    lofi: []
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSet, setCurrentSet] = useState('images');

  useEffect(() => {
    // Fetch the JSON data dynamically
    fetch('../../../public/images.json') // Replace with the correct path to your JSON file
      .then(response => response.json())
      .then(data => {
        setImageSets(data);

      })
      .catch(error => console.error('Error fetching images:', error));


  }, []);

  const handleNextImage = (imageSet) => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % imageSets[imageSet].length);
    document.body.style.backgroundImage = `url(${imageSets[imageSet][currentImageIndex]})`;
  };

  const handlePrevImage = (imageSet) => {
    setCurrentImageIndex(prevIndex => (prevIndex - 1 + imageSets[imageSet].length) % imageSets[imageSet].length);
    document.body.style.backgroundImage = `url(${imageSets[imageSet][currentImageIndex]})`;
  };


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
        <li className="menu-item"  >
          <div className="arrow-item-left" onClick={() => handlePrevImage('darkAcademia')} ><FontAwesomeIcon icon={faCaretLeft} /></div>
          <p>Dark academia</p>
          <div className="arrow-item-right" onClick={() => handleNextImage('darkAcademia')} ><FontAwesomeIcon icon={faCaretRight} /> </div>
        </li>
        <li className="menu-item" >
        <div className="arrow-item-left" onClick={() => handlePrevImage('lofi')} ><FontAwesomeIcon icon={faCaretLeft} /></div>
          <p> lo-fi aesthetic</p>
          <div className="arrow-item-right" onClick={() => handleNextImage('lofi')} ><FontAwesomeIcon icon={faCaretRight} /> </div>
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
