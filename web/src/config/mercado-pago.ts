//llamada a ruta API desde el front.

import { CartProduct as CP } from '../model/cart-product';
import { PaymentRequest } from '../model/payment-request';
import Router from 'next/router';
import axios from 'axios';
import { getDefaultImage } from '../../lib/sanity';

const confirmPurchase = async (cart: CP[]) => {
  const paymentDataRequest = {
    items: cart.map((item) => {
      const imageUrl = getDefaultImage(item.image).url();
      return {
        id: item._id,
        size: item.size,
        name: item.name,
        description: item.description,
        quantity: item.quantity,
        price: item.price,
        pictureUrl: imageUrl,
      };
    }),
  } as PaymentRequest;
  const result = await axios.post('/api/create-payment', paymentDataRequest);
  const url = result.data.replace(/https?:/, '');
  return Router.push(url);
};

const exportedFunctions = {
  confirmPurchase,
};

export default exportedFunctions;
