import './Home.css';
import Card from '../../components/Card/Card';
import { useContext, useEffect, useState } from 'react';
import ImagesContext from '../../context/context';
import Popup from '../../components/Popup/Popup';
import SearchBar from '../../components/SearchBar/SearchBar';
import Button from '../../UI/Button/Button';

const Home = () => {
  const { photos, isLoading, searchValue, page, setPage, totalPages } =
    useContext(ImagesContext);

  const [modWrapClasses, setModWrapClasses] = useState('modal-wrap');

  const activModal = () => {
    if (modWrapClasses === 'modal-wrap') {
      setModWrapClasses('modal-wrap modal-wrap_active');
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    } else {
      setModWrapClasses('modal-wrap');
      document.getElementsByTagName('body')[0].style.overflow = 'auto';
    }
  };

  const [photoInfo, setPhotoInfo] = useState({ url: '', name: '' });

  const getPhotoInfo = (url, name) => {
    setPhotoInfo({ url: url, name: name });
  };

  const [pagesBar, setPagesBar] = useState([1, 2, 3, 4, 5, 6]);

  const updatePagesBar = (actualPage) => {
    let newPagesBar = [];
    if (actualPage > 3) {
      if (actualPage < totalPages - 3) {
        for (let i = -3; i < 3; i++) {
          newPagesBar.push(actualPage + i);
        }
      } else {
        for (let i = -5; i < 1; i++) {
          newPagesBar.push(totalPages + i);
        }
      }
      setPagesBar(newPagesBar);
    } else {
      setPagesBar([1, 2, 3, 4, 5, 6]);
    }
  };

  useEffect(() => updatePagesBar(page), []);
  return (
    <div className="home">
      <Popup
        wrapClass={modWrapClasses}
        activMod={activModal}
        photoInfo={photoInfo}
      />
      <SearchBar updatePagesBar={updatePagesBar} />
      <div className="home__photos">
        {isLoading
          ? 'Loading in progress...'
          : photos.length === 0
          ? `"${searchValue}" is not found =(`
          : photos.map((photo) => (
              <Card
                photoInfo={getPhotoInfo}
                activMod={activModal}
                photo={photo.urls.regular}
                name={photo.user.username}
                key={photo.id}
                tags={photo?.tags}
              />
            ))}
      </div>
      {isLoading || (
        <div className="home__pages">
          <Button
            text={'To the begining'}
            type={'dark'}
            hover={''}
            onclick={(e) => {
              e.preventDefault();
              setPage(1);
              updatePagesBar(1);
            }}
          />
          {pagesBar.map((pageNum) => (
            <Button
              key={pageNum}
              text={pageNum}
              type={'dark'}
              hover={''}
              onclick={(e) => {
                e.preventDefault();
                setPage(pageNum);
                updatePagesBar(pageNum);
              }}
              active={pageNum === page ? true : false}
            />
          ))}
          <Button
            text={'To the end'}
            type={'dark'}
            hover={''}
            onclick={(e) => {
              e.preventDefault();
              setPage(totalPages);
              updatePagesBar(totalPages);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
