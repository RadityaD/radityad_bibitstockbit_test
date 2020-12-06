import React from 'react';
import { string } from 'prop-types';
import { GDContainer, TitleTxt, ContentTxt } from './style';

const GenericData = ({ title, content }) => {
  return (
    <GDContainer>
      <TitleTxt>{title}</TitleTxt>
      <ContentTxt>{content}</ContentTxt>
    </GDContainer>
  );
};

GenericData.propTypes = {
  content: string,
  title: string,
};

GenericData.defaultProps = {
  content: '',
  title: '',
};

export default GenericData;
