import Section from "../components/Section"
import Heading from "./Heading"
import ShopCard from "../components/ShopCard"

const Shop = () => {
  return (
    <Section id='shop'>
        <div className='container'>
            <Heading title='Find Your Perfect Gloss' text='From soft, natural tints to bold, glossy finishes, find the shade that makes your lips feel effortlessly beautiful.' />
            <div className='flex gap-6 overflow-x-auto'>
              

              <ShopCard />
                 

            </div>

        </div>

    </Section>
  )}

export default Shop