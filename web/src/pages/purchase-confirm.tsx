import React, { useContext, useEffect } from 'react';
import { StyledH3Title, Subtitle } from '../config/global-styled-components';

import { ActionTypes } from '../model/action-types';
import { CategoryConfiguration } from '../model/category-configuration';
import Layout from '../components/shared/layout';
import Link from 'next/link';
import SecondaryButton from '../components/shared/secondary-button';
import { colors } from '../config/global-styles';
import { device } from '../config/device';
import { sanity } from '../../lib/sanity';
import { store } from '../context/store';
import styled from 'styled-components';

const ConfirmPurchasePageContainer = styled.section`
  @media ${device.large} {
    text-align: center;
  }
`;

const ConfirmPurchasePageTitle = styled(StyledH3Title)`
  text-align: center;
  background: ${colors.ui.grey5percent};
  padding: 5rem 1.5rem 0 1.5rem;
`;

const ConfirmPurchasePageSubTitle = styled.article`
  background: ${colors.ui.grey5percent};
  padding: 3rem 1.5rem 3rem 1.5rem;
  text-align: center;

  @media ${device.large} {
    padding-bottom: 8rem;
  }
`;

const StyledSubTitle = styled(Subtitle)`
  color: ${colors.ui.darkSurface};
  max-width: 50%;
  margin: auto;
  margin-bottom: 3rem;
  text-transform: none;
  font-size: 16px;
  letter-spacing: 1px;

  @media ${device.small} {
    max-width: 100%;
  }
`;

const StyledContact = styled.span`
  text-decoration: underline;
  font-weight: bold;
  transition: ease-out 200ms;
  :hover {
    cursor: pointer;
    color: ${colors.primary.dark};
  }
`;

const ConfirmPurchasePage = ({ categories }: { categories: Array<CategoryConfiguration> }) => {
  const { dispatch } = useContext(store);
  useEffect(() => {
    dispatch({ type: ActionTypes.Empty });
  }, [dispatch]);

  return (
    <Layout categories={categories}>
      <ConfirmPurchasePageContainer>
        <ConfirmPurchasePageTitle>¡Gracias por tu compra!</ConfirmPurchasePageTitle>
        <ConfirmPurchasePageSubTitle>
          <StyledSubTitle>
            Vas a recibir información sobre tu compra por email. <br />
            <Link href="/contact" legacyBehavior>
              <StyledContact>Comunicate con nosotros</StyledContact>
            </Link>{' '}
            si tenés alguna duda.
          </StyledSubTitle>
          <SecondaryButton  />
        </ConfirmPurchasePageSubTitle>
      </ConfirmPurchasePageContainer>
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

export default ConfirmPurchasePage;
