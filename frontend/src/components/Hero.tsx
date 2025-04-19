import {useRef, useState} from "react";
import {Button} from "./Button.tsx";
import {TiLocationArrow} from "react-icons/ti";

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0)

    const totalVideos = 4;

    const nextVideoRef = useRef(null);
    const upComingVideoIndex = (currentIndex % totalVideos) + 1;
    const handleVideoLoad = () =>{
        // const upComingVideoIndex = (currentIndex % totalVideos) + 1;
        setLoadedVideos((prev) => prev + 1);
    }
    const handleMiniVdClick = () => {
        setHasClicked(true);
        setCurrentIndex(upComingVideoIndex);
    }
    const getVideoSRC = (index: number) => `videos/hero-${index}.mp4`;
  return (
      <div className="relative h-dvh w-screen overflow-x-hidden">
        <div id="video-frame" className="relative z-10 h-dvh w-screen rounded-lg bg-blue-75">
          <div>
            <div className={'mask-clip-path absolute-center top-0 left-0 absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'}>
              <div onClick={handleMiniVdClick} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                  <video
                    ref={nextVideoRef}
                    src={getVideoSRC(upComingVideoIndex)}
                    loop
                    muted
                    id={"Current-video"}
                    className="size-64 origin-center scale-150 object-cover object-center"
                    onLoadedData={handleVideoLoad}
                  />
              </div>
            </div>
              <video
                ref={nextVideoRef}
                src={getVideoSRC(currentIndex)}
                loop
                muted
                id={"next-video"}
                className={`absolute-center invisible absolute z-20 size-64 object-cover object-center`}
                onLoadedData={handleVideoLoad}
              />
              <video
                src={getVideoSRC((currentIndex === totalVideos -1) ? 1 : currentIndex)}
                autoPlay
                loop
                muted
                className={"absolute left-0 top-0 size-full object-cover object-center"}
                onLoadedData={handleVideoLoad}
              />
          </div>
            <h1 className={"special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-100"}>
                Empow<b>e</b>r
            </h1>
            <div className={"absolute left-0 top-0 z-40 size-full"}>
                <div className={"mt-24 px-5 sm:px-10"}>
                    <h1 className={"special-font hero-heading text-blue-100"}>lear<b>n</b></h1>
                    <p className={"mb-5 max-w-64 font-robert text-blue-100"}>
                        Enter the Digital Stronghold<br/>Shape Your Future in the Digital World.
                    </p>

                    <Button id={"watch-trailer"} title={"explore more"} leftIcon={<TiLocationArrow />} containerClass={"!bg-yellow-300 flex-center gap-1"}/>
                </div>
            </div>
        </div>
      </div>
  );
}

export default Hero