import React, { useRef, useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideo = 4;
  const nextVideoRef = useRef(null);

  const getVideoSource = (index) => `videos/hero-${index}.mp4`;

  //   const upComingVideoIndex = currentIndex % totalVideo;

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex((preValue) => (preValue % totalVideo) + 1);
  };

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                src={getVideoSource((currentIndex % totalVideo) + 1)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
                ref={nextVideoRef}
              />
            </div>
          </div>
          <video
            loop
            muted
            src={getVideoSource(currentIndex)}
            onLoadedData={handleVideoLoad}
            ref={nextVideoRef}
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
