import { useState, useEffect } from 'react';

const PratiqueUseState = () => {
    const [textList, setTextList] = useState("");
    const [todo, setTodo] = useState([]);

    const handleTaskChange = (event) =>{
        setTextList(event.target.value)
    }

    const ajoutAuTableau = () => {
        if(textList){
            console.log(textList);
            setTodo([...todo, textList]);
            setTextList("");
        }
    }

    useEffect(() => {
        console.log(todo);
      }, [todo]);


  return (
    <div>
        <input type="text" value={textList} onChange={handleTaskChange} placeholder='Search'/>
        <button onClick={ajoutAuTableau}>Ajouter</button>
        <ul>
            {todo.map((tod, index) => (
                <li key={index}>{tod}</li>
            ))}
        </ul>
    </div>
  );
};

export default PratiqueUseState;




