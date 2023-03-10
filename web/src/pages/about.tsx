import { BodyCopyRegularSmall, StyledH3Title, StyledH4Title } from '../config/global-styled-components';
import { device, reusablePlaceholder } from '../config/device';

import { CategoryConfiguration } from '../model/category-configuration';
import IconListItem from '../components/shared/icon-list-item';
import Layout from '../components/shared/layout';
import LazyLoadImage from '../components/shared/image-types/lazy-image';
import React from 'react';
import { colors } from '../config/global-styles';
import { sanity } from '../../lib/sanity';
import styled from 'styled-components';

const AboutPageContainer = styled.section``;

const CenteredContainer = styled.section`
  max-width: 1600;
  margin: auto;
  width: 100%;

  @media ${device.large} {
    width: 50%;
    padding-top: 2rem;
  }
`;

const AboutTextContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CategoryHeader = styled(StyledH3Title)`
  text-align: center;
  padding: 4rem 1.5rem 4rem 1.5rem;
  background-color: ${colors.ui.grey5percent};
`;

const Image = styled(LazyLoadImage)`
  width: 100%;
  @media ${device.large} {
    max-width: 50%;
    object-fit: cover;
  }
`;

const UpperText = styled(BodyCopyRegularSmall)`
  padding: 2rem 1.5rem 2.5rem 1.5rem;

  @media ${device.large} {
    padding: 3rem;
  }
`;

const LowerText = styled(BodyCopyRegularSmall)`
  padding: 2.5rem 1.5rem 3.5rem 1.5rem;

  @media ${device.large} {
    padding: 3rem;
  }
`;

const BuyMarujaContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  @media ${device.large} {
    margin: 0 3rem 3rem 3rem;
    padding: 3rem;
    background-color: ${colors.ui.grey5percent};
  }
`;

const ByMarujaTitle = styled(StyledH4Title)`
  text-align: center;
  @media ${device.small} {
    padding: 0 2rem 0 2rem;
  }
`;

const BuyMarujaBenefits = styled.article`
  padding: 3rem 0 0 0;

  @media ${device.small} {
    padding: 3rem 1.5rem 0 1.5rem;
  }
`;

const StyledIconListItem = styled(IconListItem)<{ removePadding: boolean }>`
  ${(props) => (props.removePadding ? '' : 'padding-bottom: 3rem')};
`;

const AboutPage = ({ categories }: { categories: Array<CategoryConfiguration> }) => {
  return (
    <Layout categories={categories}>
      <AboutPageContainer>
        <CategoryHeader>Sobre Soy Sustrato</CategoryHeader>
        <CenteredContainer>
          <AboutTextContainer>
            <UpperText>
              Soy Sustrato
            </UpperText>
            <Image alt="feed-image" key="soy sustrato" src="/assets/manifiesto-2.jpg" placeholderSrc={reusablePlaceholder} />
            <LowerText>
            Soy Sustrato
            </LowerText>
          </AboutTextContainer>
          <BuyMarujaContainer>
            <ByMarujaTitle>Comprar en Soy Sustrato significa...</ByMarujaTitle>
            <BuyMarujaBenefits>
              <StyledIconListItem
                removePadding={false}
                image="/assets/Contact.svg"
                text="Mercado Env??os a toda la Argentina"
                alt="beneficio"
                key={1}
              />

              <StyledIconListItem
                removePadding={false}
                image="/assets/Contact.svg"
                text="Comprar a industria nacional" 
                alt="beneficio"
                key={2}
              />

            </BuyMarujaBenefits>
          </BuyMarujaContainer>
        </CenteredContainer>
      </AboutPageContainer>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const sanityResult = await sanity.fetch(
    `
      *[_type == "homeSettings"][0]{
        "categories": categories[]->{
          searchName,
          name,
          image,
          "asset": image.asset-> {
            url,
            metadata 
         }
        },
       }
    `
  );
  return { props: { ...sanityResult } };
};

export default AboutPage;
