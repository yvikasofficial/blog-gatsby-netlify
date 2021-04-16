import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import {
  PostPageContent,
  PostPageHeading,
  StyledPostPage,
} from "./post.modules"

const BlogPostTemplate = ({ data, location }) => {
  console.log(data)

  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout>
      <StyledPostPage>
        <PostPageHeading>{post.frontmatter.title}</PostPageHeading>
        {/* <PostPageImage src="https://www.ubp.com/files/live/sites/ubp/files/image/banner_newsroom/200124_Vignette_Web_Detail.jpg" /> */}
        <PostPageContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </StyledPostPage>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      frontmatter {
        slug
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      frontmatter {
        title
        slug
      }
    }
  }
`
