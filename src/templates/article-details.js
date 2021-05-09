import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import avatar from "../images/avatar.png";
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
                  <img src={avatar} alt="avatar" className="img" />
                </div>
                <div className="author">
                  <h4>Corina Topor</h4>
                  <p>{date}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row-fluid">
            <Img
              fluid={image.childImageSharp.fluid}
              imgStyle={{ borderRadius: 5 }}
            />
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
              <h5>
                Posted on {date}
                <br />
                By Corina Topor, Co-Founder and CEO
              </h5>
            </div>
          </div>
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div className="more-articles">
            <div className="row" style={{ marginTop: 50 }}>
              <div className="col-12 col-lg-4">
                <text>More articles from Corina Topor</text>
              </div>
              <div className="col-12 col-lg-8">
                <hr
                  style={{
                    borderTop: "1px solid #9B9BA566",
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
                        <Img
                          variant="top"
                          fluid={node.frontmatter.image.childImageSharp.fluid}
                          className="avatar"
                        />
                        <Card.Body className="content">
                          <Link to={"/" + node.frontmatter.slug}>
                            <Card.Title className="title">
                              {node.frontmatter.title}
                            </Card.Title>
                          </Link>
                          <Card.Text className="excerpt">
                            {node.excerpt}
                          </Card.Text>
                          <div
                            className="row justify-content-between"
                            style={{ marginTop: 20 }}
                          >
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
                          <Link to={"/" + node.frontmatter.slug}>
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
            fluid(maxWidth: 1000, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
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
  }
`;

export default ArticleDetails;
