import React, { useState, useEffect } from 'react';
import './jennDiazCard.scss';
import ghost from './ghost.png';

const Spooky = ({} ) => {

    const [fadeProp, setFadeProp] = useState({
      fade: 'fade-in', 
    })
  
    useEffect(() => {
      const timeout = setInterval(() => {
        setFadeProp({
          fade: 'fade-out'
        })
      }, 2000);

      return () => {}
    }, [])
    

  return (
    <div className={`animation ${fadeProp.fade}`}>
      <img className="ghost" src={ghost} alt='disappearing skeleton'></img>
      <p className="mb-0 text-white">Boo!</p>
    </div>
  );
}

export default Spooky;
