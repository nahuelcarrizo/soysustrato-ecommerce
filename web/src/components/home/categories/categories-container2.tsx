import React, { useEffect, useState } from 'react';

import { CategoryConfiguration } from '../../../model/category-configuration';
import Link from 'next/link';
import RemoteFixedImage from '../../shared/image-types/remote-fixed-size-image';
import { StyledH4 } from '../../../config/global-styled-components';
import { colors } from '../../../config/global-styles';
import { device } from '../../../config/device';
import styled from 'styled-components';

const NormalColumn = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  overflow: hidden;
  height: 250.52vw;
  position: relative;
`;


const CategoryImg = styled(RemoteFixedImage)`
  border-radius: 2px;
  max-width: 100%;
  object-fit: cover;
  min-height: 100%;
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
`;

const LinkImg = styled.img`
  flex-shrink: 0;
  max-width: 100%;
  max-height: 12px;
`;

const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  cursor: pointer;
  overflow: hidden;
  justify-content: flex-end;
  flex-direction: column;
  flex: 1;
/*   flex: ${({ isExpanded }) => isExpanded ? 4 : 1};  */
  cursor: pointer;
  transition: all .3s ease-out;
  min-height: 110px;
  /* min-height: ${({ isExpanded }) => isExpanded ? '151px' : '110px'}; */
  max-height: 180px;
  transition: min-height .3s ease-out;
  &:hover {
    transform: scale(${({ isExpanded }) => isExpanded ? 1.05 : 1});
    flex: 10;
    min-height: 151px : '110px'};
  }
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



const createCategoryContent = (category: CategoryConfiguration, index: number) => {
/*   const link = isCategoriesPage ? `${category.searchName}` : `categories/${category.searchName}`; */

  const [isEventKey, setEventKey] = useState(0)
  return (
    <CategoryContainer key={category.name} onclick={setEventKey(0)} style={{(isEventKey === 0) ? 'height: 150px !important;' : 'height: 100px !important;'}}>
{/*       <Link href={link} passHref> */}
        <StyledLink>
          <CategoryImg image={category.image} alt={category.name} asset={category.asset} />
        </StyledLink>
{/*       </Link> */}

      <LinkContainer>
{/*         <Link href={link} passHref> */}
          <StyledLink>
            <CategoryName>{category.name}</CategoryName>
          </StyledLink>
{/*         </Link> */}

        <LinkImg src="/assets/Arrow.svg" alt="arrow" />
      </LinkContainer>
    </CategoryContainer>
  );
};


const createMobileResult = (categories: CategoryConfiguration[], isCategoriesPage: boolean) => () => {
  const normalColumnItems = categories.slice(0, categories.length / 2);
  const loweredColumnItems = categories.slice(categories.length / 2);
  return (
    <MobileContainer>
      <NormalColumn key="normal-column">
        {normalColumnItems.map((x, index) => createCategoryContent(x, index))}
      </NormalColumn>
    </MobileContainer>
  );
};

const CategoriesContainer = ({ categories }: { categories: CategoryConfiguration[] }) => {
  const [isCategoriesPage, setIsCategoriesPage] = useState(false);

  useEffect(() => {
    setIsCategoriesPage(window.location.href.includes('categories'));
  }, []);
  return (
    <div>
      {createMobileResult(categories, isCategoriesPage)()}
    </div>
  );
};

export default CategoriesContainer;
