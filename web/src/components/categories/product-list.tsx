import { CaptionLarge, StyledH3Title } from '../../config/global-styled-components';
import React, { useState } from 'react';

import { Order } from '../../model/filters/order';
import { Product } from '../../model/product';
import ProductFilterDesktop from './product-filter-desktop';
import ProductListItem from './product-list-item';
import { Tags } from '../../model/filters/tags';
import { colors } from '../../config/global-styles';
import { device } from '../../config/device';
import styled from 'styled-components';

const CategoryHeader = styled(StyledH3Title)`
  text-align: center;
  padding: 4rem 4rem 1rem 4rem;
  background-color: ${colors.ui.grey5percent};
  font-family: 'Oswald';
  font-weight: 600;
`;

const HeaderSeparation = styled.div`
  height: 4px;
`;

const ProductListContainerDesktop = styled.div`
  display: none;
  padding: 0 3rem 4rem 3rem;
  max-width: 1600px;
  margin: auto;

  @media ${device.large} {
    display: block;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

const ProductListContainer = styled.div`
  display: block;
  padding-bottom: 4rem;

  @media ${device.large} {
    display: none;
  }
`;

const TotalCount = styled(CaptionLarge)`
  text-align: center;
  padding-top: 2rem;
  font-family: 'Oswald'
`;

const ProductList = ({ categoryName, products, productsWithSize }: { categoryName: string; products: Product[], productsWithSize: Product[] }) => {
  const [sort, setSort] = useState(Order.DESC);
  const [filter, setFilter] = useState(Tags.All);

  const getSortFunction = () => {
    if (sort === Order.ASC) return (a: Product, b: Product) => a.price - b.price;
    return (a: Product, b: Product) => b.price - a.price;
  };

  const getFilterFunction = () => {
    if (filter === Tags.All) return (x: Product) => x;
    return (x: Product) => x.tag === filter;
  };

  const onSortChange = (nextSort: Order) => {
    setSort(nextSort);
  };

  const onFilterChange = (tag: Tags) => {
    setFilter(tag);
  };

  const count = products.filter(getFilterFunction()).length;


  return (
    <div>
      <CategoryHeader>{categoryName}</CategoryHeader>
      <HeaderSeparation />
      <ProductFilterDesktop filterProducts={onFilterChange} orderProducts={onSortChange} />
      {count > 0 && (
        <TotalCount>
          Tenemos <strong>{count}</strong> productos para vos
        </TotalCount>
      )}
      {count === 0 && <TotalCount>Todavía no tenemos productos en esta categoría, volvé pronto</TotalCount>}

      <ProductListContainer>
        {products
          .filter(getFilterFunction())
          .sort(getSortFunction())
          .map((product: Product) => (
            <ProductListItem key={product.name} product={product} />
          ))}
      </ProductListContainer>
      <ProductListContainerDesktop>
        {products
          .filter(getFilterFunction())
          .sort(getSortFunction())
          .map((product: Product) => (
            <ProductListItem key={product.name} product={product} />
          ))}
      </ProductListContainerDesktop>
    </div>
  );
};

export default ProductList;
