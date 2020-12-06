import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import useFilmDetail from '@/hooks/useFilmDetail';
import Poster from '@/components/Poster';
import Nav from '@/components/Nav';
import Skeleton from '@/components/Skeleton';
import { NAV_ROUTES } from '@/constants/index';
import GenericData from '@/components/GenericDetailData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FlexContainer } from '@/styles/flex';
import { DetailContainer, TitleTxt } from '@/styles/filmdb/detail.module';

const DetailPage = () => {
  const router = useRouter();
  const { data, loading, fetch, message, error } = useFilmDetail();
  const { filmid } = router.query || {};

  const { Title, Poster: posterUrl, Year } = data || {};

  const genericData = data || {};
  delete genericData.Ratings;
  delete genericData.Poster;
  delete genericData.Response;
  delete genericData.imdbID;

  useEffect(() => {
    fetch({
      i: filmid,
    });
  }, [fetch, filmid]);

  useEffect(() => {
    if (error && message) {
      const nofify = () => toast.error(`Error: ${message}`);
      nofify();
    }
  }, [error, message]);

  if (loading) return <Skeleton />;

  return (
    <>
      <Nav items={NAV_ROUTES} />
      <DetailContainer>
        <FlexContainer>
          <Poster image={posterUrl} year={Year} title={Title} layout="detail" />
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
      <ToastContainer />
    </>
  );
};

export default DetailPage;
