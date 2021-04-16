import device from "../../config/breakpoints"
import Palette from "../../config/palette"
import styled from "styled-components"

export const StyledFooter = styled.div`
  background-color: ${Palette.primary};
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
  a {
    text-decoration: none;
  }
`

export const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
  margin-top: 1rem;

  @media ${device.tablet} {
    flex-direction: column;
  }
`

export const FooterLinksCol = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  @media ${device.tablet} {
    margin-bottom: 3rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const FooterSocial = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  & > * {
    margin-left: 1.2rem;
    cursor: pointer;
    transition: opacity 0.1s;
    &:hover {
      opacity: 0.7;
    }
  }

  &:first-child {
    margin-left: 0;
  }

  svg {
    font-size: 1.5rem;
  }
`

export const FooterLink = styled.div`
  font-weight: 500;
  transition: opacity 0.1s;
  &:hover {
    opacity: 0.7;
  }
`

export const FooterInfo = styled.div`
  margin-top: 2rem;
  text-align: center;
  color: rgba(225, 225, 225, 0.7);
  span {
    color: ${Palette.blue};
  }
`

export const FooterLogo = styled.img`
  width: 20rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
`
