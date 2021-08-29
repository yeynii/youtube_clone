import "./app.css";
import React, { useEffect, useState, useCallback } from "react";
import VideoList from "./components/video_list/video_list";
import SearchBar from "./components/search_bar/search_bar";
import PlayedVideo from "./components/played_video/played_video";

function App() {
  const [videos, setVideos] = useState([]);
  const [id, setId] = useState();
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const handleSearch = useCallback((searchInput) => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchInput}&key=AIzaSyB0DtPWej5h2ninYUvTVRR6hifNiwF6k5U`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  const handleVideo = useCallback((clikedId) => setId(clikedId), []);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyB0DtPWej5h2ninYUvTVRR6hifNiwF6k5U",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <section className="main-section">
        {id && <PlayedVideo id={id} />}
        <VideoList videos={videos} onVideo={handleVideo} />
      </section>
    </>
  );
}
export default App;
