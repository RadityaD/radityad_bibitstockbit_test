import React from 'react';
import { string } from 'prop-types';
import Image from 'next/image';
import { PosterContainer, ButtonView } from './style';

const Poster = ({ title, year, id, image }) => {
  console.log({ title, year, id, image });

  return (
    <PosterContainer>
      <div className="text">
        <span>{title}</span>
        <span>{`(${year})`}</span>
      </div>
      <Image layout="fill" src={image} />
      <ButtonView>Test</ButtonView>
      <div className="overlay" />
    </PosterContainer>
  );
};

Poster.propTypes = {
  id: string,
  image: string,
  title: string,
  year: string,
};

Poster.defaultProps = {
  id: '',
  image: '',
  title: 'No Title',
  year: '2077',
};

export default Poster;
