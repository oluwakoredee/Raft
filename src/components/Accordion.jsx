/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import { FaAngleDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const Accordion = ({title, answer }) => {
    const [show, setShow] = useState(false)
    return (
        <div className='p-2 xl:p-4  mx-4  border-b-[0.09px] text-start border-[rgba(152,152,152,1)] flex flex-col w-full pr-  text-white'>
            <button onClick={ () => setShow(!show)} className='flex text-start gap-1 justify-between w-full items-center' >
                <span>{title}</span>
                {show ? <span><FaChevronUp className='text-[20px]' /></span> : <span><FaAngleDown className='text-[30px]'  /></span>}
                
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                show?'grid-rows-[1fr] opacity-100':'grid-rows-[0fr] opacity-0'
            }`}>
                <div className=' overflow-hidden'>{answer}</div>
            </div>
        </div>
    )
}

export default Accordion