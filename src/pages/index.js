import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Happenings from "../components/happenings";

import vappu from '../static/vappu.jpg';

const IndexPage = () => (
  <Layout>
    <SEO title="Orientaatioviikko" />
    <div className="ImageContainer">
      <img src={vappu} alt="Taidemuseonmäen lakitus" />
    </div>
    <div className="TextContainer">
      Tervetuloa ja suuret onnittelut, että olet päässyt opiskelemaan Turun yliopistoon kone- tai materiaalitekniikka.
      Näiltä sivuilta löydät ohjeita, joiden avulla yliopiston aloittaminen helpottuu. Nähdään pian!
    </div>
    <Happenings />
  </Layout>
)

export default IndexPage
