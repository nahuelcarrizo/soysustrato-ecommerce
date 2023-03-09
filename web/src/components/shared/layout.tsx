import '../../config/global-styled-components'

import React, { FunctionComponent, ReactNode } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { CategoryConfiguration } from '../../model/category-configuration';
import Footer from './footer/footer';
import Head from 'next/head';
import NavBar from './navbar/navbar';
import { NextSeo } from 'next-seo';
import SEO from '../../../next-seo.config';
import { colors } from '../../config/global-styles';

const Main = styled.main`
  background-color: ${colors.primary.dark};
    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
 
`;

type LayoutProps = {
  categories: CategoryConfiguration[];
  children: ReactNode;
};

const Layout: FunctionComponent<LayoutProps> = (props) => {

  return (
    <Main>
      <NextSeo title={SEO.title} description={SEO.description} openGraph={SEO.openGraph} twitter={SEO.twitter} />
      <Head>
        <title>Soy Sustrato</title>
        <link rel="icon" href="/soysustratoicon.ico" l />
        </Head>
      <NavBar categories={props.categories} />
      {props.children}
      <Footer />
    </Main>
  );
};

export default Layout;
