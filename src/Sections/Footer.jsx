import Section from "../components/Section";
import { socials } from "../constants";


const Footer = () => {
  return (
    <Section className='!px0 !py-10' >
        <div className='container flex sm:justify-center justify-between items-center gap-10 max-sm:flex-col'>
            <p className='caption text-l-1 lg:block'>{new Date().getFullYear()} .All rights reserved</p>
            <ul className='flex gap-5 flex-wrap'>
                {socials.map((item)=>(
                    <a key={item.id} href={item.url} target="_blank" className='flex items-center justify-center w-10 h-10 bg-d-7 transition-colors hover:bg-d-3'>
                        <img src={item.iconUrl} width={16} height={16} alt={item.title} />
                    </a>
                ))}
            </ul>


        </div>

    </Section>
  
  )
}

export default Footer