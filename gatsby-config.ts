import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `cinfo-gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss", 
    "gatsby-plugin-image", 
    "gatsby-plugin-mdx", 
    "gatsby-transformer-remark", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "notices_notice",
        "path": "./documents/notices/"
      },
      __key: "notices_notice"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "notices_notice_images",
        "path": "./documents/notices/images"
      },
      __key: "notices_notice_images"
    }
  ]
};

export default config;
