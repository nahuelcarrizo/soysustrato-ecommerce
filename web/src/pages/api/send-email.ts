import { NextApiRequest, NextApiResponse } from "next";

import { ErrorMessages } from "../../config/error-messages";
import { sendEmail } from "../../lamda-services/send-email.service";

const sendMail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST")
    return res.status(404).json({
      error: {
        code: "not_found",
        message: ErrorMessages.EndpointMethodIncorrect,
      },
    });

  const { name, email, content } = req.body;
  const result = await sendEmail({ name, email, content });
  return res.status(200).send(result);
};

export default sendMail;
np;
