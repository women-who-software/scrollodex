import React, { useState } from 'react';
import './jennDiazCard.scss';
import headshot from './jenn.png';

function JennDiazCard() {

  const [ darkMode, setDarkMode ] = useState('light')
  const toggleDarkMode = () => {
    if (darkMode === 'light'){
      setDarkMode('dark')
    } else {
      setDarkMode('light')
    }
  }

  return (
    <div className={darkMode === 'dark' ? "jennsCardContainerDark" : "jennsCardContainer"}>
      <div className="card">
          <img className="imageContainer" src={headshot} alt="headshot of a white women with brown hair smiling and standing outside" />
          <button className="toggleButton" onClick={() => toggleDarkMode()}>Dark Mode</button>
      </div>
      <div className="card">
          <h3 className={darkMode === 'dark' ? 'jdNameDark' : 'jdName'}>Jennifer Grenier Diaz</h3>
          <p className={darkMode === 'dark' ? 'jdTextDark' : 'jdText'}>Software Engineer</p>
          <p className={darkMode === 'dark' ? 'jdTextDark' : 'jdText'}>specializing in web accessibility and usability</p>
        <div className="jdButtons">
          <a className={darkMode === 'dark' ? 'jdButtonDark' : 'jdButton'}href="https://github.com/jenndiaz">GitHub</a>
          <a className={darkMode === 'dark' ? 'jdButtonDark' : 'jdButton'} href="https://www.linkedin.com/in/jennifergrenierdiaz/">LinkedIn</a>
          <a className={darkMode === 'dark' ? 'jdButtonDark' : 'jdButton'} href="https://medium.com/@jagdiaz">Blog</a>
        </div>
      </div>
    </div>
  );
}

export default JennDiazCard;
