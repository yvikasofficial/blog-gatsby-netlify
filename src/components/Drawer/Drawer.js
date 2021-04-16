import React from "react"
import { RiSearchLine } from "react-icons/ri"
import { HeaderSearch, HeaderSearchInput } from "../Header/header.modules"
import LinkC from "../LinkC/LinkC"
import {
  DrawerBackDrop,
  DrawerHeader,
  DrawerHeaderLinks,
  StyledDrawer,
} from "./drawer.modules"

import Palette from "../../config/palette"
import { navigate } from "gatsby"

const Drawer = ({ open, toggleOpen }) => {
  return (
    <>
      {open && <DrawerBackDrop onClick={toggleOpen} />}
      <StyledDrawer open={open}>
        <DrawerHeader>
          <HeaderSearch
            show={true}
            style={{ backgroundColor: Palette.primary, margin: 0 }}
          >
            <RiSearchLine />
            <HeaderSearchInput placeholder="Search for a post" />
          </HeaderSearch>
          <DrawerHeaderLinks>
            <span>Quick Links</span>
            <HeaderLinkComp onClick={toggleOpen} href="/">
              Home
            </HeaderLinkComp>
            <HeaderLinkComp onClick={toggleOpen} href="/latest">
              Latest
            </HeaderLinkComp>
            <HeaderLinkComp onClick={toggleOpen} href="/builds">
              Builds
            </HeaderLinkComp>
            <HeaderLinkComp onClick={toggleOpen} href="/contact">
              Contact
            </HeaderLinkComp>
          </DrawerHeaderLinks>
          <DrawerHeaderLinks>
            <span>Categories</span>
            <HeaderLinkComp onClick={toggleOpen} href="/games">
              Games
            </HeaderLinkComp>
            <HeaderLinkComp onClick={toggleOpen} href="/vfs">
              VFS
            </HeaderLinkComp>
            <HeaderLinkComp onClick={toggleOpen} href="/nitro">
              Nitro Steram
            </HeaderLinkComp>
            <HeaderLinkComp onClick={toggleOpen} href="/quick">
              Quick Selects
            </HeaderLinkComp>
          </DrawerHeaderLinks>
          <DrawerHeaderLinks>
            <span>Builds</span>
            <HeaderLinkComp onClick={toggleOpen} href="/games">
              Nitro Build
            </HeaderLinkComp>
            <HeaderLinkComp onClick={toggleOpen} href="/vfs">
              Poular keyboards
            </HeaderLinkComp>
            <HeaderLinkComp onClick={toggleOpen} href="/nitro">
              Nitro Steram
            </HeaderLinkComp>
            <HeaderLinkComp onClick={toggleOpen} href="/quick">
              Quick Selects
            </HeaderLinkComp>
          </DrawerHeaderLinks>
        </DrawerHeader>
      </StyledDrawer>
    </>
  )
}

export default Drawer

const HeaderLinkComp = ({ children, href, onClick }) => {
  return (
    <LinkC onClick={onClick} style={{ color: true && "white" }} href={href}>
      {children}
    </LinkC>
  )
}
