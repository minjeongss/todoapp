import React from 'react';

export default function Header({allFilter,nowFilter,onChange}) {
    return <header>
        <ul>
            {
                allFilter.map((value,index)=>
                    <li key={index}><button onClick={()=>onChange(value)}>{value}</button></li>)
            }
        </ul>
    </header>
}

