import * as React from 'react';



const PauseButton = () => {
    function toggle() {
        var element = document.getElementById("pause-btn");
        element.classList.toggle("paused");
      }
      
    return (
            <button id="pause-btn" className="pause-button" onClick={toggle}></button>
        );
};

export default PauseButton;