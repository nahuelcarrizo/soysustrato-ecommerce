import React, { useContext } from 'react';

import CartEmpty from './cart-empty';
import CartList from './cart-list';
import Faq from './faq';
import PaymentDescription from './payment-description';
import { device } from '../../config/device';
import { store } from '../../context/store';
import styled from 'styled-components';

const CartProductContainer = styled.div`
  margin: 0 1.5rem 0 1.5rem;

  @media ${device.large} {
    margin: 0 2.5rem 0 2.5rem;
  }
`;

const FaqWrapper = styled.div`
  text-align: left;
  @media ${device.large} {
    display: none;
  }
`;

const CartContainer = styled.section`
  width: 100%;
`;

const Cart = () => {
  const { state } = useContext(store);
  const cart = state ? state.cart : [];

  return (
    <CartContainer>
      <CartProductContainer>
        <CartEmpty cart={cart} />
        <CartList cart={cart} />
        {cart.length > 0 && <PaymentDescription />}
      </CartProductContainer>
      {cart.length > 0 && (
        <FaqWrapper>
          <Faq />
        </FaqWrapper>
      )}
    </CartContainer>
  );
};

export default Cart;
