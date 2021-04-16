import device from "../../config/breakpoints"
import Palette from "../../config/palette"
import styled from "styled-components"

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4.5rem;
  transition: box-shadow 0.3s;
  font-family: sans-serif;
  width: 100%;
  z-index: 10;
  background-color: ${Palette.primary};
  @media ${device.tablet} {
    height: 3.5rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  a {
    text-decoration: none;
  }
`

export const HeaderWrapper = styled.div`
  width: 1600px;
  height: 100%;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderLogo = styled.img`
  width: 2.8rem;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  @media ${device.tablet} {
    width: 2rem;
  }
`

export const HeaderLinks = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 1.3rem;
    width: max-content;
    font-weight: 600;
    text-transform: uppercase;
  }

  &:first-child {
    margin-left: 0rem;
  }

  a {
    color: rgba(225, 225, 225, 0.9);
    transition: color 0.1s;
    &:hover {
      color: white;
    }
  }
`

export const HeaderSearchWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
`

export const HeaderSearch = styled.div`
  width: 100%;
  max-width: 30rem;
  height: 2.8rem;
  background-color: ${Palette.primaryLight};
  border-radius: 3rem;
  margin-left: 1.5rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;

  @media ${device.tablet} {
    display: ${props => (props.show ? "" : "none")};
  }
`

export const HeaderSearchInput = styled.input`
  border: none;
  background-color: transparent;
  color: white;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  margin-left: 1rem;

  &:focus {
    border: none;
    outline: none !important;
  }
`

export const HeaderCategories = styled.div`
  height: 3rem;
  width: 100%;
  background-color: ${Palette.primary};
  border-top: 2px solid ${Palette.primaryDark};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  @media ${device.tablet} {
    display: none;
  }
`

export const HeaderCategoriesWrapper = styled.div`
  width: 1600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 90%;

  & > * {
    font-weight: 500;
    color: rgba(225, 225, 225, 0.4);
    transition: color 0.1s;

    &:hover {
      color: rgba(225, 225, 225, 0.8);
    }
  }
`
