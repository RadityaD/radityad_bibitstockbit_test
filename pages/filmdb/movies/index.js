import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uploadFetchParams } from '@/redux/filmdb';
import Nav from '@/components/Nav';
import useFilmList from '@/hooks/useFilmList';

const MoviesComp = () => {
  const { fetch } = useFilmList();
  const state = useSelector((state) => state.filmdb);
  const dispatch = useDispatch();

  console.log({ state });
  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <div>
      <Nav />
      <div>testing</div>
      <span onClick={() => dispatch(uploadFetchParams({ sekebon: 'sekebon' }))}>
        Klik
      </span>
    </div>
  );
};

export default MoviesComp;
