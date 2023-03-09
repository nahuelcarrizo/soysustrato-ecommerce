import { colors, typography } from '../../config/global-styles';

import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
display: inline-block;
  font-family: 'Inconsolata';
  font-weight: '${typography.links.large.font.fontWeight}';
  font-size: 17px;
  line-height: ${typography.links.large.lineHeight};
  letter-spacing: 1.5px;
  width:100%;
  height: 100%;
  color: ${colors.primary.white};
  text-decoration: none;
  transition: ease-out 200ms;
  text-align:center;
  :hover {
    color: ${colors.primary.dark};
  }
`;

const UnderLinedComponent = styled.span`
    display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  min-height: 4rem;
  background-color: black;
  border-radius: 8px;
  width: calc(50% - 0.25rem);
  height: 100%;
`;

const ButtonContainer = styled.div`
  display:flex;
  margin-top: 0.6rem;
  gap: 0.5rem;

`;

const secondaryButton =  () => {


  return (
    <ButtonContainer>    
      <UnderLinedComponent>
        <Link href='/' passHref legacyBehavior>
          <StyledLink>Conoce Más</StyledLink>
        </Link>
      </UnderLinedComponent>
      <UnderLinedComponent>
        <Link href='/' passHref legacyBehavior>
          <StyledLink>Compra Ahora</StyledLink>
        </Link>
      </UnderLinedComponent>
    </ButtonContainer>

  );
};

export default secondaryButton;
