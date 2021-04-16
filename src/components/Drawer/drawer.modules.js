import Palette from "../../config/palette"
import styled from "styled-components"

export const StyledDrawer = styled.div`
  width: 80%;
  height: 100vh;
  background-color: ${Palette.primaryDark};
  position: fixed;
  z-index: 100;
  top: 0;
  left: ${props => (props.open ? "0" : "-100%")};
  transition: left 0.2s ease-out;
  padding: 2rem 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 30;
`

export const DrawerHeader = styled.div``

export const DrawerHeaderLinks = styled.div`
  margin: 3rem 2rem;
  display: flex;
  flex-direction: column;

  span {
    color: ${Palette.grey};
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  a {
    font-weight: 500;
    color: rgba(225, 225, 225, 0.8);
    margin-bottom: 1rem;
  }
`

export const DrawerLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const DrawerLink = styled.div`
  color: ${Palette.blue};
  font-weight: 500;
  font-size: 1.8rem;
  margin-bottom: 2rem;
`

export const DrawerBackDrop = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  opacity: 0.8;
`
