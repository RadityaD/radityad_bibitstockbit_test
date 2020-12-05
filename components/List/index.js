import React from 'react';
import { array } from 'prop-types';
import Poster from '@/components/Poster';
import { ListContainer } from './style';

const List = ({ data }) => {
  console.log({ data });
  return (
    <ListContainer>
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
  );
};

List.propTypes = {
  data: array,
};

List.defaultProps = {
  data: [],
}

export default List;
