import { CircleUserRound, SquarePen, X, Bell } from 'lucide-react'
import React, { FC } from 'react'

interface IMobileVisible {
    visible: boolean
    setVisibleMobileMenu: (value: boolean) => void
}

const MobileMenu: FC<IMobileVisible> = ({visible, setVisibleMobileMenu}) => {
  console.log(visible)
  return (
    <div className={`fixed w-full h-screen transition-all duration-500 ${visible ? 'right-0 z-[1] opacity-1' : '-right-[100%] -z-[1] opacity-0'}  top-0  bg-[#e35c5c] px-[15px] `}>
        <div className="text-[#FFF]  w-full h-full"> 
          <div className='absolute top-0 left-0 w-full h-[110px] px-[15px] flex items-center justify-between max-[600px]:h-[70px]'>
            <a className='text-[#FFF] font-NewAmsterdam text-[50px] font-bold tracking-wider' href="">Buletin</a>
            <button onClick={() => setVisibleMobileMenu(false)}><X size={20} strokeWidth={2} /></button>
          </div>
          <div className='flex flex-col justify-center items-center w-full h-full gap-[5px]'>
            <div className='grid grid-cols-2 gap-[5px]'>
                <a className='w-[100px] h-[100px] bg-[#FFF] text-[#e35c5c] flex justify-center items-center' href="">Stories</a>
                <a className='w-[100px] h-[100px] bg-[#FFF] text-[#e35c5c] flex justify-center items-center' href="">Creator</a>
                <a className='w-[100px] h-[100px] bg-[#FFF] text-[#e35c5c] flex justify-center items-center' href="">Community</a>
                <a className='w-[100px] h-[100px] bg-[#FFF] text-[#e35c5c] flex justify-center items-center' href="">Subscribe</a>
            </div>
            <div className='grid grid-cols-3 gap-[5px]'> 
              <a className='w-[65px] h-[65px] flex gap-[3px] bg-[#FFF] flex justify-center items-center' href="">
                <SquarePen color='#e35c5c' size={15} strokeWidth={2.5} />
              </a>
              <button className='w-[65px] h-[65px] bg-[#FFF] relative after:absolute after:top-[50%] after:-translate-y-[90%] after:translate-x-[40%] after:w-[10px] after:h-[10px] after:bg-[#e35c5c] after:rounded-[10px] after:border-[2px] after:border-[#FFF] flex justify-center items-center'>
                <Bell color='#e35c5c' size={15} strokeWidth={2.5} />
              </button>
              <a className='w-[65px] h-[65px] bg-[#FFF] flex justify-center items-center' href="#"><CircleUserRound color='#e35c5c' size={20} strokeWidth={2} /></a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MobileMenu