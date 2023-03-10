import { Product, ProductSizeChart } from '../../model/product';

import { CategoryConfiguration } from '../../model/category-configuration';
import Faq from '../../components/shared/faq';
import Layout from '../../components/shared/layout';
import { NextPageContext } from 'next';
import ProductItemDisplay from '../../components/product-item/product-item';
import React from 'react';
import UserReviews from '../../components/home/user-reviews';
import { UserReviewsConfiguration } from '../../model/user-reviews-configuration';
import { calculateProductStock } from '../../components/shared/utilities';
import { sanity } from '../../../lib/sanity';

const ProductItem = ({
  product,
  userReviews,
  categories,
}: {
  product: Product;
  userReviews: UserReviewsConfiguration;
  categories: Array<CategoryConfiguration>;
}) => {
  const hasStock = calculateProductStock(product) > 0;

  return (
    <Layout categories={categories}>
      <ProductItemDisplay product={product} hasStock={hasStock} />
      {userReviews !== null && hasStock && <UserReviews {...userReviews} />}
      <Faq />
    </Layout>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const { productId } = context.query;

  const productResult = await sanity.fetch(
    `
    *[_type == "product" && _id == "${productId}"][0]{
      ...,
      "images": images[]{
        "image": {
          ...,
        },
       "asset": { "url": asset->url, "metadata": asset->metadata }
      }	
     } 
  `
  );

  const homeSettingsResult = await sanity.fetch(
    `
    *[_type == "homeSettings"][0]{
      "categories": categories[]->{
        searchName,
        name,
        image,

      },
    }
    `
  );

  if (productResult.sizeChart) {
    productResult.sizeChart = productResult.sizeChart.filter((x: ProductSizeChart) => x.stock > 0);
  }

  return {
    props: {
      product: productResult,
      userReviews: productResult?.userReviews ?? null,
      categories: homeSettingsResult.categories,
    },
  };
};

export default ProductItem;
