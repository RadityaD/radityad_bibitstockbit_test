import React from 'react';
import Link from 'next/link';
import { FrontPageWrapper } from '@/styles/frontpage/style';
import { FlexContainer } from '@/styles/flex';

const FrontPage = () => {
  return (
    <FlexContainer direction="column" justify="center" align="center">
      <FrontPageWrapper>
        <h1>Halo! Selamat Datang</h1>
        <ul>
          <li>
            <Link href="/logictask">Task 1 (logika)</Link>
          </li>
          <li>
            <Link href="/filmdb/movies">Task 2 (projek)</Link>
          </li>
        </ul>
      </FrontPageWrapper>
    </FlexContainer>
  );
};

export default FrontPage;
