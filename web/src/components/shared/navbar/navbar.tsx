import React, { useEffect, useState } from 'react';
import { colors, typography } from '../../../config/global-styles';
import styled, { css } from 'styled-components';

import Cart from '../cart/cart';
import CartButton from '../cart-button';
import { CategoryConfiguration } from '../../../model/category-configuration';
import Chevron from '../chevron';
import Headroom from 'react-headroom';
import Link from 'next/link';
import { LinksSmall } from '../../../config/global-styled-components';
import Menu from '../menu/menu';
import NavbarDropHeader from './navbar-drop-header';
import Sidebar from '../sidebar/sidebar';
import { device } from '../../../config/device';

const Container = styled.section`
  max-width: 87vw;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  ${props=>
    css `
    background-color: ${props.isTransparent} !important;
    transition: ${props.transition};
    `}
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  border-radius: 7px;

  @media ${device.large} {
    height: 100px;
    padding: 0.75rem 3.75rem 0 3.75rem;

    justify-content: flex-start;
  }
`;

const Logo = styled.img`
  ${props=>
  props.isAtTop ? "margin-top: 1rem;" : "margin-top: 0.8rem;"};
  margin-bottom: 0.8rem;
  width: 7.5rem;
  @media ${device.large} {
    margin-right: 0.75rem;
  }
`;

const LogoLink = styled.a`
/*   margin: auto; */

  @media ${device.large} {
    margin: 0;
  }
`;

const MenuBotton = styled.img`
  margin-top: 26px;
  z-index: 10;
  @media ${device.large} {
    display: none;
  }
`;

const StyledLink = styled(LinksSmall)`
  display: none;
  margin-top: 2rem;
  text-decoration: none;
  margin-left: 2rem;
  transition: ease-out 200ms;
  @media ${device.large} {
    display: flex;
  }

  :hover {
    color: ${colors.primary.dark};
  }
`;

const HeadroomContainer = styled(Headroom)`
.headroom--unpinned {
  top: 0 !important;

}
  .headroom--unfixed {
    position: fixed !important;
    min-height: 73px;


  }
`;

const LinkContainer = styled.div`
  display: none;
  flex-direction: row;
  margin-left: 2rem;

  @media ${device.large} {
    display: flex;
  }
`;

const StyledProductTitle = styled.article`
  font-family: ${typography.links.small.font.name};
  font-style: normal;
  font-weight: ${typography.links.small.font.fontWeight};
  font-size: ${typography.links.small.fontSize};
  line-height: ${typography.links.small.lineHeight};
  letter-spacing: ${typography.links.small.letterSpacing};
  color: ${colors.ui.darkSurface};

  text-transform: ${typography.links.textTransform};
  margin-top: 2rem;

  :hover {
    color: ${colors.primary.dark};
  }
`;

const StyledChevron = styled(Chevron)`
  margin-top: 1.781rem;
`;

const NavBar = ({ categories }: { categories: CategoryConfiguration[] }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isNavbarUnpinned, setNavbarUnpinned] = useState(true);
  const [ isTransparent, setIsTransparent] = useState(null);
  const [ transition, setTransition] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const trColor = 'trasparent' 
  const wtColor = 'white'
  const okTransition = 'all .3s ease 0s'

  
  useEffect(() => {
    if (isMenuOpen || isProductMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen, isProductMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTransparent(trColor)
        setTransition(okTransition)
       } else if (window.scrollY < lastScrollY){
        setIsTransparent(wtColor)
        setTransition(null) 

      }
      setLastScrollY(window.scrollY);

    };
    window.addEventListener('scroll', handleScroll);


    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <HeadroomContainer
      pinStart={0}
      onUnpin={() => {setNavbarUnpinned(true); console.log('unpinned')}}
      onPin={() => {setNavbarUnpinned(false); console.log('pinned')}}
      disable={isNavbarUnpinned && (isCartOpen || isMenuOpen)}
      style={{top:"1.5rem"}}
      >
      <Container isTransparent={isTransparent} transition={transition}>
        <MenuBotton
          onClick={() => setMenuOpen(!isMenuOpen)}
          src={transition && !isMenuOpen
            ? '/assets/Menu-white.svg'
            : isMenuOpen
            ? '/assets/Menu-Close.svg'
            : '/assets/Menu.svg'}
          alt="Menu icon"
        />
        <Menu isOpen={isMenuOpen} categories={categories} />
         <LogoLink href="/" >
          <Logo isAtTop={transition} src={transition ? '/assets/soysustrato-logoblanco.png': '/assets/soysustrato-logonegro.png'} alt="Soy Sustrato Logo" />
        </LogoLink>

        <LinkContainer onClick={() => setIsProductMenuOpen(!isProductMenuOpen)}>
          <StyledProductTitle>productos</StyledProductTitle>
          <StyledChevron isOpen={isProductMenuOpen} />
        </LinkContainer>

        <Link href="/contact" passHref legacyBehavior>
          <StyledLink>contacto y ayuda</StyledLink>
          </Link>
        <Link href="/about" passHref legacyBehavior>
          <StyledLink>sobre Maruja</StyledLink>
        </Link>
        <Sidebar
          isOpen={isCartOpen}
          clickHandler={() => {
            setIsProductMenuOpen(false);
            setCartOpen(!isCartOpen);
          }}
          sidebarTitle="Carrito"
        >
          <Cart />
        </Sidebar>
        <CartButton
        isAtTop={transition}
          clickHandler={() => {
            setIsProductMenuOpen(false);
            setCartOpen(!isCartOpen);
          }}
        /> 
      </Container>
      <NavbarDropHeader isOpen={isProductMenuOpen} categories={categories} />
    </HeadroomContainer>
  );
};

export default NavBar;
