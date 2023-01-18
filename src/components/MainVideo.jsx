import React, { useEffect } from "react";
import Vimeoplayer from "@vimeo/player";
import throttle from "lodash.throttle";
import { IframeWrapper } from "./MainVideo.styled";

const MainVideo = () => {
  useEffect(() => {
    const iframe = document.getElementById("vimeo-player");
    const player = new Vimeoplayer(iframe);
    const onPlayer = (data) =>
      localStorage.setItem(
        "videoplayer-current-time",
        JSON.stringify(data.seconds)
      );

    player.on("timeupdate", throttle(onPlayer, 1000));

    const getSavedTime = localStorage.getItem("videoplayer-current-time");

    player.setCurrentTime(getSavedTime);
  }, []);

  return (
    <IframeWrapper>
      <iframe
        title="This is a unique title"
        id="vimeo-player"
        src="https://player.vimeo.com/video/236203659"
        width="1240"
        height="620"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; encrypted-media"
      ></iframe>
    </IframeWrapper>
  );
};

export default MainVideo;
