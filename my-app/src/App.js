import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

  const Count = () => {
    const [counter, setCount] = useState(0)
    const [list, chengeList] = useState([])
    const [newList, setNewList] = useState([...list])
    let newCounter = ['list1']
    let newCounter2 = ['list2']
    const pCount = () => {
      setCount(counter + 1)
      reverce()
    }
    const mCount = () => {
      setCount(counter - 1)
      reverce()
    }
    const reverce = () => {
      console.log(newList.indexOf())
    }
    
    
    useEffect(()=>{
      chengeList([...list,newCounter])
      setNewList([...newList,newCounter2])
      // console.log(list)
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
            list.length > 0 && list.map((item, sum) => {
              return <p>{item}:{sum}</p>
            })
          }
          </div>
          <div className='list'>
          {
          newList.length > 0 && newList.map((item, sum) => {
              return <p>{item}:{sum}</p>
            })
          }
          </div>
        
        </div>
      </div>
    );
  }

export default Count;
