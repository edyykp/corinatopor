import React from "react";
import Helmet from "react-helmet";
import favicon from "../../static/favicon-32x32.svg";

const Seo = () => {
  const title = "Corina Topor";
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={title}
      titleTemplate={title ? `%s` : `%s - ${title}`}
      link={[{ rel: "shortcut icon", type: "image/svg", href: `${favicon}` }]}
    />
  );
};

Seo.defaultProps = {
  lang: "en",
  meta: [],
  keywords: [],
};

export default Seo;
