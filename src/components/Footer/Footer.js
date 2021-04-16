import { RiInstagramFill, RiMailFill } from "react-icons/ri"
import { IoLogoDiscord, IoLogoTiktok } from "react-icons/io5"
import LinkC from "../LinkC/LinkC"
import * as React from "react"

import {
  FooterInfo,
  FooterLink,
  FooterLinks,
  FooterLinksCol,
  FooterLogo,
  FooterSocial,
  StyledFooter,
} from "./footer.modules"
import LogoTxt from "../../assets/logo_text.svg"
import { navigate } from "gatsby"

const Footer = () => {
  return (
    <StyledFooter>
      <FooterLogo src={LogoTxt} onClick={() => navigate("/")} />
      <FooterLinks>
        <FooterLinksCol>
          <FooterLink>
            <LinkC>Terms & conditions</LinkC>
          </FooterLink>
          <FooterLink>
            <LinkC>Pravicy & Policies</LinkC>
          </FooterLink>
          <FooterLink>
            <LinkC>Get in touch</LinkC>
          </FooterLink>
        </FooterLinksCol>
        <FooterLinksCol>
          <FooterLink>
            <LinkC>Terms & conditions</LinkC>
          </FooterLink>
          <FooterLink>
            <LinkC>Pravicy & Policies</LinkC>
          </FooterLink>
          <FooterLink>
            <LinkC>Get in touch</LinkC>
          </FooterLink>
        </FooterLinksCol>
        <FooterLinksCol>
          <FooterLink>
            <LinkC>Terms & conditions</LinkC>
          </FooterLink>
          <FooterLink>
            <LinkC>Pravicy & Policies</LinkC>
          </FooterLink>
          <FooterLink>
            <LinkC>Get in touch</LinkC>
          </FooterLink>
        </FooterLinksCol>
      </FooterLinks>
      <FooterSocial>
        <RiInstagramFill
          onClick={() =>
            window.open("https://www.instagram.com/tipsdestream/", "_blank")
          }
        />
        <RiMailFill onClick={() => navigate("/contact")} />
        <IoLogoTiktok
          onClick={() =>
            window.open("https://www.tiktok.com/tipsdestream/", "_blank")
          }
        />
        <IoLogoDiscord />
      </FooterSocial>

      <FooterInfo>
        &copy; 2021 All Rights reserved . <span>Tipsdestream.com</span>
      </FooterInfo>
    </StyledFooter>
  )
}

export default Footer
