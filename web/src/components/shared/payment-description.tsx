import { BodyCopyRegularSmall, StyledH6Title } from '../../config/global-styled-components';

import Accordion from './cart/accordion/accordion';
import React from 'react';
import styled from 'styled-components';

const PaddedH6Title = styled(StyledH6Title)`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const DeliveryInformationContainer = styled.div`
  margin-top: 1rem;
`;

const PaddedImage = styled.img`
  margin-top: 1rem;
`;

const PaymentDescription = () => {
  return (
    <DeliveryInformationContainer>
      <Accordion title="Información sobre el pago" index={0} initialHiddenStatus isBold={true}>
        <PaddedImage alt="mercadopago" src="/assets/MercadoPago.svg" />
        <PaddedH6Title>MERCADOPAGO</PaddedH6Title>
        <BodyCopyRegularSmall>
          Con Mercado Pago, tenés cuotas sin interés con tarjeta o efectivo en puntos de pago. ¡Y siempre es seguro!
          Además. no tiene costo adicional.
        </BodyCopyRegularSmall>
      </Accordion>
    </DeliveryInformationContainer>
  );
};

export default PaymentDescription;
