import React from 'react';
import VideoListItem from './video_list_item';

//calls parent component App *awesome
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    //each individual item passed in as video. key/value pair for returned array
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    )
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
