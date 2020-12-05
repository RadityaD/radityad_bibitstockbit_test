import React from 'react';
import { GDContainer, TitleTxt, ContentTxt } from './style';

const GenericData = ({ title, content }) => {
  return (
    <GDContainer>
      <TitleTxt>{title}</TitleTxt>
      <ContentTxt>{content}</ContentTxt>
    </GDContainer>
  );
};

export default GenericData;
