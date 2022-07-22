import * as React from 'react';



const PauseButton = (props) => {
    function toggle() {
        var element = document.getElementById(props.id);
        element.classList.toggle("paused");
      }
      
    return (
            <button id={props.id} className="pause-button" onClick={toggle}></button>
        );
};

export default PauseButton;