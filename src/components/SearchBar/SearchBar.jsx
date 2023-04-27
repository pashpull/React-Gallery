import './SearchBar.css';
import Button from '../../UI/Button/Button';
import { useContext, useState } from 'react';
import ImagesContext from '../../context/context';

const SearchBar = () => {
  const { searchValue, setSearchValue, setPage } = useContext(ImagesContext);

  const [categories, setCategories] = useState([
    'All',
    'Sea',
    'Forest',
    'Mountains',
    'Cities',
    'Summer',
  ]);

  const [inputValue, setInputValue] = useState('');

  return (
    <div className="search-bar">
      {categories.map((cat) => (
        <Button
          key={cat}
          text={cat}
          type={'dark'}
          hover={''}
          onclick={() => {
            setSearchValue(cat);
            setPage(1);
          }}
          active={searchValue === cat ? true : false}
        />
      ))}
      <form action="" className="search">
        <input
          type="text"
          className="search__input"
          placeholder="What do you want to find?"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
        />
        <Button
          text={'Search'}
          type={'btn-light'}
          onclick={(e) => {
            e.preventDefault();
            setSearchValue(inputValue);
            setInputValue('');
            setPage(1);
            updatePagesBar(1);
          }}
          hover={'_none-hover'}
        />
      </form>
    </div>
  );
};

export default SearchBar;
