import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import { PageSection, PageSectionVariants, TextContent } from "@patternfly/react-core";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <SEO title="Home" description="Home Page" />
      <PageSection className="doc" variant={PageSectionVariants.light}>
        <TextContent>
          <h1>Home</h1>
        </TextContent>
      </PageSection>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
