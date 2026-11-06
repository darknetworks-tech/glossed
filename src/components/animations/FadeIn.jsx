import {motion} from "framer-motion";



const FadeIn = ({children,delay,duration,y=30}) => {
  return (
    <motion.div

       initial={{
            opacity:0, y
        }}

        whileInView={{
            opacity:0, y:0,
        }}
        transition={{
            duration,
            delay,
            ease:"easeOut",
        }}
        viewport={{
            once:true,
            amount:0.3,
        }}>
            {children}

     



    </motion.div>
  )
}

export default FadeIn