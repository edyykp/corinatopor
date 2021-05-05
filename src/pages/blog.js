// import React from 'react';
// import {graphql, Link} from 'gatsby';
// import PropTypes from 'prop-types';
// import {
//   Card, Heading, Text,
// } from '@theme-ui/components';
// import Img from 'gatsby-image';
// import SocialShare from '../components/SocialShare';

// const BlogPage = ({data, location}) => {
//   const {edges: posts} = data.allMdx;
//   return (
//     <React.Fragment>
//       {posts && posts.map(({node}) => {
//         const {
//           title, author, image, tags,
//         } = node.frontmatter;
//         return (
//           <Card key={node.id}>
//             <Img fluid={image.childImageSharp.fluid} />
//             <Heading as="h2">{title}</Heading>
//             <Text>{node.excerpt}</Text>
//             <Text>
//               Posting By
//               {' '}
//               {author}
//             </Text>
//             <ul>
//               {tags && tags.map(tag => (
//                 <li>{tag}</li>
//               ))}
//             </ul>
//             <SocialShare title={title} url={location.href} tags={tags} />
//             <Link to={node.slug}>View Article</Link>
//           </Card>
//         );
//       })}
//     </React.Fragment>
//   );
// };

// BlogPage.propTypes = {
//   data: PropTypes.shape({
//     allMdx: PropTypes.shape({
//       edges: PropTypes.arrayOf(PropTypes.object),
//     }),
//   }).isRequired,
//   location: PropTypes.shape({
//     href: PropTypes.string,
//   }).isRequired,
// };

// export default BlogPage;

// export const pageQuery = graphql`
//   query blogIndex {
//     allMdx {
//       edges {
//         node {
//           id
//           slug
//           excerpt(pruneLength: 150)
//           frontmatter {
//             author
//             date
//             description
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 500, quality: 100) {
//                   ...GatsbyImageSharpFluid
//                   ...GatsbyImageSharpFluidLimitPresentationSize
//                 }
//               }
//             }
//             tags
//             title
//           }
//         }
//       }
//     }
//   }
// `;