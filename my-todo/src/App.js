import './App.css';
import { useState } from 'react';


function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState([])
  const [id, setId] = useState(1)
  // 인풋값을 todos 변수에 넣기
  const todoAdd = (e) => {
    setInputValue('')
    e.preventDefault()
    setId(id + 1)
    todos.push({
          id : id,
          text: inputValue,
        })
  }
  // 역순 정렬 함수
  const reverce = (e) => {
    e.preventDefault()
    const result = todos.sort((a,b) => {
      if(a.id > b.id) return -1
      else if(b.id > a.id) return 1
      else return 0
    })
    setTodos([...result])
  }
  // 가나다 정렬 함수
  const textSort = (e) => {
    e.preventDefault()
    const result = todos.sort((a,b) => {
      if(a.text < b.text) return -1
      else return 1
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
        <button onClick={todoAdd}>Add</button>
        <button onClick={reverce}>역순정렬</button>
        <button onClick={textSort}>가나다정렬</button>
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
