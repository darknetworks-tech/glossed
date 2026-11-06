import Button from "../components/Button"
import Section from "../components/Section"
import {motion} from "framer-motion";

const Hero = () => {
  return (
    <Section
    className=' relative min-h-screen flex items-center justify-center mt-[-5.25]'
    id='hero'>
        {/* Background video*/}

        <motion.video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className='absolute inset-0  w-full h-full object-cover flex justify-center'
        initial={{ opacity:0,scale:1.05 }}
        animate={{ opacity:1,scale:1 }}
        transition={{duration:5,ease:"easeOut"}}
        
        >
            <source src ='/videos/hero-bg.mp4' type="video/mp4" />
            
        </motion.video>
        <div className='absolute inset-0 bg-black/80' />

        <div className='container relative flex justify-center '>
            <div className='relative z-1 max-w-248 mx-auto text-center mb-16 md:mb-20 lg:mb-24'>
                <motion.h1 
                className='h1 mb-6'
                initial={{opacity:0, y:40}}
                animate={{opacity:1, y:0}}
                transition={{duration:2,delay:0.3}}
                
                >
                    Elevate your routine with a <br className='hidden md:block'/>
                    high-<span className='text-d-2'>shine</span> gloss crafted to feel <br className='hidden md:block' />
                    completely and authentically you.

                </motion.h1>

                <p className='body-1 max-w-3xl mx-auto mb-6 text-l-1/50 lg:mb-8'>
                    Smooth, non stick lip gloss made to keep your lips radiant for hours<br className='hidden md:block'/>
                    {" "}from soft everyday nudes to bold statement shades
                </p>

                <Button href='/pricing' white >
                Get Started
                </Button>

            </div>
        </div>
        

    </Section>
  )
}

export default Hero

