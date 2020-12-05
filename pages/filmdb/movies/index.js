import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchKeyword } from '@/redux/filmdb';
import Nav from '@/components/Nav';
import SearchBar from '@/components/SearchBar';
import List from '@/components/List';
import useFilmList from '@/hooks/useFilmList';
import { NAV_ROUTES, PAGE_SIZE } from '@/constants/index';
import { Container } from './style';

const MoviesComp = () => {
  const {
    fetch,
    data,
    loading,
    error,
    message,
    loadMore,
    total,
  } = useFilmList();
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.filmdb);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);

  console.log({ data, loading, error, message, total });
  console.log({ hasNext });

  const onSearchChange = useCallback(
    (value) => {
      console.log('search changed');
      dispatch(updateSearchKeyword(value));
      setPage(1);
    },
    [dispatch]
  );

  const onLoadMore = useCallback(() => {
    if (!loading && hasNext) {
      loadMore({
        ...storeData,
        page: page + 1,
      });
      setPage(page + 1);
    }
  }, [hasNext, loadMore, loading, page, storeData]);

  useEffect(() => {
    fetch(storeData);
  }, [fetch, storeData]);

  useEffect(() => {
    const calculateTotal = Math.ceil(parseInt(total, 10) / PAGE_SIZE);
    if (page >= calculateTotal) {
      setHasNext(false);
    } else if (page < calculateTotal) {
      setHasNext(true);
    }
  }, [page, total]);

  return (
    <>
      <Nav items={NAV_ROUTES} />
      <Container>
        <SearchBar onSearch={onSearchChange} debounce={1000} />
        <List data={data} loadMore={onLoadMore} hasNext={hasNext} />
      </Container>
    </>
  );
};

export default MoviesComp;
