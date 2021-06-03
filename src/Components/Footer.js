import React from 'react'
import {FooterText, FooterDiv, MainDiv, ShortlyDiv, ShortlyText, SocialMediaIcon} from '../StyledComponents/FooterStyle'
import TwitterLogo from "../SVGStyles/icon-twitter.svg"
import FacebookLogo from "../SVGStyles/icon-facebook.svg"
import InstagramLogo from "../SVGStyles/icon-instagram.svg"
import PinterestLogo from "../SVGStyles/icon-pinterest.svg"


function Footer() {
    return (
        <div>
            <MainDiv>
              <ShortlyDiv>
                  <ShortlyText>Shortly</ShortlyText>
              </ShortlyDiv>
              <FooterDiv>
                   <FooterText title>Features</FooterText>
                   <FooterText>Link Shortening</FooterText>
                   <FooterText>Branded Links</FooterText>
                   <FooterText>Analytics</FooterText>
              </FooterDiv>
              <FooterDiv>
              <FooterText title>Resources</FooterText>
                   <FooterText>Blog</FooterText>
                   <FooterText>Developer</FooterText>
                   <FooterText>Support</FooterText>
              </FooterDiv>
              <FooterDiv>
              <FooterText title>Company</FooterText>
                   <FooterText>About</FooterText>
                   <FooterText>Our Team</FooterText>
                   <FooterText>Careers</FooterText>
                   <FooterText>Contact</FooterText>

              </FooterDiv>
              <FooterDiv socialmedia>
                  <SocialMediaIcon src={FacebookLogo}></SocialMediaIcon>
                  <SocialMediaIcon src={TwitterLogo}></SocialMediaIcon>
                  <SocialMediaIcon src={PinterestLogo}></SocialMediaIcon>
                  <SocialMediaIcon src={InstagramLogo}></SocialMediaIcon>
              </FooterDiv>
            </MainDiv>
        </div>
    )
}

export default Footer