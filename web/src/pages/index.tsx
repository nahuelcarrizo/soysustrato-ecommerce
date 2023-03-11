import About from '../components/home/about';
import { CategoryConfiguration } from '../model/category-configuration';
import Faq from '../components/shared/faq';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Hero from '../components/home/hero';
import { HeroConfiguration } from '../model/hero-configuration';
import Layout from '../components/shared/layout';
import ProductCategories from '../components/home/categories/product-categories';
import { PropertiesConfiguration } from '../model/properties-configuration';
import React from 'react';
import ShippingInfo from '../components/home/shipping-info';
import UserReviews from '../components/home/user-reviews';
import { UserReviewsConfiguration } from '../model/user-reviews-configuration';
import { sanity } from '../../lib/sanity';

const Home = ({
  hero,
  categories,
  userReviews,
  properties
}: {
  hero: HeroConfiguration;
  categories: Array<CategoryConfiguration>;
  properties: Array<PropertiesConfiguration>;
  userReviews: UserReviewsConfiguration;
}) => {


  return (
    <Layout categories={categories}>
      <FloatingWhatsApp phoneNumber='+5492975046070' accountName='Soy Sustrato' avatar='/assets/logo-header.jpg' allowClickAway chatMessage='Hola! Como podemos ayudarte? 🤝'/>
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
        description,
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
      properties[]->{
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
  
/*   const sanityProducts = await sanity.fetch(
    `*[_type == "properties"]{
      ...,
      "images": image[]{
        "url": asset->url
      },
      }
    }
    `
  ); */
  return { 
    props: {
       ...sanityResult,
   },
};
}
export default Home;
