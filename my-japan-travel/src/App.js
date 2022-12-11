import './App.css';
import { useState } from 'react';

function App() {
  let [posts, postChange] = useState([
    {
      id: 1,
      img: './img/japan_01.jpeg',
      desc: '간사이 여행 첫번째 장소는 오사카성 🏯'
    },
    {
      id: 2,
      img: './img/japan_02.jpeg',
      desc: '간사이 여행 두번째 장소는 나라 사슴공원 🦌'
    },
    {
      id: 3,
      img: './img/japan_03.jpeg',
      desc: '간사이 여행 세번째 장소는 교토 기요미즈데라 ⛩ 단풍이 절경이였다!'
    },
    {
      id: 4,
      img: './img/japan_04.jpeg',
      desc: '간사이 여행 4번째는 쇼핑데이~💸'
    },
    {
      id: 5,
      img: './img/japan_05.jpeg',
      desc: '간사이 여행 다섯번째 장소는 유니버셜 스튜디오 🎡'
    },
    {
      id: 6,
      img: './img/japan_06.jpeg',
      desc: '간사이여행 마지막 여행지는 교토 아라시야마 🍡 사실 여기가 제일 좋아하는 장소ㅎㅎ'
    },
  ]);

  return (
    <div className='App'>
      <header className='header'>
        <h1 className='title'>My Japan Travel</h1>
      </header>
      <section className='content'>
        {
          posts.map((a,i) => {
            return <Post posts={a} num={i} key={i}/>
          })
        }
      </section>
      <footer className='footer'>
        <h3 className='copyright'>Copyright kangDayeon</h3>
      </footer>
    </div>
  );
}

function Post(props) {
  
  return(
    <div className='post'>
      <h3 className='post_title'>Day {props.posts.id}</h3>
      <div className='post_content'>
        <div className='post_img_wrap'>
          <img className='post_img' src={props.posts.img}></img>
        </div>
        <p className='post_desc'>{props.posts.desc}</p>
      </div>
    </div>
  )
}

export default App;
