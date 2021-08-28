import './app.css';
import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list'
import SearchBar from './components/search_bar/search_bar'

function App() {
  const [videos, setVideos] = useState([]);

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
  return (
    <>
      <SearchBar />
      <VideoList videos={videos} />
    </>
  );
}
export default App;
