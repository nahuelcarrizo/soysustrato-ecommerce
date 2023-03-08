import { NextApiRequest, NextApiResponse } from "next";
import { replyError, replyOk } from "../../lamda-services/http-helpers";

import { configureMercadoPagoSDK } from "../../lamda-services/mercadopago.service";
import { createPaymentLink } from "../../lamda-services/create-payment.service";
import { fold } from "fp-ts/lib/TaskEither";

const createPayment: any = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  configureMercadoPagoSDK();

  await fold(
    replyError(res),
    replyOk<string>(res)
  )(createPaymentLink(req.body.items))();
};

export default createPayment;
