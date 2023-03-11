import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { SanityImageSource as SanityImageSourceAsset } from "@sanity/asset-utils";

export interface Product {
  _id: string;
  name: string;
  price: number;
  discountPrice: number;
  stock: number;
  sizeChart: ProductSizeChart[];
  description: string;
  material: string;
  images: {
    image: SanityImageSource;
    asset: SanityImageSourceAsset;
  }[];
  tag: string;
}

export interface ProductSizeChart {
  _key: string;
  size: string;
  stock: number;
}
