import React, { useContext } from 'react';
import { CardContext } from '../../App';
import image from './rhondapicture.jpg';
import './rhondaCard.scss';

const RhondaCard = () => {
    const { rhonda } = useContext(CardContext);

    return (
        <div className="rhondaCardContainer">
            <div className="centered">
                    <img className="image" src={image} alt="rhonda's face" />
            </div>

            <div className="centered">
                <h3>{rhonda.data.name}</h3>
                <p>{rhonda.data.title}</p>
                <p>{rhonda.data.email}</p>
                <div>
                    <a href={rhonda.data.linkedin} rel="noreferrer" target="_blank">LinkedIn</a>&nbsp;&nbsp;
                    <a href={rhonda.data.github} rel="noreferrer" target="_blank">Github</a>
                </div>
            </div>
        </div>
    )
}

export default RhondaCard;
