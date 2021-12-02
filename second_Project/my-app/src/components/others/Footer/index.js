import React from "react"; 
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaLinkedin} from "react-icons/fa"
import {
  Footercontainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink, 
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,  
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./footerelements"; 


const Footer = () => {
  return (
    <Footercontainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About Us </FooterLinkTitle>
              <FooterLink to="/signin">About us</FooterLink>
              <FooterLink to="/signin">How it Works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Carrers</FooterLink>
              <FooterLink to="/signin">Investers</FooterLink>
              <FooterLink to="/signin">Terms of Services</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Contact Us </FooterLinkTitle>
              <FooterLink to="/signin">Contact</FooterLink>
              <FooterLink to="/signin">Support</FooterLink>
              <FooterLink to="/signin">Destinations</FooterLink>
              <FooterLink to="/signin">Sponserships</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Videos </FooterLinkTitle>
              <FooterLink to="/signin">Submit video</FooterLink>
              <FooterLink to="/signin">Ambassadors</FooterLink>
              <FooterLink to="/signin">Agency</FooterLink>
              <FooterLink to="/signin">Influences</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Social Media </FooterLinkTitle>
              <FooterLink to="/signin">Instagram</FooterLink>
              <FooterLink to="/signin">Facebook</FooterLink>
              <FooterLink to="/signin">Twitter</FooterLink>
              <FooterLink to="/signin">Youtube</FooterLink>
              <FooterLink to="/signin">Linkedin</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia> 
          <SocialMediaWrap>
          <SocialLogo to="/">AGP</SocialLogo>
          <WebsiteRights>AGP © {new Date().getFullYear()} All rights Reserved</WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia> 
        <SocialIcons> 
          <SocialIconLink href="/" target="_blank" 
          aria-label="Facebook"> 
            <FaFacebook/>
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" 
          aria-label="Instagram"> 
            <FaInstagram/>
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" 
          aria-label="Twitter"> 
            <FaTwitter/>
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" 
          aria-label="Youtube"> 
            <FaYoutube/>
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" 
          aria-label="Linkedin"> 
            <FaLinkedin/>
          </SocialIconLink>
        </SocialIcons>

      </FooterWrap>
    </Footercontainer>
  );
};

export default Footer;
