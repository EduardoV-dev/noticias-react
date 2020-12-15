import React from 'react';
import { HeaderContainer, Title } from '../styled_components/Header';

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
    </HeaderContainer>
  );
}

export default Header;