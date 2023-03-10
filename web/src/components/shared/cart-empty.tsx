import { LinksLarge, StyledH3 } from '../../config/global-styled-components';

import { CartProduct as CP } from '../../model/cart-product';
import Link from 'next/link';
import React from 'react';
import { colors } from '../../config/global-styles';
import styled from 'styled-components';

const EmptyContainer = styled.div<{ cart: CP[] }>`
  ${(props) => (props.cart.length ? 'display: none;' : '')}
  margin: 4.5rem 0 4.5rem 0;
  text-align: center;
`;

const EmptyCartTitle = styled(StyledH3)`
  margin-bottom: 4rem;
`;

const Line = styled.div`
  width: 8rem;
  border-bottom: 1px solid ${colors.ui.darkSurface};
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.5rem;
  margin-bottom: 8rem;
`;

const LinkPointer = styled(LinksLarge)`
  transition: ease-out 200ms;
  :hover {
    cursor: pointer;
    color: ${colors.primary.dark};
  }
`;
const CartEmpty = ({ cart }: { cart: CP[] }) => {
  return (
    <EmptyContainer cart={cart}>
      <EmptyCartTitle>
        Tu carrito
        <br /> está vacío.
      </EmptyCartTitle>
      <Link href="/categories/productos" legacyBehavior>
        <LinkPointer>DESCUBRIR PRODUCTOS</LinkPointer>
      </Link>
      <Line />
    </EmptyContainer>
  );
};

export default CartEmpty;
