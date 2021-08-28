import './app.css';
import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list'

function App() {
  const [videos, setVideos] = useState([]);
  const [name, setName] = useState('yeyun');

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDg4yuI73sC0RnI_L15Wg5H78IWaLbWQQs", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);
  return <VideoList videos={videos} />;
}
export default App;
