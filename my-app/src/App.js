import './App.css';
import { useEffect, useState } from 'react';

  const Count = () => {
    // 1. 클릭할때마다 배열 추가
    // 2. 화면에 배열 뿌리기
    // 3. 배열을 복사해서 역방향으로 뿌려주기
    const [listIndex, setListIndex] = useState(0)
    const [counter, setCount] = useState(0)
    const [newList, setNewList] = useState([])
    const [list, setList] = useState([])

    const pCount = () => {
      setCount(counter + 1)
    }
    const mCount = () => {
      setCount(counter - 1)
    }
    const listIndexCounter = () => {
      setListIndex( listIndex + 1)
    }
    const listAdd = () =>{
      list.push({
        id: listIndex,
        text: 'num : '
      })
    }
    const reverse = () => {
      const listCopy = [...list]
      const result = listCopy.sort((a, b) => {
        if( a.id > b.id) return -1
        else if( b.id > a.id ) return 1
        else return 0
      })
      setNewList([...result])
    }
    
    useEffect(()=>{
      listIndexCounter()
      listAdd()
      setList([...list])
      reverse()
      // console.log(newList)
      return () => {
        console.log('end');
      }
    }, [counter])
    return (
      <div>
        <h1>{counter}</h1>
        <button onClick={ pCount }>+1</button>
        <button onClick={ mCount }>-1</button>
        <div className='list-box'>
          <div className='list'>
          {
            list.length > 0 && list.map((item) => {
              return <p>{[item.text,item.id]}</p>
            })
          }
          </div>
          <div className='list'>
          {
            newList.length > 0 && newList.map((item) => {
              return <p>{[item.text,item.id]}</p>
            })
          }
          </div>
        
        </div>
      </div>
    );
  }

export default Count;
