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
  //const [currentSet, setCurrentSet] = useState('images');

  useEffect(() => {
    // Fetch the JSON data dynamically
    fetch('../../../public/images.json') 
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
        <li className="menu-item" >
          <button className="arrow-item-left" onClick={() => handlePrevImage('purple')} ><FontAwesomeIcon icon={faCaretLeft} /></button>
          <p>Purple aesthetic</p>
          <button className="arrow-item-right" onClick={() => handleNextImage('purple')} ><FontAwesomeIcon icon={faCaretRight} /> </button>
        </li>
        <li className="menu-item" >
          <button className="arrow-item-left" onClick={() => handlePrevImage('pink')} ><FontAwesomeIcon icon={faCaretLeft} /></button>
          <p>Pink aesthetic</p>
          <button className="arrow-item-right" onClick={() => handleNextImage('pink')} ><FontAwesomeIcon icon={faCaretRight} /> </button>
        </li>
        <li className="menu-item">
          <button className="arrow-item-left" onClick={() => handlePrevImage('blue')} ><FontAwesomeIcon icon={faCaretLeft} /></button>
          <p>Blue aesthetic</p>
          <button className="arrow-item-right" onClick={() => handleNextImage('blue')} ><FontAwesomeIcon icon={faCaretRight} /> </button>
        </li>
        <li className="menu-item">
          <button className="arrow-item-left" onClick={() => handlePrevImage('red')} ><FontAwesomeIcon icon={faCaretLeft} /></button>
          <p>Red aesthetic</p>
          <button className="arrow-item-right" onClick={() => handleNextImage('red')} ><FontAwesomeIcon icon={faCaretRight} /> </button>
        </li>
        <li className="menu-item">
          <button className="arrow-item-left" onClick={() => handlePrevImage('summer')} ><FontAwesomeIcon icon={faCaretLeft} /></button>
          <p>Summer aesthetic</p>
          <button className="arrow-item-right" onClick={() => handleNextImage('summer')} ><FontAwesomeIcon icon={faCaretRight} /> </button>
        </li>
        <li className="menu-item">
          <button className="arrow-item-left" onClick={() => handlePrevImage('autumn')} ><FontAwesomeIcon icon={faCaretLeft} /></button>
          <p>Autumn aesthetic</p>
          <button className="arrow-item-right" onClick={() => handleNextImage('autumn')} ><FontAwesomeIcon icon={faCaretRight} /> </button>
        </li>
        <li className="menu-item">
          <button className="arrow-item-left" onClick={() => handlePrevImage('winter')}><FontAwesomeIcon icon={faCaretLeft} /></button>
          <p>Winter aesthetic</p>
          <button className="arrow-item-right" onClick={() => handleNextImage('winter')} ><FontAwesomeIcon icon={faCaretRight} /> </button>
        </li>
        <li className="menu-item">
          <button className="arrow-item-left" onClick={() => handlePrevImage('spring')} ><FontAwesomeIcon icon={faCaretLeft} /></button>
          <p>Spring aesthetic</p>
          <button className="arrow-item-right" onClick={() => handleNextImage('spring')} ><FontAwesomeIcon icon={faCaretRight} /> </button>
        </li>
      </ul>
    </div>
    </Draggable>

  )
}
