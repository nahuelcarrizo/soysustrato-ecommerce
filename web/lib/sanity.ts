import {
  SanityImageSource as SanityImageSourceAsset,
  getImageAsset,
} from "@sanity/asset-utils";
import createClient, { ClientConfig } from "@sanity/client";

import imageUrlBuilder from "@sanity/image-url";

const config: ClientConfig = {
  projectId: "13iwwz14",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-03-25",
};
export const sanity = new createClient(config);

export const sanityWriteClient = createClient({
  projectId: "13iwwz14",
  dataset: "production",
  token: process.env.sanityAccessToken,
  useCdn: false,
});

export const builder = imageUrlBuilder(sanity);

export const getDefaultImage = (image: any) =>
  builder.image(image).auto("format");

export const getImagePlaceholder = (asset: SanityImageSourceAsset) =>
  asset ? getImageAsset(asset).metadata.lqip : "";

export const getImageMetadata = (asset: SanityImageSourceAsset) =>
  asset ? getImageAsset(asset).metadata : null;
