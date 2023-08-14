import React from 'react';
import {FcEmptyTrash} from 'react-icons/fc';
import styles from './Todo.module.css';

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
        <li className={styles.todo}>
            <input 
                type="checkbox" 
                id="checkbox" 
                checked={status==='completed'}
                onChange={handleChange}
                className={styles.checkbox}    
            />
            <label htmlFor='checkbox' className={styles.text}>{text}</label>
            <span className={styles.icon}>
                <button onClick={handleDelete} className={styles.button}><FcEmptyTrash /></button>
            </span>
        </li>
    );
}

