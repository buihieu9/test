import React, { useEffect, useRef, useState } from "react";

import "./style.scss";

function formatTime(current) {
  if (!current) {
    return;
  }
  var minutes = Math.floor(current / 60);
  minutes = minutes >= 10 ? minutes : "0" + minutes;
  var hours = Math.floor(minutes / 60);
  hours = minutes >= 10 ? hours : "0" + hours;
  var seconds = Math.floor(current % 60);
  seconds = seconds >= 10 ? seconds : "0" + seconds;
  return hours + ":" + minutes + ":" + seconds;
}

function VideoPlayer(props) {
  const video = useRef(null);
  const boxVideo = useRef(null);
  const [valueVolum, setValueVolum] = useState(50);
  const progress = useRef(null);
  const currentTime = useRef(null);
  let mouseDown = false;
  let isTrue = true;
  const durationVideo = useRef("");

  const [control, setControl] = useState({
    onPlay: true,
    muted: false,
    fullScreen: false,
  });

  const { onPlay, muted, fullScreen } = control;

  const onplay = () => {
    setControl({
      ...control,
      onPlay: !control.onPlay,
    });
    const a = control.onPlay ? "play" : "pause";
    video.current[a]();
    if (isTrue) {
      durationVideo.current = formatTime(video.current.duration);
      isTrue = false;
    }
  };
  const handleVolum = (e) => {
    setValueVolum(e.target.value);
    video.current.volume = valueVolum / 100;

    if (e.target.value === "0") {
      setControl({
        ...control,
        muted: true,
      });
    } else {
      if (muted) {
        setControl({
          ...control,
          muted: false,
        });
      }
    }
  };
  const hanhdleSkip = (timeSkip) => {
    video.current.currentTime += timeSkip;
  };
  const handleMuted = () => {
    setControl({
      ...control,
      muted: !muted,
    });
  };

  const handleFullScreen = (e) => {
    setControl({
      ...control,
      fullScreen: !fullScreen,
    });
    fullScreen
      ? document.exitFullscreen()
      : boxVideo.current.requestFullscreen();
  };

  const handleProgress = () => {
    let percent = (video.current.currentTime / video.current.duration) * 100;

    progress.current.childNodes[0].style.flexBasis = percent + "%";

    video.current.currentTime === video.current.duration && onplay();
    currentTime.current.innerText = formatTime(video.current.currentTime);
  };

  const handleSlideProgress = (e) => {
    let slideTime =
      (e.nativeEvent.offsetX / progress.current.offsetWidth) *
      video.current.duration;
    progress.current.childNodes[0].style.flexBasis =
      (slideTime / video.current.duration) * 100 + "%";
    video.current.currentTime = slideTime || video.current.currentTime;
  };
  return (
    <div className="container-player">
      <div className="box-video" ref={boxVideo}>
        <video
          width="100%"
          ref={video}
          // width="100%"
          className="video"
          src="video.mp4"
          type="video/mp4"
          muted={muted}
          onTimeUpdate={handleProgress}
        >
          <div className="child1">buivanheuashsakdsakjk</div>
        </video>
        <div className="controls">
          <div
            className="container-progress "
            // onMouseDown={handleSlideProgress}
            // onMouseUp={handleSlideProgress}
            onClick={handleSlideProgress}
            onMouseMove={(e) => {
              mouseDown && handleSlideProgress(e);
            }}
            onMouseDown={() => (mouseDown = true)}
            onMouseUp={() => (mouseDown = false)}
            ref={progress}
          >
            <div className="progress"></div>
          </div>
          <div className="btn-container">
            <div className="btn-volum">
              <div className="icon-volum">
                <i
                  className={muted ? "fas fa-volume-mute" : "fas fa-volume-up"}
                  onClick={handleMuted}
                ></i>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="10"
                value={valueVolum}
                onChange={handleVolum}
                onClick={handleVolum}
              />
            </div>

            <div className="btn-play">
              <p className="current-time" ref={currentTime}>
                00:00:00
              </p>
              <div
                className="icon-backward"
                onClick={() => {
                  hanhdleSkip(-15);
                  handleProgress();
                }}
              >
                <i className="fas fa-backward"></i>
              </div>
              <div className="icon-play">
                <i
                  className={
                    onPlay ? " far fa-play-circle" : "far fa-pause-circle"
                  }
                  onClick={onplay}
                ></i>
              </div>
              <div
                className="icon-forward"
                onClick={() => {
                  hanhdleSkip(20);
                  handleProgress();
                }}
              >
                <i className="fas fa-forward"></i>
              </div>
              <p className="duration-time">
                {durationVideo.current || "00:00:00"}
              </p>
            </div>

            <div className="fullsceen">
              <i className="fas fa-expand" onClick={handleFullScreen}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
