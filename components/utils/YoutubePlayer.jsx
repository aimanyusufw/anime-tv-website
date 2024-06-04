"use client";

import React from "react";
import YouTube from "react-youtube";

const YoutubePlayer = ({ videoId }) => {
  return (
    <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full bg-black">
      <YouTube
        videoId={videoId}
        opts={{
          width: "100%",
          height: "100%",
          playerVars: {
            autoplay: 0,
          },
        }}
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
};

export default YoutubePlayer;
