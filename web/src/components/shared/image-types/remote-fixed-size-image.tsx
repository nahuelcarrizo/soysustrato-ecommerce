import { getDefaultImage, getImageMetadata } from '../../../../lib/sanity';

import LazyLoadImage from './lazy-image';
import React from 'react';
import { RemoteImageProps } from './remote-image-props';

const remoteFixed = ({ className, asset, alt, image }: RemoteImageProps) => {
    const metadata = getImageMetadata(asset);

  if (getDefaultImage(image) === undefined) {
    console.log("indefinido")
  }
    
  return (<>
    {image ? ( 
    <LazyLoadImage
      className={className}
      alt={alt}
      src={getDefaultImage(image)?.url()}
      placeholderSrc={metadata?.lqip}
    />) : <h1>Sin Imagen</h1>}
  </>);
};

export default remoteFixed;