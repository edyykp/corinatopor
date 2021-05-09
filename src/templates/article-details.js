import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Card } from "react-bootstrap";
import Social from "../components/Social";

const ArticleDetails = ({ data }) => {
  const { html } = data.markdownRemark;
  const { title, date, image } = data.markdownRemark.frontmatter;
  const services = data.services.edges;
  return (
    <Layout>
      <div className="header-article">
        <div className="container">
          <div className="row row-avatar">
            <div className="col">
              <h2>{title}</h2>
              <div className="wrapper clearfix">
                <div className="avatar">
                  <StaticImage
                    src="../images/avatar.png"
                    alt="avatar"
                    className="img"
                  />
                </div>
                <div className="author">
                  <h3>Corina Topor</h3>
                  <p>{date}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <GatsbyImage
                image={image.childImageSharp.gatsbyImageData}
                alt="article-image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="article-html">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </div>
          <div className="row justify-content-center info-post-row">
            <div className="col">
              <h3>
                Posted on {date}
                <br />
                By Corina Topor, Co-Founder and CEO
              </h3>
            </div>
          </div>
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div className="more-articles">
            <div className="row" style={{ marginTop: 50 }}>
              <div className="col-12 col-lg-4">
                <p>More articles from Corina Topor</p>
              </div>
              <div className="col-12 col-lg-8">
                <hr
                  style={{
                    borderTop: "1px solid #383838",
                  }}
                />
              </div>
            </div>
            <div className="row" style={{ marginTop: 20 }}>
              {services.map(({ node }, index) =>
                index === 0 ? (
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
                        <Card.Body className="content-article">
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ArticlesPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, height: 400, width: 1110)
          }
        }
      }
    }

    services: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/articles/.*/" } }
      sort: { fields: [frontmatter___weight], order: ASC }
      limit: 2
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

export default ArticleDetails;
