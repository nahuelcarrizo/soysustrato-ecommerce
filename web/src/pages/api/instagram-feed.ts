import { NextApiRequest, NextApiResponse } from "next";
import { replyError, replyOk } from "../../lamda-services/http-helpers";

import { fold } from "fp-ts/lib/TaskEither";
import { getInstagramFeed } from "../../lamda-services/instagram.service";

/* export default async (_: NextApiRequest, res: NextApiResponse) =>
  fold(replyError(res), replyOk<string[]>(res))(await getInstagramFeed())(); */
