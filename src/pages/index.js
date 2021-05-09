import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { Card } from "react-bootstrap";
import Social from "../components/Social";
import { GatsbyImage } from "gatsby-plugin-image";

const Home = (props) => {
  const [loaded, setLoaded] = useState(6);

  const services = props.data.services.edges;
  return (
    <Layout bodyClass="page-home">
      <div className="intro">
        <div className="container introContainer">
          <div className="row justify-content-start">
            <div className="col-12 col-md-7 col-lg-9 order-2 order-md-1">
              <h1>
                Welcome to Corina, the simplest way to start publishing with
                Gatsby.
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus praesent nibh suscipit nisl quis. Tempus, nullam
                fermentum porttitor nisl, natoque pharetra. Amet tincidunt nunc
                interdum et suspendisse elementum faucibus vitae. Pellentesque
                quisque ac diam pellentesque laoreet aliquet eu. Iaculis odio
                eleifend mattis blandit scelerisque et pellentesque. Ut
                consequat, purus
              </p>
              <div className="call-box-bottom">
                <a className="button" href="http://localhost:8000/about">
                  <span>About me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
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
                        <GatsbyImage
                          variant="top"
                          image={
                            node.frontmatter.image.childImageSharp
                              .gatsbyImageData
                          }
                          className="avatar"
                          alt="article-image"
                        />
                        <Card.Body className="content-article">
                          <Link to={"/" + node.frontmatter.slug}>
                            <Card.Title as="h2" className="title">
                              {node.frontmatter.title}
                            </Card.Title>
                          </Link>
                          <Card.Text className="excerpt">
                            {node.excerpt}
                          </Card.Text>
                          <div className="bottom">
                            <p>{node.frontmatter.date}</p>
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
                        <GatsbyImage
                          variant="top"
                          image={
                            node.frontmatter.image.childImageSharp
                              .gatsbyImageData
                          }
                          className="avatar"
                          alt="article-image"
                        />
                        <Card.Body
                          className="content-article"
                          style={{ justifyContent: "space-between" }}
                        >
                          <Link to={"/" + node.frontmatter.slug}>
                            <Card.Title className="title" as="h2">
                              {node.frontmatter.title}
                            </Card.Title>
                          </Link>
                          <p className="date-sm">{node.frontmatter.date}</p>
                          <Social />
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
      filter: { fileAbsolutePath: { regex: "/articles/.*/" } }
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
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            slug
          }
          excerpt(pruneLength: 150)
        }
      }
    }
  }
`;
export default Home;
