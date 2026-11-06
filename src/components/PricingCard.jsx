import  Button  from "../components/Button"
import { pricing } from "../constants"
import { benefitIcon3 } from "../assets"

const PricingCard = () => {
  return (
    <div className='w-full flex justify-center items-stretch flex-wrap gap-4 max-lg:flex-wrap'>
        {pricing.map((item)=>(
            <div key={item.id}
            className='w-[30rem] max-w-full h-full bg-d-6 border border-l-4/20 rounded-[4rem]  even:py-14 odd:py-8 '
            
            >
                <h4 className='text-white h4 mb-4 text-center'>
                    {item.title}
                </h4>
                <p className='body-2 min-h-[4rem] text-white/50 text-center p-2'>
                    {item.text}
                </p>

                <div className='flex items-center justify-center h-[7rem] mb-6'>
                    {item.price && (
                        <>
                        <div className='h3'>₦</div>
                        <div className='text-[5.5rem] leading-none font-bold '>{item.price}</div>
                        </>
                    )}
                    
                </div>
                <Button className='w-full mb-6 mx-auto' 
                href={item.price ? '/pricing' : 'mailto:oparah.samuel28@gmail.com'}
                white={!!item.price}>
                    {item.price ? 'Get Started' : 'Contact us'}
                </Button>

                <ul className='w-full max-w-[28rem] mx-auto px-5'>
                    {item.features.map((features,index)=>(
                        <li key={index} className='flex items-start gap-3 py-5 border-t border-d-2'>
                            <img
                            src={benefitIcon3}
                            width={24}
                            height={24}
                            alt='Check'
                            className='shrink-0 mt-1'
                            
                            />
                            <p className='body-2 min-w-0 text-white/70 leading-relaxed flex-1'>{features}</p>



                        </li>
                    ))}
                </ul>
            </div>
            
        ))}


    </div>
  )
}

export default PricingCard