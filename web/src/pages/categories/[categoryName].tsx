import { CategoryConfiguration } from '../../model/category-configuration';
import Faq from '../../components/shared/faq';
import Layout from '../../components/shared/layout';
import { NextPageContext } from 'next';
import { Product } from '../../model/product';
import ProductList from '../../components/categories/product-list';
import React from 'react';
import { sanity } from '../../../lib/sanity';
import { useRouter } from 'next/router';

const toLowerCase = (text: string | string[]) => (text as string).toLowerCase();
const capitalize = (text: string | string[]) => (text as string).charAt(0).toUpperCase() + text.slice(1);

const CategoryDisplay = ({
  categories,
  products,
  categoryName,
}: {
  categories: CategoryConfiguration[];
  products: Product[];
  categoryName?: string;
}) => {
  const router = useRouter();
  const lowerCaseCategoryName = toLowerCase(router.query.categoryName);

  const formatedCategoryName = capitalize(lowerCaseCategoryName);
  return (
    <Layout categories={categories}>
      <ProductList categoryName={categoryName ?? formatedCategoryName} products={products} />
      <Faq isDarkBackgroundColor={true} />
    </Layout>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const { categoryName } = context.query;
  const lowerCaseCategoryName = (categoryName as string).toLowerCase();

  const extraQuery =
    lowerCaseCategoryName === 'productos' ? '' : `&& categories[0]->searchName == "${lowerCaseCategoryName}"`;

  const sanityCategories = await sanity.fetch(
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

  const sanityProduct = await sanity.fetch(
    `
    *[_type == "product" ${extraQuery}]{
      ...,
      "images": images[0]{
        "0": {
          "image": {...},
          "asset": { "url": asset->url, "metadata": asset->metadata }
        }
      }	
     }
  `
  );
  const sanityProducts = await sanity.fetch(
    `
    *[_type == "productWithSizes" ${extraQuery}]{
      ...,
      "images": images[0]{
        "0": {
          "image": {...},
          "asset": { "url": asset->url, "metadata": asset->metadata }
        }
      }	
     }
  `
  );

  return {
    props: {
      categories: sanityCategories.categories,
      products: sanityProduct,
      productsWithSize: sanityProducts,
      categoryName: sanityCategories.categories.find((x) => x.searchName === lowerCaseCategoryName)?.name ?? null,
    },
  };
};

export default CategoryDisplay;
