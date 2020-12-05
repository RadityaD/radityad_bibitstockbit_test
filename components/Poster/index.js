import React, { useState } from 'react';
import { string } from 'prop-types';
import { useRouter } from 'next/router';

// import Image from 'next/image';
import {
  PosterContainer,
  PosterText,
  ButtonView,
  ButtonDetail,
  ButtonContainer,
  Overlay,
} from './style';

const Poster = ({ title, year, id, image }) => {
  // console.log({ title, year, id, image });
  const router = useRouter();
  const [isHovered, setHovered] = useState(false);
  const [posterView, setPosterView] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleGoToDetail = () => {
    router.push(`movies/detail/${id}`);
  };

  return (
    <>
      <PosterContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <PosterText hover={isHovered}>
          <span>{title}</span>
          <span>{`(${year})`}</span>
        </PosterText>
        <img
          src={image !== 'N/A' ? image : '/broken_image.png'}
          className="posterImage"
        />
        {/* //TODO: OMDB returns too many different url src, broke next image comp */}
        {/* <Image
          layout="fill"
          src={image !== 'N/A' ? image : '/broken_image.png'}
        /> */}
        <ButtonContainer hover={isHovered}>
          <ButtonView />
          <ButtonDetail onClick={handleGoToDetail}>
            <span>Lihat Detail</span>
          </ButtonDetail>
        </ButtonContainer>
        <Overlay hover={isHovered} />
      </PosterContainer>
    </>
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
  image: '/broken_image.png',
  title: 'No Title',
  year: '2077',
};

export default Poster;
