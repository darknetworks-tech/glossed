import {useState} from "react";
import {products} from '../constants'

const ShopCard = () => {
    const [stopScroll,setStopScroll]=useState(false);
    const [activeCard,setactiveCard]=useState(null);
  return (
    <>
    <style>
        {`
        .marquee-inner{
        animation: marqueeScroll linear infinite;
        
        }
        @keyframes marqueeScroll {
            0% {
                transform: translateX(0%);
            }
            100% {
                transform: translateX(-50%);
            
            }
        }
        `}
    </style>

    <div
    className='overflow-hidden w-full relative max-w-6xl mx-auto'
    onMouseEnter={ () => setStopScroll(true)}
    onMouseLeave={() => {
        setStopScroll(false);
        setactiveCard(null);
  }}
  
    >
         <div className='absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-d-7 to transparent' />
       
        <div className='marquee-inner flex w-fit'
        style={{
            animationPlayState: stopScroll ? 'paused' : 'running',
            animationDuration: `${products.length * 2500}ms`,
        }}>
            <div className='flex'>
              {[...products, ...products].map((card) =>(
                <div 
                key={card.id}
                className='w-56 mx-4 h-[26rem] relative group hover:scale-90 transition-all duration-300'
                onClick={()=> {
                    setactiveCard(activeCard ===index ? null : index);
                    setStopScroll(activeCard !== index);
                }}
                 >
                    <img
                    src={card.image}
                    alt="card"
                    className='w-full h-full object-cover'
                    
                    />
                    <div className={`absolute inset-0 flex flex-col items-center justify-center px-4 transition-all duration-300 bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20
                        ${
                        activeCard===card.id 
                        ? "opacity-100"
                        :"opacity-0 group-hover:opacity-100"

                    } `}>
                
                    <p className='text-white text-lg font-semibold text-center'>
                        {card.title}
                    </p>
                    <p className='text-xs text-white text-center'>
                        {card.text}
                    </p>
                    <p className='text-white text-lg font-semibold text-center'>
                        {card.price}
                    </p>
                    </div>

                    
                </div>

              ))}
                

            </div>
            

        </div>
          <div className='absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-linear-to-l from-d-7 to transparent' />
        

        




    </div>
    </>
  )
}

export default ShopCard