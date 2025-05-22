import { useRef, useState } from 'react';
import { IoMdPlay } from "react-icons/io";

export function Video({ foto }) {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(true);

  const handleVideoClick = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
      setIsPaused(false);
    } else {
      video.pause();
      setIsPaused(true);
    }
  };

  const handleEnded = () => {
    setIsPaused(true);
  };

  return (
    <li className='video_item'>
      <video className="viteo" ref={videoRef} onClick={handleVideoClick} onEnded={handleEnded} poster={foto}>
        <source src="https://video-preview.s3.yandex.net/SVemBAAAAAA.mp4" type="video/mp4" />
      </video>

      {isPaused && (
        <IoMdPlay className="play" onClick={handleVideoClick} />
      )}
    </li>
  );
}
