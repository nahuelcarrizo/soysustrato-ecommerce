import { LinksSmall, StyledH6Title } from '../../config/global-styled-components';
import React, { useContext, useEffect, useState } from 'react';

import { ActionTypes } from '../../model/action-types';
import { colors } from '../../config/global-styles';
import {css} from 'styled-components';
import { device } from '../../config/device';
import { store } from '../../context/store';
import styled from 'styled-components';

const Container = styled.section`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media ${device.large} {
    margin-right: 0.25rem;
    margin-left: auto;
    :hover {
      cursor: pointer;
    }
  }
`;

const Bag = styled.div`
  ${props =>
    props.isWhite ? "background-image: url('/assets/Bag-white.svg')" : "background-image: url('/assets/Bag.svg')"
    };
  width: 14px;
  height: 17px;
  @media ${device.large} {
    margin-top: 0.3rem;
  }
`;


const Ellipse = styled.div<{ quantity: number }>`
  top: 7px;
  left: 6px;
  background-color: ${colors.primary.dark};
  width: ${(props) => `${Math.ceil(props.quantity / 10) * 16}px`};
  height: ${(props) => `${Math.ceil(props.quantity / 10) * 16}px`};
  border-radius: 50%;
  position: relative;
  display: flex;
  max-width: 48px;
  max-height: 48px;
`;

const EllipseText = styled(StyledH6Title)`
  color: ${colors.ui.whiteBackground};
  margin: auto;
`;

const Links = styled(LinksSmall)`
  display: none;
  margin-top: 0.5rem;
  margin-right: 1.5rem;
  text-decoration: none;
  transition: ease-out 200ms;
  @media ${device.large} {
    display: block;
  }

  :hover {
    color: ${colors.primary.dark};
  }
`;

const CartButton = ({ clickHandler, isAtTop}) => {
  const { state, dispatch } = useContext(store);
  const [isWhite, setWhite] = useState(false)


  useEffect(() => {
    if (state?.openCart) {
      clickHandler();
      dispatch({ type: ActionTypes.CartOpened, payload: {} });
    }
  }, [state?.openCart, clickHandler, dispatch]);

  useEffect(() => {
    if (isAtTop) {
      setWhite(true)
    } else {
      setWhite(false)
    }
  }, [isAtTop]);


 return (
    <Container onClick={clickHandler}>
      <Links>carrito</Links>

      <Bag isWhite={isWhite}>
        {state && state.cart && state.cart.length ? (
          <Ellipse quantity={state.cart.length}>
            <EllipseText>{state.cart.length}</EllipseText>
          </Ellipse>
        ) : (
          ''
        )}
      </Bag>
    </Container>
  );
};

export default CartButton;
