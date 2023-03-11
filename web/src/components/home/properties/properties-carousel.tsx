import React, { CSSProperties, useState } from 'react';

import Carousel from 'react-multi-carousel';
import { PropertiesConfiguration } from '../../../model/properties-configuration';
import SliderArrow from '../../shared/slider/slider-arrow';
import SliderImage from '../../shared/slider/slider-image';
import { device } from '../../../config/device';
import styled from 'styled-components';

const PaddedImageContainer = styled.div<{ isLast: boolean }>`

  ${(props: { isLast: boolean }) => (props.isLast ? 'margin-right: 2rem' : '')};
`;

const CustomDots = ({ onClick, ...rest }: { onClick?: any; active?: boolean; index?: number }) => {
  const { active, index } = rest;

  const indicatorStyles: CSSProperties = {
    bottom: '-50px',
    background: '#E4C2BE',
    border: '1px solid #E4C2BE',
    boxSizing: 'border-box',
    width: 8,
    height: 8,
    display: 'inline-block',
    margin: '0 8px 1rem 0',
    borderRadius: 9999,
  };

  if (active) {
    return (
      <li
        style={{ ...indicatorStyles, width: '100%', bottom: '-50px' }}
        aria-label={`Selected: ${index} ${index + 1}`}
        title={`Selected: ${index} ${index + 1}`}
      />
    );
  }
  return (
    <li
      style={indicatorStyles}
      onClick={onClick}
      onKeyDown={onClick}
      value={index}
      key={index}
      role="button"
      tabIndex={0}
      title={`${index} ${index + 1}`}
      aria-label={`${index} ${index + 1}`}
    />
  );
};

const responsive = {
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 60,
  },
};

const CarouselContainer = styled.div`
  position: relative;

  @media ${device.large} {
    padding-bottom: 3rem;
  }
`;

const StyledCarousel = styled(Carousel)`

`;

const ContainerCSS = {
  display: 'flex'
}
const PropertiesCarousel = ({
  properties,
  className,
}: {
  properties: Array<PropertiesConfiguration>;
  className?: any;
}) => {
  const [isMoving, setIsMoving] = useState(false);

  return (
    <CarouselContainer>
      <StyledCarousel
      containerClass={ContainerCSS}
        className={className}
        responsive={responsive}
        showDots
        customDot={<CustomDots />}
        partialVisible
        renderDotsOutside
        beforeChange={() => setIsMoving(true)}
        afterChange={() => setIsMoving(false)}
        customRightArrow={<SliderArrow direction="right" />}
        customLeftArrow={<SliderArrow direction="left" />}
      >
        {properties.map((x, index) => {
          return (
            <PaddedImageContainer key={x.name} isLast={properties.length - 1 === index}>
              <SliderImage remoteImage={x} isMoving={isMoving} />
            </PaddedImageContainer>
          );
        })}
      </StyledCarousel>
    </CarouselContainer>
  );
};

export default PropertiesCarousel;
