import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

export default function AddList({onAdd}) {
    const [text,setText]=useState('');
    const handleChange=(e)=>{
        setText(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(text.trim()===''){
            alert('TODO를 입력해주세요!')
        }
        else{
            onAdd({id:uuidv4(),text,status:'active'});
        }
        setText('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange} placeholder='Add TODO'/>
            <button>ADD</button>
        </form>
    );
}

