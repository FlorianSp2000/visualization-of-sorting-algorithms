import * as React from 'react';



const PauseButton = (props) => {
    function toggle() {
      if (props.sortingIsActive || !props.pause) {
          var element = document.getElementById(props.id);
          element.classList.toggle("paused");
        }
      }
      
    return (
            <button id={props.id} className="pause-button" onClick={() => {toggle(); props.Sort(); props.disable()}}></button>
        );
};

export default PauseButton;