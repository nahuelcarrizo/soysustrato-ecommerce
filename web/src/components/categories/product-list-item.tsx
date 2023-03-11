import { LabelLarge, LabelLargeBold } from '../../config/global-styled-components';

import Link from 'next/link';
import { Product } from '../../model/product';
import React from 'react';
import RemoteFixedSizeImage from '../shared/image-types/remote-fixed-size-image';
import { device } from '../../config/device';
import { displayCorrectBadge } from '../shared/utilities';
import styled from 'styled-components';

const ProductListItemContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem 2rem 1.5rem;
  flex: 1 0 21%;

  @media ${device.large} {
    max-width: 25%;
  }
`;

const ProductItemTextContainer = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0.5rem 0 0.5rem;
`;

const ProductItemImage = styled(RemoteFixedSizeImage)`
  border-radius: 2px;
  height: 360px;
  object-fit: cover;
  transition: all 0.5s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`;

const ProductItemName = styled(LabelLarge)``;

const ProductItemPrice = styled(LabelLargeBold)``;

const ProductItemImageContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const StyledLink = styled.a`
  text-decoration: none;
  overflow: hidden;
`;

const ProductListItem = ({ product }: { product: Product }) => {
  console.log(product)
  const link = `/products/${product._id}`;
  return (
    <ProductListItemContainer>
      <ProductItemImageContainer>
        {displayCorrectBadge(product)}
          <StyledLink>
            <ProductItemImage image={product.images[0].image} alt={product.name} asset={product.images[0].asset} />
          </StyledLink>
      </ProductItemImageContainer>
      <ProductItemTextContainer>
        {product.material ?? <ProductItemName>{product.material}</ProductItemName>}
        <ProductItemName>{product.description}</ProductItemName>
      </ProductItemTextContainer>
    </ProductListItemContainer>
  );
};

export default ProductListItem;
