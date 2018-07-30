import React from 'react'
import Helmet from 'react-helmet'

import HeroImage from '../components/heroImage'
import Content from '../components/content'
import Home from '../pages'

import * as Theme from '../components/theme'

export default ({ data }) => {
  const post = data.markdownRemark

  let heading = <Helmet title={post.frontmatter.title} />
  let content = <Content html={post.html} />

  if (post.frontmatter.title === 'Home') {
    heading = ''
    content = <Home />
  }

  return (
    <div>
      {heading}
      <HeroImage
        imageSharp={
          post.frontmatter.indexImage
            ? post.frontmatter.indexImage.childImageSharp
            : null
        }
        headerText={
          post.frontmatter.heading === null
            ? post.frontmatter.title
            : post.frontmatter.heading
        }
        padding={Theme.Sizes.NavigationHeight}
      />
      {content}
    </div>
  )
}

// export const query = graphql`
//   query PageQuery($slug: String!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         indexImage {
//           childImageSharp {
//             sizes(maxWidth: 1240, quality: 100) {
//               ...GatsbyImageSharpSizes
//             }
//           }
//         }
//       }
//     }
//   }
// `
