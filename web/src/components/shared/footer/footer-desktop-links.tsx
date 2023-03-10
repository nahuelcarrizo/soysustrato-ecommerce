import { colors, typography } from '../../../config/global-styles';

import Link from 'next/link';
import { LinksLarge } from '../../../config/global-styled-components';
import React from 'react';
import { device } from '../../../config/device';
import footerJson from '../../../config/footer-conf.json';
import styled from 'styled-components';

const FooterDesktopLinksContainer = styled.div`
  display: none;
  align-items: center;
  @media ${device.large} {
    display: flex;
  }
`;

const FooterLink = styled(LinksLarge)`
  display: block;
  text-decoration: none;
  @media ${device.large} {
    margin-right: 2rem;
  }
  transition: ease-out 200ms;

  :hover {
    color: ${colors.primary.dark};
  }
`;

const LogoLink = styled(FooterLink)`
  margin-top: 15px;
  margin-right: 2.75rem;
`;

const CornerLink = styled(FooterLink)`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const InstaLogoLarge = styled.img`
  height: 22px;
  width: 24px;
  margin-left: 1rem;
  padding-bottom: 2px;
`;

const CornerLinkText = styled.p`
  font-family: ${typography.links.large.font.name};
  font-style: normal;
  font-weight: ${typography.links.large.font.fontWeight};
  font-size: ${typography.links.large.fontSize};
  line-height: ${typography.links.large.lineHeight};
  letter-spacing: ${typography.links.large.letterSpacing};
  color: ${colors.ui.darkSurface};

  text-transform: ${typography.links.textTransform};
  transition: ease-out 200ms;

  :hover {
    color: ${colors.primary.dark};
  }
`;

const MarujaLink = styled.div`
  text-decoration: none;
  color: ${colors.ui.darkSurface};
  font-weight: bold;
  transition: ease-out 200ms;

  :hover {
    color: ${colors.primary.dark};
  }
`;

const createLink = (legend: string, link: string, key: number) => {
  return (
    <Link href={`/categories${link}`} key={key} passHref legacyBehavior>
      <FooterLink>{legend}</FooterLink>
    </Link>
  );
};

const FooterDesktopLinks = () => {
  return (
    <FooterDesktopLinksContainer>
      <LogoLink href="/">
        <img src="/assets/Logo.svg" alt="Logo Soy Sustrato" />
      </LogoLink>

      {footerJson.data.desktop.map((link, index) => createLink(link.legend, link.link, index))}

      <CornerLink href="https://www.instagram.com/soy.sustrato?igshid=YmMyMTA2M2Y=/" target="_blank" rel="noopener noreferrer">
        <CornerLinkText>SEGU??NOS EN INSTAGRAM</CornerLinkText>
        <MarujaLink>
          <InstaLogoLarge src="/assets/Instagram.svg" alt="Instagram Logo" />
        </MarujaLink>
      </CornerLink>
    </FooterDesktopLinksContainer>
  );
};

export default FooterDesktopLinks;
