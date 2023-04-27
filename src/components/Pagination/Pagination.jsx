import { useContext, useState, useEffect } from 'react';
import ImagesContext from '../../context/context';
import Button from '../../UI/Button/Button';
import './Pagination.css';

const Pagination = () => {
  const { page, setPage, totalPages } = useContext(ImagesContext);

  const [pagination, setPagination] = useState([1, 2, 3, 4, 5, 6]);

  const updatePagination = (actualPage) => {
    let newPagination = [];
    if (actualPage > 3) {
      if (actualPage < totalPages - 3) {
        for (let i = -3; i < 3; i++) {
          newPagination.push(actualPage + i);
        }
      } else {
        for (let i = -5; i < 1; i++) {
          newPagination.push(totalPages + i);
        }
      }
      setPagination(newPagination);
    } else {
      setPagination([1, 2, 3, 4, 5, 6]);
    }
  };

  useEffect(() => updatePagination(page), []);

  return (
    <div className="pagination">
      <Button
        text={'To the begining'}
        type={'dark'}
        hover={''}
        onclick={(e) => {
          e.preventDefault();
          setPage(1);
          updatePagination(1);
        }}
      />
      {pagination.map((pageNum) => (
        <Button
          key={pageNum}
          text={pageNum}
          type={'dark'}
          hover={''}
          onclick={(e) => {
            e.preventDefault();
            setPage(pageNum);
            updatePagination(pageNum);
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
          updatePagination(totalPages);
        }}
      />
    </div>
  );
};

export default Pagination;
