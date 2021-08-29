import React, { useState, useEffect } from "react";
import "./played_video.css";

const PlayedVideo = (props) => {
  let id = props.id.videoId ? props.id.videoId : props.id;
  const [video, setVideo] = useState();
  const handleBack = () => {
    setVideo();
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyB0DtPWej5h2ninYUvTVRR6hifNiwF6k5U`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideo(result.items[0]))
      .catch((error) => console.log("error", error));
    console.log(video);
  }, [id]);

  return (
    <>
      {video && (
        <section className="current-video">
          <div className="go-back" onClick={handleBack}>
            <i className="fas fa-chevron-left"></i>
            <span>뒤로가기</span>
          </div>
          <div className="video-frame">
            <iframe
              id="ytplayer"
              type="text/html"
              src={`https://www.youtube.com/embed/${id}?autoplay=1`}
              frameBorder="0"
            ></iframe>
          </div>
          <div className="current-title">{video.snippet.title}</div>
          <div className="line" />
          <div className="current-description">{video.snippet.description}</div>
        </section>
      )}
    </>
  );
};

export default PlayedVideo;
