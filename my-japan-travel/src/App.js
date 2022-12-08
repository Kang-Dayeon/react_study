import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <h1 className='title'>My Japan Travel</h1>
      </header>
      <section className='content'>
        <div className='post'>
          <h3 className='post_title'>Day 1</h3>
          <div className='post_content'>
            <img className='post_img' src='./img/japan_01.jpeg'></img>
            <p className='post_desc'>오사카 여행 첫번째 장소는 오사카성 🏯</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
