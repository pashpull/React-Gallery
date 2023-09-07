import './Home.css';
import Card from '../../components/Card/Card';
import { useContext, useState } from 'react';
import ImagesContext from '../../context/context';
import Popup from '../../components/Popup/Popup';
import SearchBar from '../../components/SearchBar/SearchBar';
import Pagination from '../../components/Pagination/Pagination';

const Home = () => {
  const { photos, isLoading, searchValue, page, setPage, totalPages } =
    useContext(ImagesContext);

  const [modWrapClasses, setModWrapClasses] = useState('modal-wrap');

  const activeModal = () => {
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

  return (
    <div className="home">
      <Popup
        wrapClass={modWrapClasses}
        activeMod={activeModal}
        photoInfo={photoInfo}
      />
      <SearchBar />
      <div className="home__photos">
        {isLoading
          ? 'Loading in progress...'
          : photos.length === 0
          ? `"${searchValue}" is not found =(`
          : photos.map((photo) => (
              <Card
                photoInfo={getPhotoInfo}
                activeMod={activeModal}
                photo={photo.urls.regular}
                name={photo.user.username}
                key={photo.id}
                tags={photo?.tags}
              />
            ))}
      </div>
      {isLoading || <Pagination />}
    </div>
  );
};

export default Home;
