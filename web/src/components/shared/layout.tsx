import '../../config/global-styled-components'

import {FunctionComponent, ReactNode, useEffect, useState} from 'react';

import { CategoryConfiguration } from '../../model/category-configuration';
import Footer from './footer/footer';
import Head from 'next/head';
import NavBar from './navbar/navbar';
import { NextSeo } from 'next-seo';
import SEO from '../../../next-seo.config';
import { colors } from '../../config/global-styles';
import {log} from 'console';
import styled from 'styled-components';

const Main = styled.main`

  background-color: ${(props: { isPage: Boolean}) =>props.isPage ? 'white' : 'black'};
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
  const [isPage, setIsPage] = useState(false);

  useEffect(() => {
    const url = window.location.href
    const containsCategories = url.includes('categories');
    const containsProducts = url.includes('products');
    const containsAbout = url.includes('about');
    const isPageWhite = containsCategories || containsProducts || containsAbout;

    setIsPage(isPageWhite);
  }, []);
  
  return (
    <Main isPage={isPage}>
      <NextSeo title={SEO.title} description={SEO.description} openGraph={SEO.openGraph} twitter={SEO.twitter} />
      <Head>
        <title>Soy Sustrato</title>
        <link rel="icon" href="/soysustratoicon.ico" />
        </Head>
      <NavBar isPage={isPage} categories={props.categories} />
      {props.children}
      <Footer />
    </Main>
  );
};

export default Layout;
