import Button from '../../UI/Button/Button';
import './Card.css';

const Card = ({ photo, name, activMod, photoInfo, tags }) => {
  const arrOfTags = [];

  const preparingTags = (tags) => {
    let sumOfTagsLength = 0;
    tags.forEach((tag) => {
      let stringTag = tag.title.split(' ').join('');
      sumOfTagsLength += stringTag.length;
      if (sumOfTagsLength < 30) {
        arrOfTags.push(stringTag);
      }
    });
  };

  preparingTags(tags);

  return (
    <div className="card">
      <img src={photo} alt="" className="card__image" />

      <div className="card__info">
        <div className="card__photo-info">
          <h3 className="card__photo-author">{name}</h3>
        </div>
        <Button
          text={'View full'}
          type={'btn-light'}
          onclick={() => {
            photoInfo(photo, name);
            activMod();
          }}
          hover={''}
        />
      </div>
      <ul className="card__photo-tags">
        {!tags ? (
          <li className="card__photo-tag">No tags</li>
        ) : (
          arrOfTags.map((tag) => (
            <li key={tag} className="card__photo-tag">
              #{tag}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Card;
