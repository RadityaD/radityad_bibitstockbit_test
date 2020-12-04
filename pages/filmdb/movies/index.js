import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uploadFetchParams } from '@/redux/filmdb';
import Nav from '@/components/Nav';
import useFilmList from '@/hooks/useFilmList';
import { NAV_ROUTES } from '@/constants/index';

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
      <Nav items={NAV_ROUTES} />
      <div>testing</div>
      <span onClick={() => dispatch(uploadFetchParams({ sekebon: 'sekebon' }))}>
        Klik
      </span>
    </div>
  );
};

export default MoviesComp;
