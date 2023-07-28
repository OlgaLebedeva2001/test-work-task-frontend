import { PopupContext } from '../App';
import React from 'react';
import Popup from './Popup';

function Card({ obj }) {
  const { open, setOpen, selected, setSelected } = React.useContext(PopupContext);

  const cardClick = () => {
    setOpen(true);
    setSelected(obj);
  };

  return (
    <div className="main__item" onClick={cardClick}>
      <h2 className="main__name">{obj.name}</h2>
      <div className="main__contacts">
        <div className="main__contact">
          <div className="main__contact-img-phone"></div>
          <p className="main__contact-item">{obj.phone}</p>
        </div>
        <div className="main__contact">
          <div className="main__contact-img-mail"></div>
          <p className="main__contact-item">{obj.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
