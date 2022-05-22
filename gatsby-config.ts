import type {
  GatsbyConfig
} from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Gólyasakk`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `work sans\:400,500,600,700` // you can also specify font weights and styles
      ],
      display: 'swap'
    }
  }]
};

export default config;