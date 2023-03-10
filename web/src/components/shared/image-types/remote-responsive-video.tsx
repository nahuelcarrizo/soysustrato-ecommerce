import ReactPlayer from 'react-player'
import sanityClient from "@sanity/client";

export const sanity = new sanityClient({
  projectId: '13iwwz14',
  dataset: 'production',
  useCdn: false,
});

const RemoteResponsiveVideo = (props: any) => {

  const {videos, alt, className, onEnded} = props

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