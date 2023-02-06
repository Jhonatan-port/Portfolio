import React from 'react'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import './ScrollBtn.css'

const ScrollBtn = ({handle1, handle2}) => {
    return (
        <div className='btn__over'>
            <button onClick={handle1}><FiChevronLeft/></button>
            <button onClick={handle2}><FiChevronRight/></button>
        </div>
    )
}

export default ScrollBtn
