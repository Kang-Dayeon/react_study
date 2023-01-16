import './home.css'
import {posts} from '../../data/post'

const Home = () => {
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

export default Home