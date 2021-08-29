import React, { useCallback } from "react";
import VideoItem from "../video_item/video_item";
import "./video_list.css";

const VideoList = (props) => {
  const handleVideo = useCallback((id) => {
    props.onVideo(id);
  }, []);

  return (
    <ul className="videos">
      {props.videos.map((video) => (
        <VideoItem
          key={video.id.videoId ? video.id.videoId : video.id}
          video={video}
          onVideo={handleVideo}
        />
      ))}
    </ul>
  );
};

export default VideoList;
