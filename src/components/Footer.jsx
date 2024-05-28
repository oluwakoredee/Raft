/* eslint-disable no-unused-vars */
import React from 'react'
import logo from "../../src/assets/Logo.png";
import { IoLogoGooglePlaystore } from "react-icons/io5"
import { FaApple } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='px-8 flex flex-col gap-10 xl:relative  '>
        <div className='w-full border-b xl:border-non boreder-[00.09px] xl:flex-row border-[rgba(152,152,152,1)] '>
        <img src={logo} className='h-[86px] w-[211.49px]  ' alt="" />
        </div>
        <div className='flex  justify-around gap-3 border-2 rounded-lg p-2 pt-3 border-dashed xl: xl:absolute xl:mx-[50px] xl:py-3  xl:left-[-0px] xl:w-[350px] xl:bottom-[120px]'>
            <img src="https://res.cloudinary.com/demmasgzp/image/upload/v1716682500/Vector_npxsa8.png" className='bg-white  w-[62.7px] h-[62.7px] xl:mt-1' alt="" />
            <div className='flex flex-col gap-1 '>
                <p className='text-[16px] xl:px-0 text-[rgba(152,152,152,1)]' >Scan to download App on the Playstore and Appstore.</p>
                <div className='flex gap-3'>
                <IoLogoGooglePlaystore />
                <FaApple />
                </div>
            </div>
        </div>
        <div className='flex  xl:flex-row xl:justify-end xl:gap-40 flex-col  gap-8 xl:mr-40'>
            <div className='flex justify-between xl:mt-2  xl:gap-40'>
                <div className='flex flex-col xl:mt-2  gap-1'>
                    <h1 className='pb-2'>About us</h1>
                    <p className='text-[rgba(152,152,152,1)]'>Our company</p>
                    <p className='text-[rgba(152,152,152,1)]'>Careers</p>
                    <p className='text-[rgba(152,152,152,1)]'>Press kits</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <h1  className='pb-2'>Legal</h1>
                    <p className='text-[rgba(152,152,152,1)]'>Terms of use</p>
                    <p className='text-[rgba(152,152,152,1)]'>Privacy policy</p>
                    <p className='text-[rgba(152,152,152,1)]'>About us</p>
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <h1  className='pb-2'>Support</h1>
                <p className='text-[rgba(152,152,152,1)]'>Contact us</p>
                <p className='text-[rgba(152,152,152,1)]'>FAQ</p>
            </div>
        </div>
        <div className='flex justify-between xl:px-5 pb-10'>
            <p>English(United Kingdom)</p>
            <p>&#169; Raft Corp,LLC.</p>
        </div>
    </div>
  )
}

export default Footer