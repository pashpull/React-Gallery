import Button from '../../UI/Button/Button';
import './Popup.css';

const Popup = ({ name, wrapClass, activMod, photoInfo }) => {
  return (
    <div className={wrapClass}>
      <div className="modal">
        <div className="modal__image-wrap">
          <img src={photoInfo.url} alt="" className="modal__image" />
        </div>
        <div className="modal__info">
          <div className="modal__info-header">
            <h2 className="modal__info-title">{photoInfo.name}</h2>
            <Button text={'Close'} type={'btn-light'} onclick={activMod} />
          </div>
          <div className="modal__comments"></div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
