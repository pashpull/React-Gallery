import { useState, useEffect } from 'react';

const CLIENT_ID = 'l2j93ZBT9dUPqwi8NzzkG7hFhKmUTfp0BD755glkQPE';

const useFetch = () => {
  const [searchValue, setSearchValue] = useState('All');
  const [page, setPage] = useState(1);
  useEffect(() => setPage(1), [searchValue]);

  const url =
    searchValue === 'All'
      ? `https://api.unsplash.com/search/photos?page=${page}&query=different&per_page=16&client_id=${CLIENT_ID}`
      : `https://api.unsplash.com/search/photos?page=${page}&query=${searchValue}&per_page=16&client_id=${CLIENT_ID}`;

  const [photos, setPhotos] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data.results);
        setTotalPages(data.total_pages);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [searchValue, page]);

  return {
    photos,
    isLoading,
    searchValue,
    setSearchValue,
    page,
    setPage,
    totalPages,
  };
};

export default useFetch;
