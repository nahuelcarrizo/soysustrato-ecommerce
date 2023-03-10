import { CartProduct as CP } from '../../model/cart-product';
import PurchaseSummary from './cart-purchase-summary';
import React from 'react';
import SingleItem from './cart-single-item';
import styled from 'styled-components';

const CartListContainer = styled.div<{ cart: CP[] }>`
  ${(props) => (props.cart?.length ? '' : 'display: none;')}
  margin: 2rem 0 0 0;
  text-align: center;
`;

const CartList = ({ cart }: { cart: CP[] }) => {
  return (
    <CartListContainer cart={cart}>
      {cart &&
        cart.map((product, index) => {
          return <SingleItem key={index} product={product} />;
        })}
      <PurchaseSummary cart={cart} />
    </CartListContainer>
  );
};

export default CartList;
