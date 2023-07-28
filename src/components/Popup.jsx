import React from 'react';
import { PopupContext } from '../App';

function Popup() {
  const { open, setOpen, selected, setSelected } = React.useContext(PopupContext);

  const object = { ...selected };

  return (
    <div className={open ? 'popup popup__active' : 'popup'} onClick={() => setOpen(false)}>
      <div className="popup__container" onClick={(e) => e.stopPropagation()}>
        <div className="popup__close" onClick={() => setOpen(false)}></div>

        <p className="popup__name main__name">{object.name}</p>
        <div className="popup__info-grid">
          <p className="popup__contact">Телефон:</p>
          <p className="popup__info">{object.phone}</p>
          <p className="popup__contact">Почта:</p>
          <p className="popup__info">{object.email}</p>
          <p className="popup__contact">Дата приема:</p>
          <p className="popup__info">{object.hire_date}</p>
          <p className="popup__contact">Должность:</p>
          <p className="popup__info">{object.position_name}</p>
          <p className="popup__contact">Подразделение:</p>
          <p className="popup__info">{object.department}</p>
        </div>
        <div className="popup__add-info">
          <p className="popup__add-info-title">Дополнительная информация:</p>
          <p className="popup__add-info-text">
            Разработчики используют текст в качестве заполнителя макта страницы. Разработчики
            используют текст в качестве заполнителя макта страницы.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Popup;
