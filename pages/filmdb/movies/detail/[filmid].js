import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import useFilmDetail from '@/hooks/useFilmDetail';
import Poster from '@/components/Poster';
import Nav from '@/components/Nav';
import { NAV_ROUTES } from '@/constants/index';
import GenericData from '@/components/GenericDetailData';
import { FlexContainer } from '@/styles/flex';
import { DetailContainer, TitleTxt } from './style';

const DetailPage = () => {
  const router = useRouter();
  const { data, loading, error, fetch, response } = useFilmDetail();
  const { filmid } = router.query || {};
  console.log({ data, response });

  const { Title, Poster: posterUrl, Year } = data || {};

  const genericData = data || {};
  delete genericData.Ratings;
  delete genericData.Poster;
  delete genericData.Response;
  delete genericData.imdbID;

  console.log({ genericData });

  useEffect(() => {
    fetch({
      i: filmid,
    });
  }, [fetch, filmid]);

  return (
    <>
      <Nav items={NAV_ROUTES} />
      <DetailContainer>
        <FlexContainer>
          <Poster image={posterUrl} />
          <FlexContainer direction="column">
            <TitleTxt>{Title}</TitleTxt>
            <TitleTxt>{`-- (${Year})`}</TitleTxt>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer direction="column">
          {Object.entries(genericData).map((item) => {
            const key = item[0];
            const value = item[1];
            return <GenericData key={key} title={key} content={value} />;
          })}
        </FlexContainer>
      </DetailContainer>
    </>
  );
};

export default DetailPage;
