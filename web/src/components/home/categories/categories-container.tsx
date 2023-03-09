import React, { useEffect, useState } from 'react';

import { CategoryConfiguration } from '../../../model/category-configuration';
import RemoteFixedImage from '../../shared/image-types/remote-fixed-size-image';
import { StyledH4 } from '../../../config/global-styled-components';
import { colors } from '../../../config/global-styles';
import styled from 'styled-components';

const NormalColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100vw;
  overflow: hidden;
  height: 200.52vw;
  position: relative;
`;


const CategoryImg = styled(RemoteFixedImage)`
  width: 100%;
  object-fit: contain;
  min-height: 100%;
  transform: ${props =>
  (props.index === 1) ? 'translate(0, 40px) scale(1.4)' : 'scale(1.4)' };
  translateY
`;

const LinkContainer = styled.div`
  position: absolute;
  bottom: 0;
  left:0;
  right: 0;
  justify-content: space-between;
  align-items: center;
  color: 

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
  flex-direction: row;
  flex: 1;
  position: relative;
  cursor: pointer;
  transition: all .3s ease-out;
  min-height: 100px;
  &:hover {
    flex: 2.4 !important;
  };
`;

const StyledGradientDiv = styled.div`
position: absolute;
top:0;  
height: 100%;
  width: 100%;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background:
    ${props => 
    (props.index === 1)? 'linear-gradient(1deg,rgba(0,0,0,0.3) -9.66%,rgba(0,0,0,0.32) 20.53%,rgba(0,0,0,0.1) 68.72%)' : 'linear-gradient(17.89deg,rgba(0,0,0,0.3) -9.66%,rgba(0,0,0,0.26981) 20.53%,rgba(0,0,0,0) 68.72%)'};

`;

const StyledLink = styled.a`
  text-decoration: none;
  overflow: hidden;
  height: 170px;
  width: 100%;
  padding: 0 2rem;
  text-align: left;
`;

const CategoryName = styled(StyledH4)`
  color: ${colors.primary.white};
  font-size: 1.5rem !important;
  font
  opacity: 1;
  transition: opacity .4s ease-in;
  transition-delay: .2s;
  font-family: 'Tilt Warp';

`;

const GradientDiv = (props) => {
  return (
    <StyledGradientDiv index={props.index}>
    {props.children}
    </StyledGradientDiv>
  )
} 

const createCategoryContent = (category: CategoryConfiguration, index) => {

  return (
    <CategoryContainer key={category.name} index={index}>
        <GradientDiv index={index}>
          <CategoryImg image={category.image} alt={category.name} asset={category.asset} index={index} />
        </GradientDiv>
      <LinkContainer>
          <StyledLink>
            <CategoryName>{category.name}</CategoryName>
          </StyledLink>
      </LinkContainer>
    </CategoryContainer>
  );
};


const createMobileResult = (categories: CategoryConfiguration[]) => () => {


  return (
      <NormalColumn key="normal-column">
        {categories.map((x, index) => createCategoryContent(x, index))}
      </NormalColumn>
  );
};

const CategoriesContainer = ({ categories }: { categories: CategoryConfiguration[] }) => {
  const [isCategoriesPage, setIsCategoriesPage] = useState(false);

  useEffect(() => {
    setIsCategoriesPage(window.location.href.includes('categories'));
  }, []);
  return (<>
      {createMobileResult(categories)()}
      </>)
};

export default CategoriesContainer;
