import { CategoryConfiguration } from '../../../model/category-configuration';
import FooterMobileDesktopLinks from '../footer/footer-mobile-desktop-links';
import Link from 'next/link';
import React from 'react';
import { StyledH1 } from '../../../config/global-styled-components';
import { colors } from '../../../config/global-styles';
import { device } from '../../../config/device';
import styled from 'styled-components';

const MenuContainer = styled.div<{ isOpen: boolean }>`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 1;
  top: -30px;
  left: ${(props) => (props.isOpen ? '0' : '-100%')};
  background-color: ${colors.ui.grey5percent};
  overflow-x: hidden;
  transition: 0.5s;
  display: flex;
  justify-content: space-around;
  flex-flow: column;
  align-items: flex-start;
  @media ${device.large} {
    display: none;
  }
`;

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  height: 40%;
`;

const LinkContainer = styled.div`
  margin-top: 1rem;
  padding: 0 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CategoryName = styled(StyledH1)`
font-family: 'Oswald';
font-size: 2.4rem;
`;

const Line = styled.div`
  border-bottom: 1px solid #f8e9e7;
  width: 100%;
`;

const Menu = ({ isOpen, categories }: { isOpen: boolean; categories: CategoryConfiguration[] }) => {
 
  return (
    <MenuContainer isOpen={isOpen}>
      <CategoriesContainer>
        {categories.length &&
          categories.map((category, key) => (
            <LinkContainer key={key}>
              <Link href={`/categories/${category.searchName}`} passHref legacyBehavior>
                <CategoryName>{category.name}</CategoryName>
              </Link>
            </LinkContainer>
          ))}
      </CategoriesContainer>
    </MenuContainer>
  );
};

export default Menu;
