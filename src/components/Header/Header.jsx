import React from 'react';
import styles from './Header.module.css';
export default function Header({allFilter,nowFilter,onChange}) {
    return <header className={styles.header}>
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

