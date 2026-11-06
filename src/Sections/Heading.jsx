import {motion} from "framer-motion"

const Heading = ({className,title,text,}) => {
  return (
    <motion.div className={`${className} max-w-200 mx-auto mb-12 lg:mb-20 md:text-center`} 
    initial={{ opacity:0,y: 30}}
    whileInView={{ opacity:1, y: 0}}
    transition={{ duration:2,}}
    viewport={{ once:true,
      amount:0.3
    }}>

        {title && <h2 className='h2'>{title}</h2>}
        {text && (
          <p className='body-2 mt-4 text-l-1'>{
            text}
          </p>
        )}
    
    </motion.div>
  )
}
export default Heading
