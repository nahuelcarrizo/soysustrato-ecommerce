import { AlignedCenterContainer, BodyCopyRegularSmall, StyledH1 } from '../../config/global-styled-components';
import React, {useEffect, useState} from 'react';
import { colors, fonts } from '../../config/global-styles';

import Button from '../shared/secondary-button';
import { HeroConfiguration } from '../../model/hero-configuration';
import Image from 'next/image'
import RemoteResponsiveImage from '../shared/image-types/remote-responsive-image';
import RemoteResponsiveVideo from '../shared/image-types/remote-responsive-video';
import { device } from '../../config/device';
import styled from 'styled-components';

const TextContainer = styled.div`
  margin: -7rem 1.5rem 1.5rem 1.5rem;
  text-align: left;
  padding: 1.5rem 1rem;
  border-radius: 7px;
  background-color: ${colors.secondary.keen};
  top: 6rem;
  z-index: 10;
  overflow: visible;
  position: relative;
  @media ${device.large} {
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 3rem;

  }
`;

const SubTitle = styled(BodyCopyRegularSmall)`
  margin-top: 0.4rem;
  opacity: 0.75;
  font-family: "Tilt Neon" !important;
  line-height: 19px;
  font-size: 13px;
  color: black !important;
  @media ${device.large} {
    margin-top: 2rem;
    margin-bottom: 3rem;
    width: 50%;
  }
`;

const Vid = styled(RemoteResponsiveVideo)`
  margin-bottom: 1.5rem;

  video {
    object-fit: cover;
/*     height: 60% !important;
    width:100% !important; */
  }
`;

const HomeTitle = styled(StyledH1)`

  font-family: "DynaPuff";
  font-weight: 400;
  font-size: 34px;
  line-height: 40px !important;
  @media ${device.large} {
    width: 70%;
  }
`;

const HomeContainer = styled(AlignedCenterContainer)`
  @media ${device.large} {
    display: flex;
    position: relative;
  }
`;
const Img = styled.img`
width: 100%;
height: 100%;
margin-top: 2.5rem;
z-index:0;
object-fit: contain;


@media ${device.large} {
  width: 50%;
  margin-top:6rem;

  margin-bottom: 0;
}
`
const Hero = (props: HeroConfiguration) => {
   const [showVideo, setShowVideo] = useState(false) //cambiar a true
   const [index, setIndex] = useState(0)
   const [hasReachedEnd, setHasReachedEnd] = useState(null)

  useEffect(() => {
    let interval = null;
    if (index === props.images.length - 1) {
      if (!hasReachedEnd) {
        setHasReachedEnd(true);
      } else {
        interval = setInterval(() => {
          setIndex(0);
        }, 2000);
      }
    } else {
      interval = setInterval(() => {
        setIndex(index + 1);
      }, 2000);
    }
  
    return () => clearInterval(interval);
  }, [index, props.images.length, hasReachedEnd]);

  const handleVideoEnded = () => {
    setShowVideo(false);
  };



  return (
    <HomeContainer>
    {showVideo ? <Vid videos={props.videos} alt="hero video" onEnded={handleVideoEnded} />:
      <>
      <Img src={props.images[index].url} alt="hero image" width={'500'} height={'500'}/>
      <TextContainer>
        <HomeTitle>{props.title}</HomeTitle>
        <SubTitle>{props.subtitle}</SubTitle>
        <Button {...props} />
      </TextContainer>
    </>
    }
    </HomeContainer>
  );
};

export default Hero;