import './App.css';
import { useState, useEffect } from 'react';


function App() {
  // 1. 인풋박스에서 입력후 엔터치면 화면에 뿌려주기
  const [todos, setTodos] = useState([])
  // const [nweTodos, setNewTodos] = useState([])
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
  const reverce = (e) => {
    e.preventDefault()
    const result = todos.sort((a,b) => {
      if(a.id > b.id) return -1
      else if(b.id > a.id) return 1
      else return 0
    })
    setTodos([...result])
  }
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
        <button onClick={reverce}>역순정렬</button>
        <button>가나다정렬</button>
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
