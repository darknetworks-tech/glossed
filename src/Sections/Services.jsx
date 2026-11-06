import Section from '../components/Section'
import Heading from './Heading'
import {ServiceOne,ServiceTwo,ServiceThree} from '../assets'
import { glossedServices } from '../constants'


const Services = () => {
  return (
    <Section id='how-to-use'>.
        <div className='container'>
            <Heading title='The Three Step Glow' text='We formulated our gloss to bridge the gap between high-fashion shine and deep skincare,
            ensuring that every application treats your lips while it transforms them.' />
            <div className='relative'>
              <div className='relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-l-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem] '>
                <div className='absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5'>
                  <img src={ServiceThree}
                  width={800}
                  height={750}
                  alt='Girl with Lips'/>
                </div>

                <div className='relative 1-2 max-w-[17rem] ml-auto '>
                  <h4 className='h4 mb-[3rem] font-roboto'>The Swipe:<br />Precision meets Comfort</h4>
                  <p className='body-2 mb-[3rem] text-l-2'>Pull our plush, custom-contoured doe-foot applicator from the tube and let it hug the natural curves of your lips</p>
                  <ul className='body-2'>
                    {glossedServices.map((item,index)=>((
                      <li key={index} className='flex items-start py-4 border-t border-d-8'>
                        <p className='ml-4'>{item}</p>
                      </li>
                    )))}
                  </ul>
                </div>

            

              </div>


            <div className='relative z-1 grid grid-cols-1 gap-5 auto-rows-100 lg:grid-cols-2 overflow-hidden'>

              <div className='relative row-span-2 rounded-[35px] overflow-hidden border border-l-1/10'>

              <div className='absolute inset-0'>
                <img src={ServiceTwo}
                className='h-full w-full object-cover'
                width={630}
                height={750}
                alt='Girl with lipstick'/>
              </div>
              

              <div className='absolute flex flex-col justify-end inset-0 p-8 lg:p-15 bg-linear-to-b from-bg-d-9/0 to-black/90 '>
                <h4 className='h4 mb-4'>The Melt: The Skincare Activation</h4>
                <p className='body-2 mb-[3rem]'>As the gloss meets the natural warmth of your skin, our signature blend of botanical oils and 
                  conditioning ingredients actively melts into your moisture barrier. <br />Instead of just sitting heavily on top of your lips like a traditional cosmetic, 
                  it goes to work immediately from the inside out. 
                </p>

              </div>
 
               </div>
              <div className='bg-d-6 overflow-hidden row-span-2 rounded-[35px]'>
                <div className='py-12 px-4 xl:px-8'>
                  <h4 className='h4 mb-5'>The Lip Liner: The Sculpting Velvet</h4>
                  <p className='body-2 mb-[2rem] text-l-1/50'>Our ultra-creamy, tug-free lip liner glides onto the lips like velvet, allowing you to seamlessly contour, define, and enhance your natural shape.<br /> 
                  The smudge-resistant formula creates the perfect boundary to lock your gloss and oil in place all day</p>
                </div>
      

                <div className='relative z-0 h-[40rem] bg-d-7 rounded-2xl overflow-hidden md:h-[45rem]'>
                   
                  <img src={ServiceOne}
                  className='absolute inset-0 z-0 w-full h-full object-cover top-[-70px]'
                  wdith={520}
                  height={400}
                  alt='Trendy-woman with lip-gloss'
                  />
                </div>

                
              </div>
              

            </div>
           

          </div>
            

        </div>


    </Section>
  )
}

export default Services