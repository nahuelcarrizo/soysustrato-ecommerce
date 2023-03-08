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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Gluten:wght@200;400;700&family=Poppins:wght@500;800&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=DynaPuff&family=Gluten:wght@200;400;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@900&display=swap" rel="stylesheet"/>
      </Head>
      <NavBar categories={props.categories} />
      {props.children}
      <Footer />
    </Main>
  );
};

export default Layout;
