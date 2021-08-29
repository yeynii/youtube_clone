import React, { useCallback } from "react";
import "./video_item.css";

const VideoItem = (props) => {
  const title = props.video.snippet.title;
  const thumbnails = props.video.snippet.thumbnails.high;
  const id = props.video.id.videoId ? props.video.id.videoId : props.video.id;
  const handleVideo = useCallback(() => {
    props.onVideo(id);
  }, []);

  return (
    <li className="video-list" onClick={handleVideo}>
      <img className="thumbnail" src={thumbnails.url} />
      <span className="title">{title}</span>
    </li>
  );
};

export default VideoItem;
