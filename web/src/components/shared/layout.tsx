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

  background-color: ${(props: { isCategoriesOrProducts: Boolean}) =>props.isCategoriesOrProducts ? 'white' : 'black'};
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
  const [isCategoriesOrProducts, setIsCategoriesOrProducts] = useState(false);
  console.log(isCategoriesOrProducts)
  useEffect(() => {
    const url = window.location.href
    const containsCategories = url.includes('categories');
    const containsProducts = url.includes('products');
    const isCategoriesOrProducts = containsCategories || containsProducts;

    setIsCategoriesOrProducts(isCategoriesOrProducts);
  }, []);
  
  return (
    <Main isCategoriesOrProducts={isCategoriesOrProducts}>
      <NextSeo title={SEO.title} description={SEO.description} openGraph={SEO.openGraph} twitter={SEO.twitter} />
      <Head>
        <title>Soy Sustrato</title>
        <link rel="icon" href="/soysustratoicon.ico" />
        </Head>
      <NavBar categories={props.categories} />
      {props.children}
      <Footer />
    </Main>
  );
};

export default Layout;
