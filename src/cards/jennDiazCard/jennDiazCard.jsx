import React, { useState } from 'react';
import './jennDiazCard.scss';
import headshot from './jenn.png';
import Spooky from './spooky';

function JennDiazCard() {

  const [ darkMode, setDarkMode ] = useState(false)
  const toggleDarkMode = () => {
    if (darkMode === false){
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }

  return (
    <div className={`jennsCardContainer ${darkMode && 'jennsCardContainerDark'}`}>
      <div className='card'>
          <img className='imageContainer' src={headshot} alt='headshot of a white women with brown hair smiling and standing outside' />
          {darkMode && <Spooky />}
          </div>
      <div className='card'>
          <h3 className={`jdName ${darkMode && 'jdNameDark'}`}>Jennifer Grenier Diaz</h3>
          <p className={`jdText ${darkMode && 'jdTextDark'}`}>Software Engineer</p>
          <p className={`jdText ${darkMode && 'jdTextDark'}`}>specializing in web accessibility and usability</p>
        <div className='jdButtons'>
          <a className={`jdButton ${darkMode && 'jdButtonDark'}`} href='https://github.com/jenndiaz'>GitHub</a>
          <a className={`jdButton ${darkMode && 'jdButtonDark'}`} href='https://www.linkedin.com/in/jennifergrenierdiaz/'>LinkedIn</a>
          <a className={`jdButton ${darkMode && 'jdButtonDark'}`} href='https://medium.com/@jagdiaz'>Blog</a>
        </div>
      </div>
      {!darkMode && 
        <button className='toggleButton' onClick={() => toggleDarkMode()}>Dark Mode<span className='icon'>&#x2610;</span></button>
      }
      {darkMode && 
        <button className='toggleButton toggleButtonDark' onClick={() => toggleDarkMode()}>Dark Mode<span className='icon'>&#x2611;</span></button>
      }
    </div>
  );
}

export default JennDiazCard;
