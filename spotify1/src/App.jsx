import React from 'react'
import Sidebar from './components/Sidebar';
import Display from './components/Display';
import Player from './components/Player';

const App = () => {

  // const {audioRef} = useContext(PlayerContextProvider);

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
        <Player/>
        {/* <audio preload='auto'></audio>  Bota REf boladi */}
    </div>
  )
}

export default App
