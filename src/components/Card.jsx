 
import {motion} from "framer-motion"

const Card = ({title,description,image,price}) => {
  return (
    <motion.div 
 
    whileHover={{
        y:-8,
        scale:1.25,
    }}
    whileTap={{
      scale:1.2,
    }}
   
    className='flex justify-center items-center flex-col h-80 rounded-[35px] bg-d-7 p-6'>
        <img 
        src={image}
        alt='Custom-Image'
        className='rounded-2xl object-cover w-full h-40'
        />
        
        <h4 className='h4 text-center mb-4 font-roboto'> {title} </h4>
        <p className='body-2 text-center mt-7 max-w-sm'> {description} </p>
        <p className='font-bold mt-2 text-center'> {price} </p>


    </motion.div>
  )
}

export default Card  


