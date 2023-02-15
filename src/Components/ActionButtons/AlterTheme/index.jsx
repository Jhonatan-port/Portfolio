import React, { useContext } from 'react'
import { ThemeContext } from '../../../Hooks/ThemeContext'
import {MdOutlineLightMode, MdOutlineDarkMode} from 'react-icons/md'

import './AlterTheme.css'

const AlterTheme = () => {
    const {theme, setTheme} = useContext(ThemeContext)
  return <button className='btn' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>{theme === 'light' ? <MdOutlineDarkMode/>  : <MdOutlineLightMode/>}</button>
}

export default AlterTheme
