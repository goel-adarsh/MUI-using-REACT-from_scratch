import { useState } from 'react';
import content from '../../content';

import './Item.css';
import downArrow from '../../assets/downArrow.svg';
import upArrow from '../../assets/upArrow.svg';

export default function Item({ number }) {
  const [isActive, setIsActive] = useState(false);
  function handleClick() {
    setIsActive(prev => (prev ? false : true));
  }
  return (
    <>
      <div className={`item ${isActive ? 'open' : ''}`}>
        <p className="number">{number < 9 ? `0${number + 1}` : number}</p>
        <p className="heading">{content[number].heading}</p>
        {isActive ? (
          <img src={upArrow} className="icon" onClick={handleClick} />
        ) : (
          <img src={downArrow} className="icon" onClick={handleClick} />
        )}
        <div className="content-box">
          <p className="description">{content[number].description}</p>
          <ul className="points">
            {content[number].points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
