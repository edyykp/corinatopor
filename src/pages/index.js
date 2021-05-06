import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import Helmet from "react-helmet";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import { Card } from "react-bootstrap";
import Social from "../components/Social";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";

const Home = (props) => {
  const [loaded, setLoaded] = useState(6);

  const intro = props.data.intro;
  const site = props.data.site.siteMetadata;
  const services = props.data.services.edges;
  const intro_image = props.data.intro_image.childImageSharp.fluid;
  const image1 = props.data.image1.childImageSharp.fluid;
  const image2 = props.data.image2.childImageSharp.fluid;
  return (
    <Layout bodyClass="page-home" image1={image1} image2={image2}>
      <Seo title={site.title} />
      <Helmet>
        <meta
          name="description"
          content="Small Business Theme. Multiple content types using Markdown and JSON sources. Responsive design and SCSS. This is a beautiful and artfully designed starting theme."
        />
      </Helmet>

      <div className="intro">
        <BackgroundImage fluid={intro_image}>
          <div className="container introContainer">
            <div className="row justify-content-start">
              <div className="col-12 col-md-7 col-lg-9 order-2 order-md-1">
                <div dangerouslySetInnerHTML={{ __html: intro.html }} />
                <div className="call-box-bottom">
                  <a className="button" href="http://localhost:8000/">
                    <span>Read more</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </BackgroundImage>
      </div>

      <div className="articles">
        <div className="container pt-6 pb-6 pb-md-10">
          <div className="row justify-content-start">
            {services
              .filter(({ node }, index) => index < loaded)
              .map(({ node }, index) =>
                index % 4 === 0 || index % 4 === 3 ? (
                  <div className="col-12 col-md-7" key={node.id}>
                    <div className="article-summary">
                      <Card>
                        <Img
                          variant="top"
                          fluid={node.frontmatter.image.childImageSharp.fluid}
                          className="avatar"
                        />
                        <Card.Body className="content">
                          <div className="row">
                            <Link
                              to={"/content/services/" + node.frontmatter.slug}
                            >
                              <Card.Title className="title">
                                {node.frontmatter.title}
                              </Card.Title>
                            </Link>
                          </div>
                          <div className="row">
                            <Card.Text className="excerpt">
                              {node.excerpt}
                            </Card.Text>
                          </div>
                          <div className="row justify-content-between">
                            <p className="date">{node.frontmatter.date}</p>
                            <Social />
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                ) : (
                  <div className="col-12 col-md-5" key={node.id}>
                    <div className="article-summary">
                      <Card style={{ width: "100%" }}>
                        <Img
                          variant="top"
                          fluid={node.frontmatter.image.childImageSharp.fluid}
                          className="avatar"
                        />
                        <Card.Body className="content">
                          <Link
                            to={"/content/services/" + node.frontmatter.slug}
                          >
                            <Card.Title className="title">
                              {node.frontmatter.title}
                            </Card.Title>
                          </Link>
                          <div className="bottom-sm">
                            <p className="date-sm">{node.frontmatter.date}</p>
                            <Social />
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                )
              )}
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              <button
                className="button button-primary"
                onClick={() => setLoaded(loaded + 6)}
              >
                View more
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    services: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/.*/" } }
      sort: { fields: [frontmatter___weight], order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            slug
          }
          excerpt
        }
      }
    }

    intro: markdownRemark(fileAbsolutePath: { regex: "/content/index.md/" }) {
      html
      frontmatter {
        intro_image
        intro_image_absolute
        intro_image_hide_on_mobile
        title
      }
    }
    intro_image: file(relativePath: { eq: "images/intro.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    features: allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    image1: file(relativePath: { eq: "images/Frame-1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "images/Frame.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
export default Home;
