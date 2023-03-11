import { BodyCopyRegularSmall, StyledH3 } from '../../config/global-styled-components';
import { device, reusablePlaceholder } from '../../config/device';

import LazyLoadImage from '../shared/image-types/lazy-image';
import Link from 'next/link'
import React from 'react';
import { colors } from '../../config/global-styles';
import styled from 'styled-components';

const BackgroundContainer = styled.section`
  background-color: ${colors.ui.grey5percent};
`;

const AboutContainer = styled.section`
  padding-bottom: 5rem;
  @media ${device.large} {
    margin: auto;
    max-width: 1600px;
    padding: 8rem 9rem 6.4rem 9rem;
  }
`;

const Image = styled(LazyLoadImage)`
  width: 100%;
  @media ${device.large} {
    object-fit: cover;
    max-width: 491px;
  }
`;

const MobileAboutTitle = styled(StyledH3)`
  padding-top: 4rem;
  @media ${device.large} {
    padding-top: 0;
    padding-bottom: 3rem;
  }
`;

const ContentContainer = styled.article`
  display: flex;
  flex-direction: column;

  @media ${device.large} {
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 1.5rem;
  margin-left: 1.5rem;

  @media ${device.large} {
    max-width: 40%;
    margin: auto;
  }
`;

const AboutDescription = styled(BodyCopyRegularSmall)`
  text-align: center;
  padding-bottom: 4rem;
  display: none;
  @media ${device.large} {
    display: block;
  }
`;

const AboutMobile = styled(BodyCopyRegularSmall)`
  text-align: center;
  padding-bottom: 2rem;
  padding-top: 2rem;
  display: block;
  @media ${device.large} {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  font-family: 'Oswald'
  `;
const About = () => {
  return (
    <BackgroundContainer>
      <AboutContainer>
        <ContentContainer>
{/*           <Image alt="feed-image" key="soysustrato" src="/assets/Maruja-About.jpg" placeholderSrc={reusablePlaceholder} /> */}
          <TextContainer>
            <MobileAboutTitle>Sobre Soy Sustrato</MobileAboutTitle>
            <AboutMobile>
            LOS INSUMOS QUE OFRECEMOS SON<br /> 
            <strong>SUSTENTABLES + BIODEGRADABLES + COMPOSTABLES.</strong>
            <br />
            <br />
            <StyledLink href='https://cdn.me-qr.com/pdf/9878822.pdf' legacyBehavior>
              Conocenos haciendo click aca
            </StyledLink>
            
            </AboutMobile>
          </TextContainer>
        </ContentContainer>
      </AboutContainer>
    </BackgroundContainer>
  );
};

export default About;
