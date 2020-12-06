import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { string } from 'prop-types';
import { useRouter } from 'next/router';
import Modal from '@/components/Modal';
import {
  PosterContainer,
  PosterText,
  PosterImage,
  ButtonView,
  ButtonDetail,
  ButtonContainer,
  Overlay,
} from './style';

const Poster = ({ title, year, id, image, layout }) => {
  const router = useRouter();
  const [isHovered, setHovered] = useState(false);
  const [posterView, setPosterView] = useState(false);
  const isDetailPage = layout === 'detail';

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleGoToDetail = () => {
    router.push(`/filmdb/detail/${id}`);
  };

  const handlePosterView = () => {
    setPosterView(true);
  };

  const handleOnModalClose = () => {
    setPosterView(false);
  };

  const renderPosterImage = (opts) => {
    const isModal = opts === 'modal';

    return (
      <PosterImage isModal={isModal}>
        <img
          src={image !== 'N/A' ? image : '/broken_image.png'}
          className="posterImage"
          data-testid={posterView && isModal ? 'modalShown' : 'modalNotShown'}
        />
      </PosterImage>
    );
  };

  return (
    <>
      <PosterContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        isDetailPage={isDetailPage}
        data-testid={isHovered ? 'containerIsHovered' : 'containerNotHovered'}
      >
        <PosterText hover={isHovered}>
          <span>{title}</span>
          <span>{`(${year})`}</span>
        </PosterText>
        {renderPosterImage('', isDetailPage)}
        <ButtonContainer hover={isHovered}>
          <ButtonView
            onClick={handlePosterView}
            data-tip="Lihat Poster"
            data-testid="btnPosterView"
          />
          {!isDetailPage && (
            <ButtonDetail
              onClick={handleGoToDetail}
              data-testid="btnLihatDetail"
            >
              <span>Lihat Detail</span>
            </ButtonDetail>
          )}
        </ButtonContainer>
        <Overlay hover={isHovered} />
      </PosterContainer>
      <Modal show={posterView} onClose={handleOnModalClose}>
        {renderPosterImage('modal')}
      </Modal>
      <ReactTooltip effect="solid" place="top" />
    </>
  );
};

Poster.propTypes = {
  id: string,
  image: string,
  layout: string,
  title: string,
  year: string,
};

Poster.defaultProps = {
  id: '',
  image: '/broken_image.png',
  layout: '',
  title: 'No Title',
  year: '2077',
};

export default Poster;
