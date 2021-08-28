import React from 'react';

const VideoItem = props => {
  const title = props.video.snippet.title;
  const thumbnails = props.video.snippet.thumbnails.high;
  const id = props.video.id;
  const url = "https://youtube.com/watch?v=" + id;
  
  return (
    <li className="video-list">
      <a href={url} target="_blank">
        <img className="thumbnail" src={thumbnails.url} />
        <span className="title">{title}</span>
      </a>
    </li>
  );
}

export default VideoItem;