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
  position: absolute;
  overflow: hidden;
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

const StyledLink = styled.div`
  overflow: hidden;
  height: 100%; 
  position: relative;

`;

const CategoryName = styled(StyledH4)`
  color: ${colors.primary.white} !important;
  font-size: 1.7rem !important;
  :hover {
    color: ${colors.primary.dark};
  }
`;

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 150vh;
`;

const AccordionItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: flex 0.3s ease;
  overflow: hidden;
`;

const AccordionHeader = styled.div`
  display: flex;
`;

const AccordionImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 10px;
`;

const AccordionTitle = styled.h3`
  margin: 0;
`;

const CategoriesContainer = ({ categories }: { categories: CategoryConfiguration[] }) => {

  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <AccordionContainer>
      <AccordionItem
        index={0}
        activeIndex={activeIndex}
        handleClick={handleAccordionClick}
        title="Elemento 1"
        imageUrl="https://via.placeholder.com/150"
      >
        <p>Contenido del elemento 1</p>
      </AccordionItem>
      <AccordionItem
        index={1}
        activeIndex={activeIndex}
        handleClick={handleAccordionClick}
        title="Elemento 2"
        imageUrl="https://via.placeholder.com/150"
      >
        <p>Contenido del elemento 2</p>
      </AccordionItem>
      <AccordionItem
        index={2}
        activeIndex={activeIndex}
        handleClick={handleAccordionClick}
        title="Elemento 3"
        imageUrl="https://via.placeholder.com/150"
      >
        <p>Contenido del elemento 3</p>
      </AccordionItem>
      <AccordionItem
        index={3}
        activeIndex={activeIndex}
        handleClick={handleAccordionClick}
        title="Elemento 4"
        imageUrl="https://via.placeholder.com/150"
      >
        <p>Contenido del elemento 4</p>
      </AccordionItem>
    </AccordionContainer>
  );
};

const AccordionItem = ({ index, activeIndex, handleClick, title, imageUrl, children }) => {
  const isActive = index === activeIndex;
  const flexSize = isActive ? 2.4 : 1;

  return (
    <AccordionItemWrapper style={{ flex: flexSize }}>
      <AccordionHeader onClick={() => handleClick(index)}>
        <AccordionImage src={imageUrl} alt={title} />
        <AccordionTitle>{title}</AccordionTitle>
      </AccordionHeader>
      {isActive && <AccordionContent>{children}</AccordionContent>}
    </AccordionItemWrapper>
  );
};

export default Accordion;

const AccordionItem = ({ index, activeIndex, handleClick, title, imageUrl, children }) => {
  const isActive = index === activeIndex;
  const flexSize = isActive ? 2.4 : 1;

  return (
    <AccordionItemWrapper style={{ flex: flexSize }}>
      <AccordionHeader onClick={() => handleClick(index)}>
        <AccordionImage src={imageUrl} alt={title} />
        <AccordionTitle>{title}</AccordionTitle>
      </AccordionHeader>
      {isActive && <AccordionContent>{children}</AccordionContent>}
    </AccordionItemWrapper>
  );
};

 /* const [expandedDiv, setExpandedDiv] = useState(0);

  const handleDivClick = (index) => {
    setExpandedDiv(index);
  };

  console.log(expandedDiv)
  return (
      <NormalColumn key="normal-column">
        <CategoryContainer  key={categories[0].name} style={{top: '0'}} isExpanded={expandedDiv === 0} onClick={()=>handleDivClick(0)}>
              <CategoryImg image={categories[0].image} alt={categories[0].name} asset={categories[0].asset} />
        </CategoryContainer>

        <CategoryContainer  key={categories[1].name} style={{top: '110px'}} isExpanded={expandedDiv === 1} onClick={()=>handleDivClick(1)} >
              <CategoryImg image={categories[1].image} alt={categories[1].name} asset={categories[1].asset} />
        </CategoryContainer>
        <CategoryContainer  key={categories[2].name} style={{top: '220px'}} isExpanded={expandedDiv === 2} onClick={()=>handleDivClick(2)}>
              <CategoryImg image={categories[2].image} alt={categories[2].name} asset={categories[2].asset} />
        </CategoryContainer>
      </NormalColumn>  );*/

};

export default CategoriesContainer;
