import './App.css'
import Designs from './Components/Designs/Designs'
import Feature from './Components/Features/Feature'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Sales from './Components/Sales/Sales'
import Services from './Components/Services/Services'
import SocialsCard from './Components/Socials/SocialsCard'
import Stores from './Components/Stores/Stores'
function App() {

  return (
    <>
     <Navbar/>
     <Hero/>
     <Feature/>
     <Designs/>
     <Services/>
     <Stores/>
     <Sales/>
     <SocialsCard/>
     <Footer/>
    </>
  )
}

export default App
