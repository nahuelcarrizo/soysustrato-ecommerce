import { getDefaultImage, getImageMetadata } from '../../../../lib/sanity';

import LazyLoadImage from './lazy-image';
import React from 'react';
import { RemoteImageProps } from './remote-image-props';

const remoteResponsiveImage = ({ className, image, alt, asset }: RemoteImageProps) => {
  const metadata = getImageMetadata(asset);
  return (
    <LazyLoadImage
      className={className}
      alt={alt}
      src={getDefaultImage(image) as unknown as string }
      placeholderSrc={metadata?.lqip}
      sizes=""
      srcSet={`
      ${getDefaultImage(image)?.width(600)} 600w,
      ${getDefaultImage(image)?.width(1000)} 1000w,
      ${getDefaultImage(image)} 2000w,
    `}
    />
  );
};

export default remoteResponsiveImage;