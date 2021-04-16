import device from "../../config/breakpoints"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import React, { useState } from "react"
import LinkC from "../LinkC/LinkC"
import {
  HeaderCategories,
  HeaderCategoriesWrapper,
  HeaderLinks,
  HeaderLogo,
  HeaderSearch,
  HeaderSearchInput,
  HeaderSearchWrap,
  HeaderWrapper,
  StyledHeader,
} from "./header.modules"
import { RiMenu2Fill, RiSearchLine } from "react-icons/ri"
import { navigate } from "gatsby"
import Palette from "../../config/palette"
import logo from "../../assets/logo.png"

const Header = ({ toggleOpen }) => {
  const [top, setTop] = useState(true)
  const isMd = useMediaQuery(device.tablet)
  const categories = [
    {
      name: "VFX Gaming",
      href: "/",
    },
    {
      name: "CSGO",
      href: "/",
    },
    {
      name: "Streaming",
      href: "/",
    },
    {
      name: "Racing",
      href: "/",
    },
    {
      name: "Tutorials",
      href: "/",
    },
    {
      name: "Sellers",
      href: "/",
    },
    {
      name: "Racing",
      href: "/",
    },
    {
      name: "Tutorials",
      href: "/",
    },
    {
      name: "Sellers",
      href: "/",
    },
  ]

  // const handleScroll = () => {
  //   const scrollTotal = document.documentElement.scrollTop;
  //   const heightWin =
  //     document.documentElement.scrollHeight -
  //     document.documentElement.clientHeight;
  //   const progress = (scrollTotal / heightWin) * 100;
  //   if (progress < 2 && !top) {
  //     setTop(true);
  //   } else if (progress >= 2 && top) {
  //     setTop(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("scroll", handleScroll);
  //   return () => document.removeEventListener("scroll", handleScroll);
  // });

  return (
    <>
      <StyledHeader top={top}>
        <HeaderWrapper>
          <HeaderSearchWrap>
            <HeaderLogo onClick={() => navigate("/")} src={logo} />
            <HeaderSearch>
              <RiSearchLine />
              <HeaderSearchInput placeholder="Search for a post" />
            </HeaderSearch>
          </HeaderSearchWrap>
          {isMd ? (
            <RiMenu2Fill onClick={toggleOpen} style={{ fontSize: "1.5rem" }} />
          ) : (
            <>
              <HeaderLinks>
                <HeaderLinkComp href="/">Home</HeaderLinkComp>
                <HeaderLinkComp href="/latest">Latest</HeaderLinkComp>
                <HeaderLinkComp href="/builds">Builds</HeaderLinkComp>
                <HeaderLinkComp href="/contact">Contact</HeaderLinkComp>
              </HeaderLinks>
            </>
          )}
        </HeaderWrapper>
        <HeaderCategories>
          <HeaderCategoriesWrapper>
            {categories.map((c, index) => (
              <LinkC key={index} href={c.href}>
                {c.name}
              </LinkC>
            ))}
          </HeaderCategoriesWrapper>
        </HeaderCategories>
      </StyledHeader>
    </>
  )
}

export default Header

const HeaderLinkComp = ({ children, href }) => {
  // var selected = router.asPath === href

  return (
    <LinkC style={{ color: false && Palette.blue }} href={href}>
      {children}
    </LinkC>
  )
}
