import React, { useState } from 'react';
import './jennDiazCard.scss';
import headshot from './jenn.png';

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
    <div className={darkMode ? "jennsCardContainerDark" : "jennsCardContainer"}>
      <div className="card">
          <img className="imageContainer" src={headshot} alt="headshot of a white women with brown hair smiling and standing outside" />
      </div>
      <div className="card">
          <h3 className={darkMode ? 'jdNameDark' : 'jdName'}>Jennifer Grenier Diaz</h3>
          <p className={darkMode ? 'jdTextDark' : 'jdText'}>Software Engineer</p>
          <p className={darkMode ? 'jdTextDark' : 'jdText'}>specializing in web accessibility and usability</p>
        <div className="jdButtons">
          <a className={darkMode ? 'jdButtonDark' : 'jdButton'}href="https://github.com/jenndiaz">GitHub</a>
          <a className={darkMode ? 'jdButtonDark' : 'jdButton'} href="https://www.linkedin.com/in/jennifergrenierdiaz/">LinkedIn</a>
          <a className={darkMode ? 'jdButtonDark' : 'jdButton'} href="https://medium.com/@jagdiaz">Blog</a>
        </div>
      </div>
      {!darkMode && 
        <button className="toggleButton" onClick={() => toggleDarkMode()}>Dark Mode<span className="icon">&#x2610;</span></button>
      }
      {darkMode && 
        <button className="toggleButtonDark" onClick={() => toggleDarkMode()}>Dark Mode<span className="icon">&#x2611;</span></button>
      }
    </div>
  );
}

export default JennDiazCard;
