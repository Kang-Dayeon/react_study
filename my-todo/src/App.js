import './App.css';
import { useState, useRef, useCallback, cn } from 'react';


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'testtest',
    },
    {
      id: 2,
      text: 'testtest22222222',
    },
    {
      id: 3,
      text: 'testtest3333333333',
    }
  ]) 
  const nextId = useRef(4)
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId,
        text,
      }
      setTodos(todos.concat(todo))
      // concat : 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열 반환
      nextId.current++
    },
    [todos]
  )
  return (
    <div className="App">
      <h1 className="title">Todo List</h1>
      <TodoInsert onInsert={onInsert}/>
      <TodoList
        todos = {todos}
      >
        <TodoItem />
      </TodoList>
    </div>
  );
}

const TodoList = ({todos}) => {
  return(
    <ul className="list-wrap">
      {
        todos.map((todo) => {
          <TodoItem
          todo = {todo}
          key = {todo.id}
          />
        })
      }
    </ul>
  )
}
const TodoItem = ({todo}) => {
  const {id, text} = todo;
  return(
    <li className="todo-list">
        <div className="text">{id}:{text}</div>
    </li>
  )
}
const TodoInsert = ({onInsert}) => {
  const [value, setValue] = useState('')
  const onChenge = useCallback( e =>{
    setValue(e.target.value);
  },[])
  // onChenge 이벤트 : 입력창에 친 값을 추적해서 setValue에 저장
  // useCallback : 리랜더링할때 낭비를 방지하기 위해서 전에 생성된 함수를 다시 재활용 하기위해 사용
  const onSubmit = useCallback(
    e => {
      onInsert(value)
      setValue('')
      e.preventDefault()
    }
  ,[onInsert, value])
  // todo 배열에 새 데이터를 추가하는 함수
  return(
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
      onChenge={onChenge}
      value={value}
      placeholder="Todo List를 작성 해 보세요."
      />
      <button type="submit">
        Add
      </button>
    </form>
  )
}

export default App;
