import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchKeyword } from '@/redux/filmdb';
import Nav from '@/components/Nav';
import SearchBar from '@/components/SearchBar';
import List from '@/components/List';
import Skeleton from '@/components/Skeleton';
import { ToastContainer, toast } from 'react-toastify';
import useFilmList from '@/hooks/useFilmList';
import { useRouter } from 'next/router';
import { NAV_ROUTES, PAGE_SIZE } from '@/constants/index';
import { Container, TitleText } from '@/styles/filmdb/movies.module';
import 'react-toastify/dist/ReactToastify.css';

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
  const router = useRouter();
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.filmdb);
  const searchKeyword = storeData.s;
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);

  let searchType;

  switch (true) {
    case router.pathname.includes('movies'):
      searchType = 'movie';
      break;
    case router.pathname.includes('series'):
      searchType = 'series';
      break;
    default:
      searchType = 'movies';
  }

  const onSearchChange = useCallback(
    (value) => {
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
        type: searchType,
      });
      setPage(page + 1);
    }
  }, [hasNext, loadMore, loading, page, searchType, storeData]);

  useEffect(() => {
    fetch({
      ...storeData,
      type: searchType,
    });
  }, [fetch, searchType, storeData]);

  useEffect(() => {
    const calculateTotal = Math.ceil(parseInt(total, 10) / PAGE_SIZE);
    if (page >= calculateTotal) {
      setHasNext(false);
    } else if (page < calculateTotal) {
      setHasNext(true);
    }
  }, [page, total]);

  useEffect(() => {
    if (error && message) {
      const nofify = () => toast.error(`Error: ${message}`);
      nofify();
      setHasNext(false);
    }
  }, [error, message]);

  return (
    <>
      <Nav items={NAV_ROUTES} />
      <Container>
        <TitleText>{`${searchType} search`}</TitleText>
        <SearchBar
          onSearch={onSearchChange}
          debounce={1000}
          keyword={searchKeyword}
        />
        {loading && <Skeleton />}
        <List data={data} loadMore={onLoadMore} hasNext={hasNext} />
      </Container>
      <ToastContainer />
    </>
  );
};

export default MoviesComp;
