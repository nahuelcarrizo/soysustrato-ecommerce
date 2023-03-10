import {
  SanityImageSource as SanityImageSourceAsset,
  getImageAsset,
} from "@sanity/asset-utils";

import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "@sanity/client";

export const sanity = new sanityClient({
  projectId: "13iwwz14",
  dataset: "production",
  useCdn: false,
  apiVersion: "2021-03-25",
});

export const sanityWriteClient = sanityClient({
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
