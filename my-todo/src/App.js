import './App.css';
import { useState, useEffect } from 'react';


function App() {
  // 1. 인풋박스에서 입력후 엔터치면 화면에 뿌려주기
  const [todos, setTodos] = useState([]) 
  const [id, setId] = useState(0)
  const [inputValue, setInputValue] = useState([])
  const onClick = (e) => {
    setInputValue('')
    e.preventDefault()
    setId(id + 1)
    todos.push({
          id : id,
          text: inputValue,
        })
  }
  // useEffect(()=>{
  //   console.log(todos)
  //   return () => {
  //     console.log(inputValue);
  //   }
  // }, [todos])
  return (
    <div className="App">
      <h1 className="title">Todo List</h1>
      <form className="todo-form">
        <input
        value={inputValue}
        placeholder="Todo List를 작성 해 보세요."
        onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={onClick}>Add</button>
      </form>
      <ul className="list-wrap">
        {
          todos.map((todo) => {
            return <li className="todo-list"><span>{todo.id}</span>{todo.text}</li>
          })
        }
      </ul>
    </div>
  );
}


export default App;
