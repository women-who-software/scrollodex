import React from 'react';
import './JamesKCard.scss';
import image from './hawaiiJames.jpg';

function JamesKCard() {
  const [sparkleMe, setSparkleMe] = React.useState(false)


  const sparkleCount = 50;
  let totalGrid = [];
  for (let i = 0; i < sparkleCount; i++) {
      console.log(i)
      totalGrid.push(<div className="jkSparkleBox"></div>)
  }

  const sparkleMotion = () => {
    setSparkleMe(!sparkleMe)
  }


  return (
    <div className={`jkCardContainer ${sparkleMe && 'jkCardContainerDark'}`}>
        <div className="jkSparkleContainer">
          {!sparkleMe && totalGrid}

        </div>
        
        <div className="card">
            <img className="imageContainer" src={image} alt="picture of a man with sunglasses next to a body of water" />
            <div className={`jkButton ${sparkleMe && 'jkButtonDark'}`}  onClick={sparkleMotion}>
              {!sparkleMe ? 'Dark Mode' : 'Sparkle Time'}
            </div>
        </div>

        <div className={`card ${sparkleMe && 'jkCardDark'}`}>
            <h3>James Kim</h3>
            <p>Software Engineer</p>
            <p>jemsgold21@gmail.com</p>
            <a className={`jkButton ${sparkleMe && 'jkButtonDark'}`} href='https://github.com/soursprite'>GitHub</a>
            <a className={`jkButton ${sparkleMe && 'jkButtonDark'}`} href='https://www.linkedin.com/in/goldenjems/'>LinkedIn</a>
        </div>

    </div>
  );
}

export default JamesKCard;
