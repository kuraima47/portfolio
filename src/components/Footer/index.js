import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, FooterLinkHref } from './FooterElement';
import { FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About me</FooterLinkTitle>
                        <FooterLink to="/contact">Contact me</FooterLink>
                        <FooterLinkHref href="https://play.google.com/store/apps/dev?id=6484082470729903768">GooglePlay</FooterLinkHref>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Network</FooterLinkTitle>
                        <FooterLinkHref href="https://www.instagram.com/thib_pttr/?hl=fr">Instagram</FooterLinkHref>
                        <FooterLinkHref href="https://www.linkedin.com/in/thibault-pottier-92a4a2204/">Linkedin</FooterLinkHref>
                        <FooterLinkHref href="https://twitter.com/escalador47">Twitter</FooterLinkHref>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        Portfolio
                    </SocialLogo>
                    <WebsiteRights>By Kuraima {new Date().getFullYear()} in ReactJs</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="https://www.instagram.com/thib_pttr/?hl=fr" target="_blank" arial-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="https://twitter.com/escalador47" target="_blank" arial-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="https://www.linkedin.com/in/thibault-pottier-92a4a2204/" target="_blank" arial-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;