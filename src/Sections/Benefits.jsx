import Heading from './Heading'
import Section from "../components/Section";
import {benefits} from '../constants'
import {GradientLight} from '../components/design/Benefits'

const Benefits = () => {
  return (
    <Section id='features'>
        <div className='container relative z-2'>
            <Heading className='md:max-w-md lg:max-w-2xl' title='Crafted for a flawless, long-lasting glow that never backs down.'/>

            <div className='flex flex-wrap justify-center items-center gap-10 mb-10'>
                {benefits.map((item)=>(
            <div className='relative border border-l-1/10 p-0.5 w-full md:max-w-[24rem] rounded-[72px]'
         
            key={item.id}>
                <div className='relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none'>
                    <h5 className='h5 mb-5'>{item.title}</h5>
                    <p className='body-2 mb-6 text-l-2'>{item.text}</p>
                    <div className='flex items-center mt-auto'>
                        <img src ={item.iconUrl} width={48} height={48} alt={item.title} />
                        <p className='ml-auto font-google-sans text-xs font-bold text-l-1 uppercase tracking-wider'>Explore More</p>
                    </div>
                </div>

                {item.light && <GradientLight /> }

                <div className='absolute inset-0.5 opacity-0 transition-opacity hover:opacity-10 bg-d-7 overflow-hidden rounded-[35px]' >
                    {item.imageUrl && (
                        <img
                        src={item.imageUrl}
                        width={380}
                        height={362}
                        alt={item.title}
                        className='w-full h-full object-cover rounded-[70px]'
                        />
                    )}
                </div>

                
                    
            </div>

                ))}
            </div>

        </div>

    </Section>
  )
}

export default Benefits