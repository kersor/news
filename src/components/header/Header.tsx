import { Bell, CircleUserRound, Menu, SquarePen } from 'lucide-react'
import React, { useState } from 'react'
import MobileMenu from './MobileMenu'

const Header = () => {

    const [visibleMobileMenu, setVisibleMobileMenu] = useState<boolean>(false)

  return (
    <div className="max-w-[1300px] px-[15px] mx-auto flex items-center justify-between h-[110px] max-[600px]:h-[70px]">
        <div className='flex items-center gap-[30px]'>
            <a className='text-[#e25c5b] font-NewAmsterdam text-[50px] font-bold tracking-wider' href="">TechPulse</a>
            <div className='w-[1px] h-[20px] bg-[#6e6e6e] max-[800px]:hidden'></div>
            <div className="flex gap-[30px] relative text-[14px] font-medium text-[#616161] max-[1100px]:gap-[10px] max-[800px]:hidden">
                <a href="">Stories</a>
                <a href="">Creator</a>
                <a href="">Community</a>
                <a href="">Subscribe</a>
            </div>
        </div>
        <div className='flex items-center gap-[15px] max-[800px]:hidden'>
            <a className='flex gap-[3px] items-center text-[14px] font-medium text-[#616161]' href=""><SquarePen color='#616161' size={15} strokeWidth={2.5} />Write</a>
            <button className='relative after:absolute after:top-[2px] after:right-0 after:w-[7px] after:h-[7px] after:bg-[red] after:rounded-[10px] after:border after:border-[#FFF]'><Bell color='#616161' size={15} strokeWidth={2.5} /></button>
            <a href="#"><CircleUserRound color='#616161' size={20} strokeWidth={2} /></a>
        </div>
        <div className='h-[24px] min-[800px]:hidden'>
            <button onClick={(e) => setVisibleMobileMenu(true)}><Menu color='red' /></button>
        </div>
        <MobileMenu visible={visibleMobileMenu} setVisibleMobileMenu={setVisibleMobileMenu} />
    </div>
  )
}

export default Header