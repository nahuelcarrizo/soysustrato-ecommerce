import PropertiesCarousel from './properties-carousel';
import { PropertiesConfiguration } from '../../../model/properties-configuration';
import React from 'react';
import { StyledH3 } from '../../../config/global-styled-components';
import { device } from '../../../config/device';
import styled from 'styled-components';

const BackgroundContainer = styled.section`

  margin:0 auto;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  width: 100%;
  margin-top: 10rem;
  background-color: white;
  flex-direction: row;
  @media ${device.small} {
    margin-top: 5rem;
  }

  @media ${device.large} {
    padding: 0 0 4rem 0;
  }
`;

const PropertiesContainer = styled.article`
  margin: 0;
  width: 100%;
  padding-bottom: 4rem;
  height: 630px;
  @media ${device.large} {
    padding-left: 5rem;
    padding-bottom: 0;
  }
`;

const PropertiesTitle = styled(StyledH3)`
  width: 150px;
  margin: 0 auto 2.7rem auto;
  @media ${device.large} {
    margin: 0 auto 6rem auto;
    width: 100%;
    padding-left: 3vw;
    text-align: left;
  }
`;

const StyledPropertiesCarousel = styled(PropertiesCarousel)``;

const Properties = ({ properties }: { properties: Array<PropertiesConfiguration> }) => {
  return (
    <BackgroundContainer> {/* Section */}
      <PropertiesContainer> {/* article */}
        <PropertiesTitle>Properties del mes</PropertiesTitle>
        <StyledPropertiesCarousel properties={properties} />
      </PropertiesContainer>
    </BackgroundContainer>
  );
};

export default Properties;
