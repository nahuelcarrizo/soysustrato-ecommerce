import CategoriesContainer from './categories-container';
import { CategoryConfiguration } from '../../../model/category-configuration';
import React from 'react';
import { StyledH2 } from '../../../config/global-styled-components';
import { device } from '../../../config/device';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 5rem;
  max-width: 100vw;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;

  @media ${device.large} {
    padding: 0 6.75rem 0 6.75rem;
    margin-top: 158px;
  }
`;

const ProductCategoriesTitle = styled(StyledH2)`
  font-style: normal;
  margin-bottom: 2.5rem;
  text-align: center;

  @media ${device.large} {
    display: none;
  }
`;

const ProductCategories = ({ categories }: { categories: CategoryConfiguration[] }) => {
  
  return (
    <Container>
      <CategoriesContainer categories={categories} />
    </Container>
  );
};

export default ProductCategories;
