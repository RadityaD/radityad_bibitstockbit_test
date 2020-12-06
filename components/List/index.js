import React, { useRef, useEffect, useCallback } from 'react';
import { array, bool, func } from 'prop-types';
import Poster from '@/components/Poster';
import { ListContainer, Loader } from './style';

const List = ({ data, loadMore, hasNext }) => {
  const lazyLoader = useRef(null);

  const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) + 100 &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const handleOnScroll = useCallback(() => {
    if (!lazyLoader.current) return;
    if (isInViewport(lazyLoader.current)) {
      loadMore();
    }
  }, [loadMore]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleOnScroll);

      return () => {
        window.removeEventListener('scroll', handleOnScroll);
      };
    }
  }, [handleOnScroll]);

  return (
    <>
      <ListContainer data-testid="listContainer">
        {data.map((item) => {
          const { Title, Poster: PosterUrl, Year, imdbID } = item || {};
          return (
            <Poster
              key={imdbID}
              image={PosterUrl}
              title={Title}
              id={imdbID}
              year={Year}
            />
          );
        })}
      </ListContainer>
      {hasNext && (
        <Loader ref={lazyLoader} data-testid="loader">
          Loading...
        </Loader>
      )}
    </>
  );
};

List.propTypes = {
  data: array,
  hasNext: bool,
  loadMore: func.isRequired,
};

List.defaultProps = {
  data: [],
  hasNext: true,
};

export default List;
