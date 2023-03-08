import React, { useEffect, useState } from 'react';

import { CategoryConfiguration } from '../../../model/category-configuration';
import Link from 'next/link';
import RemoteFixedImage from '../../shared/image-types/remote-fixed-size-image';
import { StyledH4 } from '../../../config/global-styled-components';
import { colors } from '../../../config/global-styles';
import { device } from '../../../config/device';
import styled from 'styled-components';

const DesktopContainer = styled.section`
  display: none;

  @media ${device.large} {
    display: flex;
    flex-direction: row;
    background: url('/assets/Background-Product-Categories-Desktop.svg') no-repeat center;
    background-size: 70%;
    justify-content: center;
  }
`;

const MobileContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 500px;
  margin: auto;
  @media ${device.large} {
    display: none;
  }
`;

const NormalColumn = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
`;

const LoweredColumn = styled.article`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  width: 100%;

  @media ${device.large} {
    padding-right: 1.5rem;
  }
`;

const CategoryImg = styled(RemoteFixedImage)`
  border-radius: 2px;
  max-width: 100%;
  object-fit: cover;
  transition: all 0.5s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;

const GradientDiv = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent,#999999 90%, #666);
`;

const LinkContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left:0;
  right: 0;
  justify-content: space-between;
  align-items: center;
  z-index: 200;
`;

const LinkImg = styled.img`
  flex-shrink: 0;
  max-width: 100%;
  max-height: 12px;
`;

const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

const StyledLink = styled.a`
  text-decoration: none;
  overflow: hidden;
`;

const CategoryName = styled(StyledH4)`
  color: ${colors.primary.white} !important;
  font-size: 1.7rem !important;
  :hover {
    color: ${colors.primary.dark};
  }
`;

const createCategoryContent = (category: CategoryConfiguration, isCategoriesPage: boolean) => {
  const link = isCategoriesPage ? `${category.searchName}` : `categories/${category.searchName}`;

  return (
    <CategoryContainer key={category.name}>
      <Link href={link} passHref legacyBehavior>
        <StyledLink>
          <GradientDiv/>
          <CategoryImg image={category.image} alt={category.name} asset={category.asset} />
        </StyledLink>
      </Link>

      <LinkContainer>
        <Link href={link} passHref legacyBehavior>
          <StyledLink>
            <CategoryName>{category.name}</CategoryName>
          </StyledLink>
        </Link>
      </LinkContainer>
    </CategoryContainer>
  );
};

const createDesktopResult = (categories: CategoryConfiguration[], isCategoriesPage: boolean) => (
  <DesktopContainer>
    {categories.map((category: CategoryConfiguration, index: number) => {
      const categoryContent = createCategoryContent(category, isCategoriesPage);

      if (index % 2 === 0) return <NormalColumn key={category.name}>{categoryContent}</NormalColumn>;
      return <LoweredColumn key={category.name}>{categoryContent}</LoweredColumn>;
    })}
  </DesktopContainer>
);

const createMobileResult = (categories: CategoryConfiguration[], isCategoriesPage: boolean) => {
  const normalColumnItems = categories;
  return (
      <NormalColumn key="normal-column">
        {normalColumnItems.map((x) => createCategoryContent(x, isCategoriesPage))}
      </NormalColumn>
  )
};

const CategoriesContainer = ({ categories }: { categories: CategoryConfiguration[] }) => {
  const [isCategoriesPage, setIsCategoriesPage] = useState(false);

  useEffect(() => {
    setIsCategoriesPage(window.location.href.includes('categories'));
  }, []);
  return (
    <>
      {createDesktopResult(categories, isCategoriesPage)}
      {createMobileResult(categories, isCategoriesPage)}
    </>
  );
};

export default CategoriesContainer;
