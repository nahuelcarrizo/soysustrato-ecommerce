import { colors, typography } from '../../../config/global-styles';

import { LabelSmall } from '../../../config/global-styled-components';
import Link from 'next/link';
import React from 'react';
import { device } from '../../../config/device';
import styled from 'styled-components';

const FooterMobileDesktopLinksContainer = styled.div<{ isFooter: boolean }>`
  ${(props) => (props.isFooter ? 'display:none;' : 'display:flex; flex-flow:column; align-items: center;')}
  margin-bottom: 2rem;

  @media ${device.large} {
    display: flex;
    ${(props) => (props.isFooter ? 'margin-left:11rem;' : '')}
    margin-bottom: 0;
  }
`;

const FooterLink = styled.a<{ isFooter: boolean }>`
  display: block;
  margin-bottom: 1.5rem;
  text-decoration: none;
  @media ${device.large} {
    ${(props) => (props.isFooter ? 'margin-right: 2rem;' : '')}
  }
`;

const FooterLabel = styled(LabelSmall)<{ isFooter: boolean }>`
  @media ${device.large} {
    display: block;
    font-size: ${typography.links.small.fontSize};
    line-height: ${typography.links.small.lineHeight};
    letter-spacing: ${typography.links.small.letterSpacing};
  }
  transition: ease-out 200ms;
  :hover {
    color: ${colors.primary.dark};
  }
`;

const LargeOnlyLink = styled.a<{ isFooter: boolean }>`
  display: ${(props) => (props.isFooter ? 'none' : 'block')};
  ${(props) => (props.isFooter ? '' : 'margin-bottom: 1.5rem;')}
  text-decoration: none;
  @media ${device.large} {
    display: block;
    ${(props) => (props.isFooter ? 'margin-right: 2rem;' : '')}
  }
`;

const SmallOnlyLink = styled.a`
  display: block;
  text-decoration: none;
  @media ${device.large} {
    display: none;
  }
`;

const FooterMobileDesktopLinks = ({ isFooter }: { isFooter: boolean }) => {
  return (
    <FooterMobileDesktopLinksContainer isFooter={isFooter}>
      <Link href="/about" passHref legacyBehavior>
        <LargeOnlyLink isFooter={isFooter}>
          <FooterLabel isFooter={isFooter}>SOBRE SOY SUSTRATO</FooterLabel>
        </LargeOnlyLink>
      </Link>
      <Link href="/contact" passHref legacyBehavior> 
        <FooterLink isFooter={isFooter}>
          <FooterLabel isFooter={isFooter}>CONTACTO</FooterLabel>
        </FooterLink>
      </Link>
      <Link href="/faq" passHref legacyBehavior>
        <FooterLink isFooter={isFooter}>
          <FooterLabel isFooter={isFooter}>PREGUNTAS FRECUENTES</FooterLabel>
        </FooterLink>
      </Link>

      <SmallOnlyLink href="/">
        <img src="/assets/Instagram.svg" alt="Instagram Logo" />
      </SmallOnlyLink>
    </FooterMobileDesktopLinksContainer>
  );
};

export default FooterMobileDesktopLinks;
