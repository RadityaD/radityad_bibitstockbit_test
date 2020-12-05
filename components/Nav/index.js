import React from 'react';
import { arrayOf, object } from 'prop-types';
import { useRouter } from 'next/router';
import { NavWrapper, NavItems } from './style';

const Nav = ({ items = [] }) => {
  const router = useRouter();

  const handleChangeRoute = (link) => {
    if (router.pathname === link) return;
    router.push(link);
  };

  return (
    <NavWrapper>
      {items.map((item) => {
        const { text, link } = item;
        return (
          <NavItems key={text} onClick={() => handleChangeRoute(link)}>
            {text}
          </NavItems>
        );
      })}
    </NavWrapper>
  );
};

Nav.propTypes = {
  items: arrayOf(object).isRequired,
};

export default Nav;
