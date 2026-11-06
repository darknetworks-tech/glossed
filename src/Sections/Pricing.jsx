import Section from "../components/Section"
import Heading from "./Heading"
import PricingCard from "../components/PricingCard"



const Pricing = () => {
  return (
    <Section id='pricing'>
        <div className='container'>
             <Heading title='Premium Gloss, Honest Pricing ' text='High-shine finish, zero hidden costs. 
        Choose your favorites and treat your lips to everyday luxury.' />
        <div className=' relative flex gap-6 overflow-x-auto'>
            <PricingCard />

        </div>


        </div>
      

    </Section>
)
    
  
}

export default Pricing