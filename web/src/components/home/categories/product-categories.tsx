import CategoriesContainer from './categories-container';
import { CategoryConfiguration } from '../../../model/category-configuration';
import React from 'react';
import { device } from '../../../config/device';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 6rem;
  background-color: white;
  @media ${device.large} {
    padding: 0 6.75rem 0 6.75rem;
    margin-top: 158px;
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
