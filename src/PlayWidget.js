import PlaybackSpeedSlider from "./PlaybackSpeedSlider";
import PauseButton from "./PauseButton";

import React from 'react';
const PlayWidget = (props) => {
    return (
        <div className="play-widget-grid">
            <>
            {props.playComponent}
            <PlaybackSpeedSlider sortingIsActive={props.sortingIsActive} modifyDelay={props.modifyDelay}/>
            </>
        </div>
    );
};

export default PlayWidget;