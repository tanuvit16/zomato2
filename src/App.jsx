import React from 'react';
import LandingPage from './components/LandingPage';
import ZomatoSection from './components/ZomatoSection';
import BackgroundVideo from './components/BackgroundVideo';
import ZomatoStats from './components/ZomatoStats';
import Footer from './components/Footer';
import Download from './components/Download';
import Feature from './components/Feature';
import ZomatoGold from './components/ZomatoGold';
import Box from './components/Box';
// import Card from './components/Card';
// import CardFeature from './components/CardFeature';
// import Service from './components/Service';



function App() {
 
  return (
    <>
    
<BackgroundVideo/>
  
      <ZomatoSection/>
      <ZomatoStats/>
      <Feature/>
      <ZomatoGold/>
    <Box/>
      {/* <Card/>
      <CardFeature/> */}
      {/* <Service/> */}
 <Download/>
      
      <Footer/>

      

    </>
  )
}

export default App
