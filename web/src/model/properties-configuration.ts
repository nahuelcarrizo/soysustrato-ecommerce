import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { SanityImageSource as SanityImageSourceAsset } from "@sanity/asset-utils";

export type PropertiesConfiguration = {
  _id: string;
  name: string;
  images: SanityImageSource;
  asset: SanityImageSourceAsset;
  index?: any;
};
