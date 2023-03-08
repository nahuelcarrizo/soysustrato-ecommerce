import ReactPlayer from 'react-player'
import { listenerCount } from 'process';
import sanityClient from "@sanity/client";
import {useState} from 'react'

export const sanity = new sanityClient({
  projectId: process.env.NEXT_PUBLIC_sanityProjectID,
  dataset: process.env.NEXT_PUBLIC_sanityDataset,
  useCdn: false,
});

const RemoteResponsiveVideo = ({ videos, alt, className, onEnded }) => {


  const handleVideoEnded = () => {
      if (onEnded) {
        onEnded();
      }
  };


    
  return (
    <ReactPlayer
    alt={alt}
      className={className}
      url={videos[4].url}
      muted={true}
      playing={true}
      height="50%"
      width="100%"
      onEnded={handleVideoEnded}

          />
  );
};

export default RemoteResponsiveVideo;