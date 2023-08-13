import React from 'react';
import {FcEmptyTrash} from 'react-icons/fc';
export default function Todo({todo,onUpdate,onDelete}) {
    const {text,status}=todo;
    const handleChange=(e)=>{
        //console.log("TodoList의 위치: ",e.target.checked);
        const status=e.target.checked ? 'completed' : 'active';
        //console.log("Todo의 위치: ",status);
        onUpdate({...todo,status:status});
    }
    const handleDelete=()=>onDelete(todo);
    return (
        <li>
            <input 
                type="checkbox" 
                id="checkbox" 
                checked={status==='completed'}
                onChange={handleChange}    
            />
            <label htmlFor='checkbox'>{text}</label>
            <button onClick={handleDelete}><FcEmptyTrash /></button>
        </li>
    );
}

