import React from 'react'
import { graphql } from 'gatsby'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

type PageProps = {
  data: {
    site: {
      siteMetadata: {
        siteUrl: string
      }
    }
  }
}

const About: React.FunctionComponent<PageProps> = ({ data: { site } }) => {
//const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="O mně | Face &amp; Body Art" desc="Hi. I'm Lea! You can visit my website or my other Gatsby projects." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Hi. I'm Lea!</h1>
        <p>
          You can visit my <a href={ site.siteMetadata.siteUrl }>website</a>.
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default About

export const query = graphql`
  query About {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
