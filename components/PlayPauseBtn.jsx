import React from "react";

const PlayPauseBtn = ({playing, setPlaying, power}) => {

    return (
        <div
            onClick={() => {
                if(power && playing){
                    setPlaying(false)
                } else if(power && !playing) {
                    setPlaying(true)
                } else {
                    return null
                }
            }}
            className={`play-pause-container ${playing ? "pause-btn" : "play-btn"}`}
        />
    );
};

export default PlayPauseBtn;
