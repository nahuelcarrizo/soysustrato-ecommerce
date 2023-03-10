import { CategoryConfiguration } from '../../../model/category-configuration';
import React from 'react';
import RemoteFixedImage from '../../shared/image-types/remote-fixed-size-image';
import { StyledH4 } from '../../../config/global-styled-components';
import { colors } from '../../../config/global-styles';
import { log } from 'console';
import styled from 'styled-components';

const NormalColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100vw;
  overflow: hidden;
  height: 150.52vw;
  position: relative;
`;


const CategoryImg = styled(RemoteFixedImage)<{index: Number}>`
  width: 100%;
  object-fit: cover;
  min-height: 100%;
  transform: ${props => (props.index === 0) ? 'scale(1)' : 'scale(1.4)' }
  
`;

const LinkContainer = styled.div`
  position: absolute;
  bottom: 0;
  left:0;
  right: 0;
  justify-content: space-between;
  align-items: center;
  text-align: left;
`;
const CategoryDescription = styled.p`
  color: ${colors.primary.white};
  font-size: 1.1rem;
  font-family: 'Tilt Neon';
  opacity: 0;
  transition: all .4s ease-in;
  transition-delay:.2s;
  margin-left: 1.2rem;
  position: relative;
  line-height: 1.5rem;
  transform: translateY(calc(100% + 0.3125rem));
  max-width: calc(100% - 1.6875rem);
`;
const CategoryName = styled(StyledH4)`
  color: ${colors.primary.white};
  font-size: 1.5rem !important;
  opacity: 1;
  font-family: 'Baloo Chettan 2';
  font-weight: 700;
  margin-left: 1.2rem;
  line-height: 1.75rem;
`;


const StyledGradientDiv = styled.div<{index: Number}>`
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
    background: linear-gradient(10.89deg,rgba(0,0,0,0.8) -9.66%,rgba(0,0,0,0.5) 20.53%,rgba(0,0,0,0) 68.72%);
  }
`;


const StyledLink = styled.a<{index: Number}>`
  height: 100%;
  width: 100%;
  text-align: left;
  position: absolute;
  padding-bottom: 0.3rem;
  transition: all .4s ease-in-out;
  transition-delay: .2s;
  bottom: ${props=> props.index === 3 ? '1rem':'-2rem'};
  text-decoration: none !important!;
`;

const CategoryContainer = styled.div<{index: Number;}>`
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
    flex: 2 !important;
  };
 
  &:hover ${CategoryDescription} {
    opacity: 1;
    transform: translateY(0);
    transition-delay: .4s
  };
  &:hover ${StyledLink} {
    bottom: ${props=>
    props.index === 3 ? '100%' : '40%' };
    transition-delay:.4s
  };
`;

const GradientDiv = (props) => {
  return (
    <StyledGradientDiv index={props.index}>
    {props.children}
    </StyledGradientDiv>
  )
} 


const createCategoryContent = (category: CategoryConfiguration, index: Number) => {
  console.log(index)
  return (
    <CategoryContainer key={category.name} index={index}>
        <GradientDiv index={index}>
          <CategoryImg image={category.image} alt={category.name} asset={category.asset} index={index} />
        </GradientDiv>
      <LinkContainer>
          <StyledLink index={index}>
            <CategoryName>{category.name}</CategoryName>
          </StyledLink>
          <CategoryDescription >{category.description}</CategoryDescription>
      </LinkContainer>
    </CategoryContainer>
  );
};


// eslint-disable-next-line react/display-name
const createMobileResult = (categories: CategoryConfiguration[]) => () => {
  return (
    <NormalColumn key="normal-column">
    {categories.map((x, index) => createCategoryContent(x, index))}
    </NormalColumn>
    );
  };

function CategoriesContainer({ categories }: { categories: CategoryConfiguration[]; }) {
  return (<>
    {createMobileResult(categories)()}
  </>);
}

export default CategoriesContainer;
