import About from '../components/home/about';
import { CategoryConfiguration } from '../model/category-configuration';
import Faq from '../components/shared/faq';
import Hero from '../components/home/hero';
import { HeroConfiguration } from '../model/hero-configuration';
import Layout from '../components/shared/layout';
import ProductCategories from '../components/home/categories/product-categories';
import React from 'react';
import Recommended from '../components/home/recommended/recommended';
import { RecommendedConfiguration } from '../model/recommended-configuration';
import ShippingInfo from '../components/home/shipping-info';
import UserReviews from '../components/home/user-reviews';
import { UserReviewsConfiguration } from '../model/user-reviews-configuration';
import { sanity } from '../../lib/sanity';

const Home = ({
  hero,
  categories,
  recommended,
  userReviews,
}: {
  hero: HeroConfiguration;
  categories: Array<CategoryConfiguration>;
  recommended: Array<RecommendedConfiguration>;
  userReviews: UserReviewsConfiguration;
}) => {


  return (
    <Layout categories={categories}>
      <Hero videos={undefined} images={undefined} {...hero} />
      <ProductCategories categories={categories} />
      <ShippingInfo />
      <UserReviews {...userReviews} />
      <Faq />
      <About />
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
        "images": image[]{
          "url": asset->url
       }
      },
      hero {
        ...,
        "images": image[]{
          "url": asset->url
        },
       "videos": video[]{
        "url": asset->url
        }
      },
      recommended[]->{
        ...,
        "image": images[0],
        "asset": images[0].asset-> {
           url,
           metadata 
        }
       },
       userReviews {
        ...,
        "asset": image.asset-> {
          url,
          metadata 
        }
      },
     }
  `
  );
/*   if (!sanityResult || !sanityResult.hero.f){
    console.log(sanityResult.hero)
    return {

      notFound: true, //Manejo de error: página no encontrada
    }; */
  //}
  return { props: { ...sanityResult } };
};

export default Home;
