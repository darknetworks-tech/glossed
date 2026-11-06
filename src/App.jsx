import Header from "./components/Header"
import ButtonGradient from "./assets/svg/ButtonGradient"
import Hero from "./Sections/Hero"
import Benefits from "./Sections/Benefits"
import Services from "./Sections/Services"
import Shop from "./Sections/Shop"
import Pricing from "./Sections/Pricing"
import Footer from "./Sections/Footer"



const App = ()=>{

  return (
    <>
    <div className='pt-19 lg:pt-21 overflow-hidden overflow-x-hidden'>

      <Header />
      <Hero />
      <Benefits />
      <Services />
      <Shop />
      <Pricing />
      <Footer />


    </div>
  
     
    </>
  )
}

export default App
