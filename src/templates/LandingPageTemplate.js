import React from 'react'
import ProjectCardContainer from '../components/molecules/ProjectCardContainer'
import Banner from '../components/organisms/Banner'
import Introduction from '../components/organisms/Introduction'
import Footer from '../components/organisms/Footer'
import ProjectFiles from '../assets/files/ProjectFiles'
const LandingPageTemplate = () => {
  return (
    <div>
      <Banner primaryText="Andy Klenzman" secondaryText="&lt;Full Stack Developer />" isMainButton={true} buttonText="View Portfolio"/>
      <Introduction />
      <ProjectCardContainer projectFiles={ProjectFiles} />
      <div style={{height:"60px"}}/>
      <Footer />
      


    </div>
    
  )
}

export default LandingPageTemplate