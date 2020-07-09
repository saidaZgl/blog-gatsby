import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Bio from "../components/bio"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout page="1">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <h2>{node.frontmatter.title}</h2>
        <p>{node.excerpt}</p>
      </div>
    ))}
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
