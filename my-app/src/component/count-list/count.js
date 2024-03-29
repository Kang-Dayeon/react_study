import '../../App.css';
import './count.css';
import { useEffect, useState } from 'react';
import { increaseCount, decreaseCount } from '../../reducers/count';
import { useDispatch, useSelector } from 'react-redux';

const Count = () => {
  // 1. 클릭할때마다 배열 추가
  // 2. 화면에 배열 뿌리기
  // 3. 배열을 복사해서 역방향으로 뿌려주기
  // const [listIndex, setListIndex] = useState(0)
  // const [counter, setCount] = useState(0)
  // const [newList, setNewList] = useState([])npm
  // const [list, setList] = useState([])

  const dispatch = useDispatch()
  const {count} = useSelector(state => state.counter);
  const increase = () => {
    dispatch(increaseCount(count + 1))
  }
  const decrease = () => {
    dispatch(decreaseCount(count - 1))
  }

  // const pCount = () => {
  //   setCount(counter + 1)
  // }
  // const mCount = () => {
  //   setCount(counter - 1)
  // }
  // const listAdd = () =>{
  //   setListIndex( listIndex + 1)
  //   list.push({
  //     id: listIndex,
  //     text: 'num : '
  //   })
  // }
  // const reverse = () => {
  //   const listCopy = [...list]
  //   const result = listCopy.sort((a, b) => {
  //     if( a.id > b.id) return -1
  //     else if( b.id > a.id ) return 1
  //     else return 0
  //   })
  //   setNewList([...result])
  // }

  // useEffect(()=>{
  //   listAdd()
  //   setList([...list])
  //   reverse()
  //   // console.log(newList)
  //   return () => {
  //     console.log('end');
  //   }
  // }, [counter])
  return (
    <div>
      <h1>{ count }</h1>
      <button onClick={ increase }>+1</button>
      <button onClick={ decrease }>-1</button>
      {/* <button onClick={ mCount }>-1</button> */}
      {/* <div className='list-box'>
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

      </div> */}
    </div>
  );
}

export default Count;
