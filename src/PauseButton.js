import * as React from 'react';



const PauseButton = (props) => {
    function pause_button() {
      // var bar_class_id ="."+ props.id + "-bar";
      // console.log("button bar class id", bar_class_id);
      // var bars = document.querySelectorAll(bar_class_id)
      // if (bars.length==0) {
      //   return;
      // }
      // else {
        toggle();
        props.Sort();
        props.disable();
      // }
    }

    function toggle() {
      if (props.sortingIsActive || !props.pause) {
          var element = document.getElementById(props.id);
          element.classList.toggle("paused");
        }
      }
      
    return (
            <button id={props.id} className="pause-button" onClick={() => {pause_button()}}></button>
        );
};

export default PauseButton;