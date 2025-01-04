import { useRef, useState } from "react";
import Button from "./Button";

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
    <div className="relative h-dvh w-screen overflow-x-hidden  ">
      <div
        id="video-frame"
        className="relative z-10 h-dvh overflow-hidden rounded-lg bg-blue-75 w-full"
      >
        <div className="w-full -2 -red-500">
          <div className="mask-clip-path absolute-center -2 -blue-400 absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                src={getVideoSource((currentIndex % totalVideo) + 1)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center "
                onLoadedData={handleVideoLoad}
                ref={nextVideoRef}
              />
            </div>
          </div>
          <video
            loop
            muted
            autoPlay
            src={getVideoSource(currentIndex)}
            onLoadedData={handleVideoLoad}
            ref={nextVideoRef}
            id="next-video"
            className=" w-full z-20  object-cover  h-dvh transition-all"
          />
        </div>
        <h1 className=" special-font hero-heading right-5  text-blue-75 uppercase  absolute bottom-5">
          {" "}
          G <b>a</b>ming
        </h1>

        <div className="flex flex-col text-white absolute top-20 left-10 ">
          <h1 className="hero-heading">Redefine</h1>
          <p className="text-gray-300 text-xl font-semibold">Enter the Metagame Layer <br></br>Unleash the Play Economy</p>
          <Button title={"Watch Trailer"} id={"trailer"} containerClass={"bg-yellow-300 mt-2 px-2"}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
