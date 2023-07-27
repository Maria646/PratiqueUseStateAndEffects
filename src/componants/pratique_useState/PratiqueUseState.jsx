import React, { useState } from 'react';

const TaskList = () => {
    const [textList, setTextList] = useState("");
    const [todo, setTodo] = useState([]);

    const handleTaskChange = (event) =>{
        setTextList(event.target.value)
    }

    const ajoutAuTableau = () => {
        if(textList.trim() ==! ""){
            setTodo([...todo, textList]);
        }
    }


  return (
    <div>
        <input type="search" value={textList} onChange={handleTaskChange} placeholder='Search'  />
        <button onChange = {handleClick}>Ajouter</button>
        <ul>
            {todo.map((todo, index)=>{
                <li>{todo}</li>
            })}
        </ul>
    </div>
  );
};

export default TaskList;


