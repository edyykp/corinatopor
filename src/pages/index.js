import React, { useState } from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import { Card } from "react-bootstrap";
import Social from "../components/Social";

const Home = (props) => {
  const [loaded, setLoaded] = useState(6);

  const intro = props.data.intro;
  const site = props.data.site.siteMetadata;
  const services = props.data.services.edges;

  const [email, setEmail] = useState("");

  const subscribe = () => {
    console.log("subscribed");
  };

  return (
    <Layout bodyClass="page-home">
      <Seo title={site.title} />
      <Helmet>
        <meta
          name="description"
          content="Small Business Theme. Multiple content types using Markdown and JSON sources. Responsive design and SCSS. This is a beautiful and artfully designed starting theme."
        />
      </Helmet>

      <div className="intro">
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
      </div>

      <div className="articles">
        <div className="container pt-6 pb-6 pb-md-10">
          <div className="row justify-content-start">
            {services
              .filter(({ node }, index) => index < loaded)
              .map(({ node }, index) =>
                index % 4 === 0 || index % 4 === 3 ? (
                  <div key={node.id} className="col-12 col-md-7">
                    <div className="article-summary">
                      <Card>
                        <Card.Img
                          variant="top"
                          src="/images/intro.jpeg"
                          className="avatar"
                        />
                        <Card.Body className="content">
                          <div className="row">
                            <Card.Title className="title">
                              {node.frontmatter.title}
                            </Card.Title>
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
                  <div key={node.id} className="col-12 col-md-5">
                    <div className="article-summary">
                      <Card>
                        <Card.Img
                          variant="top"
                          src="/images/intro.jpeg"
                          className="avatar"
                        />
                        <Card.Body className="content">
                          <Card.Title className="title">
                            {node.frontmatter.title}
                          </Card.Title>
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

      <div className="call-to-action">
        <div className="container pt-6 pb-6 pt-md-10 pb-md-10 call-to-action-container">
          <div className="row justify-content-center">
            <div className="col-md-2 col-md-offset-3">
              <img
                src="/images/Frame-1.png"
                alt="jumping-woman"
                className="image1"
              />
            </div>
            <div className="col-md-8 col-md-offset-3 mid-col">
              <h3>Join our email list and get notified about new content</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultrices dui scelerisque metus, cras. Massa lacus massa risus
                id. Augue morbi metus ipsum ipsum pellentesque sagittis
              </p>
              <form onSubmit={subscribe}>
                <input
                  placeholder="your@email.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="button">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="col-md-2 col-md-offset-3 last-col">
              <img src="/images/Frame.png" alt="shelter" className="image2" />
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
          }
          excerpt
        }
      }
    }

    intro: markdownRemark(fileAbsolutePath: { regex: "/content/index.md/" }) {
      html
      frontmatter {
        image
        intro_image
        intro_image_absolute
        intro_image_hide_on_mobile
        title
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
  }
`;
export default Home;
