import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchKeyword } from '@/redux/filmdb';
import Nav from '@/components/Nav';
import SearchBar from '@/components/SearchBar';
import List from '@/components/List';
import useFilmList from '@/hooks/useFilmList';
import { NAV_ROUTES } from '@/constants/index';
import { Container } from './style';

const MoviesComp = () => {
  const { data, loading, error, message } = useFilmList();
  const dispatch = useDispatch();

  const searchData = data?.Search || [];

  console.log({ data, loading, error, message });

  const onSearchChange = useCallback(
    (value) => {
      console.log('search changed');
      dispatch(updateSearchKeyword(value));
    },
    [dispatch]
  );

  // useEffect(() => {
  //   fetch(state);
  // }, [fetch, state]);

  return (
    <>
      <Nav items={NAV_ROUTES} />
      <Container>
        <SearchBar onSearch={onSearchChange} debounce={1000} />
        <List data={searchData} />
      </Container>
      <div>testing</div>
    </>
  );
};

export default MoviesComp;
