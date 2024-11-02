import React, { useState,useRef }  from 'react'
import './Sounds.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import Draggable from 'react-draggable'

export default function Sounds({toggleSounds}) {

    const [selectedSound, setSelectedSound] = useState(null)
    const audioRef = useRef(null) 

    const handleSoundChange = async (event) => {
        const soundName = event.target.value
        setSelectedSound(soundName)
    
        // pausar  o som atual se estiver tocando
        if (audioRef.current) {
          audioRef.current.pause()
          audioRef.current.currentTime = 0 
        }
    
        if (soundName === 'none') {
          return 
        }

        const soundModule = await import(`../../assets/sound/${soundName}.mp3`)
        audioRef.current = new Audio(soundModule.default)
        audioRef.current.loop = true
        audioRef.current.play()
      }
  
  return (
    <Draggable handle=".sounds-title">
    <div className='sounds'>
        <div className="sounds-minus" onClick={toggleSounds}>
            <FontAwesomeIcon icon={faMinus} />
        </div>
        <div className="sounds-title">
            <p>Sounds</p>
        </div>
        <div className='sounds-radioButton'>
        <label>
          <input 
            type="radio" 
            value="none" 
            checked={selectedSound === 'none'} 
            onChange={handleSoundChange} 
          />
          None
        </label>
        <label>
          <input 
            type="radio" 
            value="bird" 
            checked={selectedSound === 'bird'} 
            onChange={handleSoundChange} 
          />
          Bird
        </label>
        <label>
          <input 
            type="radio" 
            value="fireplace" 
            checked={selectedSound === 'fireplace'} 
            onChange={handleSoundChange} 
          />
          Fireplace
        </label>
        <label>
          <input 
            type="radio" 
            value="ocean" 
            checked={selectedSound === 'ocean'} 
            onChange={handleSoundChange} 
          />
          Ocean
        </label>
        <label>
          <input 
            type="radio" 
            value="rain" 
            checked={selectedSound === 'rain'} 
            onChange={handleSoundChange} 
          />
          Rain
        </label>
        <label>
          <input 
            type="radio" 
            value="river" 
            checked={selectedSound === 'river'} 
            onChange={handleSoundChange} 
          />
          River
        </label>
        </div>
    </div>
    </Draggable>
  )
}
