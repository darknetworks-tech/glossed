import {useLocation} from 'react-router-dom'
import { navigation } from "../constants"
import { logo } from "../assets"
import {HamburgerMenu} from "./design/Header"
import MenuSvg from "../assets/svg/MenuSvg"
import Button from './Button'
import { useState } from 'react'
import { disablePageScroll,enablePageScroll } from 'scroll-lock'


const Header = () => {

  const pathname= useLocation();

  const [openNavigation,setOpenNavigation]=useState(false);

  const toggleNavigation = () => {
    if (openNavigation){
      setOpenNavigation(false)
      enablePageScroll()
    } else {
      setOpenNavigation(true)
      disablePageScroll()
    }

  }

  const handleClick =() => {
    setOpenNavigation(false)
    if(!openNavigation) return
    enablePageScroll()
  }

  return (
    <div className={`fixed top-0 left-0 w-full z-50 border-b border-d-4 lg:bg-d-7/90 lg:backdrop-blur-sm
    ${openNavigation ? 'bg-d-7' : 'bg-d-7/90 backdrop-blur-sm'}
    `}>
        <div className='flex items-center px-5 lg:px-10 lg:pt-2 lg:pb-2 xl:px-11 max-lg:py-4 '>
            <a className='block w-48 xl:mr-8'  href='#hero'>
                <p className='font-roboto pt-4 pb-4 font-bold text-2xl'>glossed.</p>
            </a>

            <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-20 left-0 right-0 bottom-0 bg-d-7 lg:static lg:flex lg:mx-auto lg:bg-transparent`} >
              <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
                {navigation.map((item)=>(
                  <a key={item.id} href={item.url}  onClick ={handleClick} className={`block relative font-google-sans text-2xl uppercase text-l-1 transition-colors hover:text-l-1
                    ${item.onlyMobile ? 'lg:hidden' : ''} px-5 py-5 md:-y-8 lg:mr-0.25 lg:text-xs lg:font-semibold
                    ${item.url===pathname.hash ? 'z-2 lg:text-l-1' : 'lg:text-l-1/50'} lg:leading-5 lg:hover:text-l-2 xl:px-12
                    
                    `}>
                      {item.title}
                  </a>
                ))}

              </div>

              <HamburgerMenu />

            </nav>

            <a href='#signup' className='button hidden mr-8 text-l-1/50 transition-colors hover:text-n-1 lg:block'>
              New account
            </a>

            <Button className='hidden! lg:flex! text-center' href ='#login' white >Sign in </Button>

            <Button className='ml-auto lg:hidden' px='px-3' onClick={toggleNavigation} >
              <MenuSvg openNavigation={openNavigation} />
            </Button>



        </div>

    </div>
  )
}

export default Header