import '../../App.css';
import './light.css'
import Light from './light'

const LightRoom = () => {
  return (
    <>
      <div className='light-room-wrap'>
        <div className='light-room'>
          <Light />
          <Light />
          <Light />
          <Light />
        </div>
      </div>
    </>
  )
}


export default LightRoom;
