import React from 'react'
import {MdLocationPin} from 'react-icons/md'

function Header() {
    const logo = 'https://upload.wikimedia.org/wikipedia/sco/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/446px-Starbucks_Corporation_Logo_2011.svg.png?20170312192423'

    return (
        <>
            <div className="absolute top-0 whitespace-nowrap overflow-hidden z-50 bg-white shadow-md w-full font-bold tracking-wide text-sm px-10 py-4 flex min-[1023px]:justify-between justify-center items-center ">
                    <ul className="flex gap-6 items-center">
                        <a className="max-[1023px]:w-10 max-[1023px]:h-10 w-12 h-12">
                            <img src={logo} className="w-full" alt="" />
                        </a>
                        <span className='min-[1023px]:flex gap-6 hidden'>
                            <a href='' className=" text-stone-800">STARBUCKS REWARD</a>
                            <a href='' className=" text-stone-800 ">MENU</a>
                            <a href='' className=" text-stone-800 ">KAMPANYALAR</a>
                            <a href='' className=" text-stone-800 ">E-GIFT</a>
                            <a href='' className=" text-stone-800 ">KURUMSAL SATIŞ</a>
                        </span>
                    </ul>
                    <ul className="items-center gap-8 min-[1023px]:flex hidden">
                        <li className='flex text-base items-center gap-4'>
                            <a href="" className='flex items-center gap-2'><MdLocationPin className='text-2xl'/> Mağazalarımız</a>
                            <a href="" className=' text-sm flex items-center gap-2 rounded-full py-2 px-4 font-extrabold bg-green-700 text-white'>Alışverişe Başla</a>
                        </li>
                        <li className='flex text-base items-center gap-4'>
                            <a href="" className='flex text-sm items-center gap-2 px-4 py-2 border border-black rounded-full'>Giriş</a>
                            <a href="" className='text-sm flex items-center gap-2 rounded-full py-2 px-4 font-extrabold bg-black text-white'>Hemen Katıl</a>
                        </li>
                    </ul>
            </div>
        </>
    )
}

export default Header