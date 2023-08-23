import React, { useState } from "react";
import styles from "./Intro.module.scss";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";

const Intro = () => {
  const [playVideo, setplayVideo] = useState(false);
  const vidRef = React.useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setplayVideo((prevPlayVideo) => !prevPlayVideo);

    if (vidRef.current) {
      if (playVideo) {
        vidRef.current.pause();
      } else {
        vidRef.current.play();
      }
    }
  };

  return (
    <div className={styles.app__video}>
      <video
        className={styles.app__video_video}
        loop
        controls={false}
        ref={vidRef}
        muted
      >
        <source src={meal} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.app__video_overlay}>
        <div className={styles.app__video_overlay_circle} onClick={handlePlay}>
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
