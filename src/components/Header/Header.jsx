import React from 'react';
import styles from './Header.module.css';
import { useDarkMode } from '../../context/DarkModeConetxt';
import {BiSun,BiMoon} from 'react-icons/bi';

export default function Header({allFilter,nowFilter,onChange}) {
    const {darkMode,toggleDarkMode}=useDarkMode();
    const handleDarkMode=()=>{
        toggleDarkMode();
    }
    return <header className={styles.header}>
        <button onClick={handleDarkMode} className={styles.toggle}> 
            {!darkMode&&<BiMoon />}
            {darkMode&&<BiSun />}
        </button>
        <ul className={styles.filters}>
            {
                allFilter.map((value,index)=>
                    <li key={index}>
                        <button 
                            onClick={()=>onChange(value)} 
                            className={`${styles.filter} ${nowFilter===value&&styles.selected}`}>{value}
                        </button>
                    </li>)
            }
        </ul>
    </header>
}

