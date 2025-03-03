import { useState } from 'react'
import './App.css'
import VideoCard from './VideoCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">

      <div className="app_top">
        <img className="app_logo" src="https://static.vecteezy.com/system/resources/previews/018/930/415/large_2x/instagram-logo-instagram-icon-transparent-free-png.png" alt="" />

        <h1>Reels</h1>
      </div>

      <div className="app_videos">
        <VideoCard
          channel = 'Instagram'
          avatar = ''
          url = 'https://videos.pexels.com/video-files/4434242/4434242-sd_540_960_24fps.mp4'
          song='Song 01'
          likes={507}
          shares={211} 
        />
        <VideoCard
          channel = 'Instagram'
          avatar = ''
          url = 'https://videos.pexels.com/video-files/8382685/8382685-hd_720_1366_25fps.mp4'
          song='Song 02'
          likes={200}
          shares={100} 
        />
        <VideoCard
          channel = 'Instagram'
          avatar = ''
          url = 'https://videos.pexels.com/video-files/4821113/4821113-hd_720_1366_25fps.mp4'
          song='Song 03'
          likes={90}
          shares={32} 
        />
        <VideoCard
          channel = 'Instagram'
          avatar = ''
          url = 'https://videos.pexels.com/video-files/6660934/6660934-hd_720_1366_25fps.mp4'
          song='Song 04'
          likes={605}
          shares={27} 
        />
      </div>
    
    
    
    </div>
  )
}

export default App
