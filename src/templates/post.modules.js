import styled from "styled-components"
import device from "../config/breakpoints"
import { pageSizing } from "../config/mixins"
import Palette from "../config/palette"

export const StyledPostPage = styled.main`
  /* font-size: 2.2rem; */
  ${pageSizing}
  img {
    border-radius: 8px;
  }

  @media ${device.tablet} {
    /* font-size: 2rem; */
  }
`

export const PostPageHeading = styled.h1`
  /* font-size: 4.5rem; */
  float: center;
  /* margin-bottom: 2.5rem; */

  @media ${device.tablet} {
    /* font-size: 3.5rem; */
  }
`

export const PostPageReadTime = styled.span`
  font-style: italic;
  font-weight: bold;
  /* font-size: 1.8rem; */
`

export const PostPageImage = styled.img`
  object-fit: cover;
  height: auto;
  width: 100%;
`

export const PostPageContent = styled.div`
  /* margin-top: 3rem; */
  p {
    /* margin-bottom: 3rem; */
    /* line-height: 3.5rem; */
  }

  ul,
  ol {
    display: block;
    /* margin-left: 3rem; */
    /* margin-bottom: 4rem; */
    li {
      /* margin-bottom: 1rem; */
      /* line-height: 3.5rem; */
    }
  }

  blockquote.twitter-tweet {
    display: none;
  }
  a {
    color: ${Palette.blue};
    font-weight: bold;
    cursor: pointer;
  }

  img {
    object-fit: cover;
    height: auto;
    width: 100%;
  }

  iframe {
    width: 100%;
    height: 50rem;

    @media ${device.tablet} {
      height: 30rem;
    }

    @media ${device.mobile} {
      height: 25rem;
    }
  }
`
