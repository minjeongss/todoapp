import React, { useState } from 'react';
import AddList from '../AddList/AddList';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';
export default function TodoList({nowFilter}) {
    const [todo,setTodo]=useState([
        {id:'1',text:'공부하기',status:'active'},
        {id:'2',text:'노래듣기',status:'active'}
    ]);
    const handleAdd=(added)=>{
        setTodo([...todo,added])
    }
    const handleUpdate=(updated)=>{
        //console.log("TodoList의 위치: ",updated);
        setTodo(todo.map(item=>item.id===updated.id? updated : item));
    }
    const handleDelete=(deleted)=>{
        setTodo(todo.filter(item=>item.id!==deleted.id));
    }
    const filtered=UpdateFilter({todo,nowFilter});

    return (
        <section className={styles.container}>
            <ul className={styles.list}>
                {
                    filtered.map(item=>(
                        <Todo 
                            key={item.id}
                            todo={item}
                            onUpdate={handleUpdate}
                            onDelete={handleDelete}
                        />
                    ))
                }
            </ul>
            <AddList onAdd={handleAdd}/>
        </section>
    );
}

function UpdateFilter({todo,nowFilter}){
    if(nowFilter==='all'){
        return todo; //전체를 출력
    }
    return todo.filter(item=>item.status===nowFilter); //현재 status만 해당되게 출력
}