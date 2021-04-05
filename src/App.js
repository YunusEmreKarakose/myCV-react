import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import Info from './components/infoAndExperience'
import Skills from './components/skills';
import Education from './components/education'
import Other from './components/other'
import Mail from './components/mail'
function App() {
  return (
    <div>    
    <Header/>
    <Info/>
    <Skills/>
    <Education/>
    <Other/>
    <Mail />
    <Footer/>
    </div>
  )
}

export default App;
