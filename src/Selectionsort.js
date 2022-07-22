import React, { useState } from 'react';

  import './selectionsort.css'
import SequenceInputButton from './SequenceInputButton';
import PlaybackSpeedSlider from './PlaybackSpeedSlider';
import PauseButton from './PauseButton';
import PlayWidget from './PlayWidget';

var colorblind_active = false;
var default_bar_color = "rgb(0, 183, 255)";
var finished_bar_color = "rgb(49, 226, 13)";
var next_bar_color = "rgb(10, 26, 177)";
var min_bar_color = "rgb(189, 22, 22)";
var pause = false;


// // function to change colors to colorblind:
function change_colors_to_colorblind() {
  if (!colorblind_active) {
    default_bar_color = "rgb(240,228,66)";
    finished_bar_color = "rgb(0,158,115)";
    next_bar_color = "rgb(0,114,178)";
    min_bar_color = "rgb(213,94,0)";
    let bars = document.querySelectorAll(".selectionsort-bar")
    for (let i=0; i<bars.length; i+=1) {
      bars[i].style.backgroundColor = default_bar_color;
    }
    colorblind_active = true;
    document.getElementById("selectionsort-Button3").innerHTML = "standard palette";
  }
  else {
    default_bar_color = "rgb(0, 183, 255)";
    finished_bar_color = "rgb(49, 226, 13)";
    next_bar_color = "rgb(10, 26, 177)";
    min_bar_color = "rgb(189, 22, 22)";
    let bars = document.querySelectorAll(".selectionsort-bar")
    for (let i=0; i<bars.length; i+=1) {
      bars[i].style.backgroundColor = default_bar_color;
    }
    colorblind_active = false;    
    document.getElementById("selectionsort-Button3").innerHTML = "colorblind palette";
  }


}
// // function to generate bars



// // function to delete bars
function deletebars() {
  document.querySelectorAll('.selectionsort-bar').forEach(e => e.remove());
}


// Create Bars with integer sequence given by user
function processInputSequence(sequence) {
  // deletebars();
  console.log("test")
  generatebars(20, sequence)
}


// // function to generate bars
function generatebars(num = 20, sequence) {
  const container = document.querySelector(".selectionsort-data-container");
  // delete old bars
  deletebars()

  // if sequence is null, generate sequence from random numbers
  if (sequence == null) {
    var sequence = new Array(num);
    for (let i=0; i<num; i+=1) {
      sequence[i] = String(Math.floor(Math.random() * 99) + 1); 
    }
  }

  // determine max value for uniform height
  var max_value = parseInt(sequence[0]);
  for (let i=0; i<sequence.length; i+=1) {
    if (parseInt(sequence[i]) > max_value) {
      max_value = parseInt(sequence[i]);
    }
  }

  // calculate width, so that the algorithm is approximately 600 px wide
  const width = 600 / sequence.length;
      
  // create bars
  for (let i = 0; i < sequence.length; i += 1) {
  
    // To generate random values from 1 to 100
    const value = sequence[i]
      
    // To create element "div"
    const bar = document.createElement("div");

    // Provide color to the bar
    bar.style.backgroundColor = default_bar_color;
  
    // To add class "bar" to "div"
    bar.classList.add("selectionsort-bar");
  
    // Provide height to the bar
    bar.style.height = `${parseInt(value) * 300 / max_value}px`;

    // Provide width to the bar
    bar.style.width = `${width}px`;

    // Translate the bar towards positive X axis 
    bar.style.transform = `translateX(${i * (width+2)}px)`;
      
    // To create element "label"
    const barLabel = document.createElement("label");
  
    // To add class "bar_id" to "label"
    barLabel.classList.add("selectionsort-bar_id");
  
    // Assign value to "label"
    barLabel.innerHTML = value;

    barLabel.style.fontSize = `${Math.min(width*0.75, 30)}px`;
      
    // Append "Label" to "div"
      bar.appendChild(barLabel);
  
      container.appendChild(bar);
  } 
}


function Selectionsort(props) {
  const [sortingIsActive, setSortingIsActive] = useState(false);
  const [delayy, setDelayy] = useState(300);
  // const [pause, setPause] = useState(false)
  // let pause = false
  // Change Playback speed
  function modifyDelay(selected_velocity) {

    switch(selected_velocity) {
      case 0:
        setDelayy(300 * 4)
        break;
      case 25:
      setDelayy(300 * 2)
      break;
      case 50:
      setDelayy(300 * 1)
      break;
      case 75:
      setDelayy(300 / 1.5)
      break;
      case 100:
        setDelayy(300 / 2)
        break;
    }
  }
  function pause_button() {
    console.log("pause button clicked", pause)
    if (pause==false) {
      pause=true;
    }
    else {
      pause=false;
    }
  }
  

// // asynchronous function to perform "Selection Sort"
async function SelectionSort(delay = delayy) {

  setSortingIsActive(true)
  let bars = document.querySelectorAll(".selectionsort-bar");
  // Assign 0 to min_idx
   var min_idx = 0;
   for (var i = 0; i < bars.length-1; i += 1) {
    // check if pause button is pressed:
    console.log("pause", pause)
    while (pause) {
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 100)
      );
      if (!pause) {
        break;
      }
    }

    // Assign i to min_idx
    min_idx = i;
  
    bars[i].style.backgroundColor = next_bar_color;//"darkblue";
    for (var j = i + 1; j < bars.length; j += 1) {
  
      // Provide red color to the jth bar
      bars[j].style.backgroundColor = min_bar_color;
        
      // check if pause button is pressed:
      while (pause) {
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 100)
        );
        if (!pause) {
          break;
        }
      }      

      // To pause the execution of code for 300 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
  
      // To store the integer value of jth bar to var1 
      var val1 = parseInt(bars[j].childNodes[0].innerHTML);
  
      // To store the integer value of (min_idx)th bar to var2 
      var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
        
      // Compare val1 & val2
      if (val1 < val2) {
        if (min_idx !== i) {
  
          // Provide skyblue color to the (min-idx)th bar
          bars[min_idx].style.backgroundColor = default_bar_color;//"  rgb(24, 190, 255)";
        }
        min_idx = j;
      } else {
  
        // Provide skyblue color to the jth bar
        bars[j].style.backgroundColor = default_bar_color;//"  rgb(24, 190, 255)";
      }
    }

    // To pause the execution of code for 300 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 2*delay)
    );    
  
    // To swap ith and (min_idx)th bar

    // first swap backwards
    for (var j = min_idx; j > i; j -= 1) {
  
      var temp1 = bars[j-1].style.height;
      var temp2 = bars[j-1].childNodes[0].innerText;
      var temp3 = bars[j-1].style.backgroundColor;
      bars[j-1].style.height = bars[j].style.height;
      bars[j].style.height = temp1;
      bars[j-1].childNodes[0].innerText = bars[j].childNodes[0].innerText;
      bars[j].childNodes[0].innerText = temp2;        
      bars[j-1].style.backgroundColor = bars[j].style.backgroundColor;
      bars[j].style.backgroundColor = temp3;

      // To pause the execution of code for 300 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 25)
      );
  
    }

    // then swap forwards
    for (var j = i+2; j < min_idx+1; j += 1) {
  
      var temp1 = bars[j-1].style.height;
      var temp2 = bars[j-1].childNodes[0].innerText;
      var temp3 = bars[j-1].style.backgroundColor;
      bars[j-1].style.height = bars[j].style.height;
      bars[j].style.height = temp1;
      bars[j-1].childNodes[0].innerText = bars[j].childNodes[0].innerText;
      bars[j].childNodes[0].innerText = temp2;   
      bars[j-1].style.backgroundColor = bars[j].style.backgroundColor;
      bars[j].style.backgroundColor = temp3;           
      // To pause the execution of code for 300 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 25)
      );
  
    }    

    // To pause the execution of code for 300 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 2*delay)
    );
  
    // Provide skyblue color to the (min-idx)th bar
    bars[min_idx].style.backgroundColor = default_bar_color;//"  rgb(24, 190, 255)";
  
    // Provide lightgreen color to the ith bar
    bars[i].style.backgroundColor = finished_bar_color;//" rgb(49, 226, 13)";
  }
  // Provide lightgreen color to the ith bar
  bars[bars.length-1].style.backgroundColor = finished_bar_color;//" rgb(49, 226, 13)";  
  
  // To enable the button "Generate New Array" after final(sorted)
  document.getElementById("selectionsort-Button1").disabled = false;
  document.getElementById("selectionsort-Button1").style.backgroundColor = "#6f459e";
  
  // To enable the button "Selection Sort" after final(sorted)
  document.getElementById("selectionsort-Button2").disabled = false;
  document.getElementById("selectionsort-Button2").style.backgroundColor = "#6f459e";

  // to disable the change_colors_to_colorblind button
  document.getElementById("selectionsort-Button3").disabled = false;
  document.getElementById("selectionsort-Button3").style.backgroundColor = "#6f459e";      
  setSortingIsActive(false)
}

  
// //  function to disable the button
function disable()
{
  // To disable the button "Generate New Array"
  document.getElementById("selectionsort-Button1").disabled = true;
  document.getElementById("selectionsort-Button1").style.backgroundColor = "#d8b6ff";
  
  // To disable the button "Selection Sort"
  document.getElementById("selectionsort-Button2").disabled = true;
  document.getElementById("selectionsort-Button2").style.backgroundColor = "#d8b6ff";  

  // to disable the change_colors_to_colorblind button
  document.getElementById("selectionsort-Button3").disabled = true;
  document.getElementById("selectionsort-Button3").style.backgroundColor = "#d8b6ff";    
}


// const playComponent = () => <div onClick={() => {pause_button()}}>
//                             <PauseButton />
//                           </div>

    return (
        <div>
    <section className="selectionsort-head">Selection Sort Visualizer</section>
   <section className="selectionsort-data-container"></section> 
      <SequenceInputButton processInputSequence={processInputSequence}/>
      <PlayWidget sortingIsActive={sortingIsActive} modifyDelay={modifyDelay} playComponent={<div onClick={() => {pause_button()}}>
                            <PauseButton id="selectionsort" />
                          </div>}/>
   <button  className="btn1" onClick={() => generatebars()} id="selectionsort-Button1" >
     Generate New Array</button>   
     
   <button className="btn2" 
           onClick={() => {SelectionSort();disable()}} id="selectionsort-Button2" >
     Selection Sort</button>

     <button className="btn3" 
           onClick={() => {change_colors_to_colorblind()}} id="selectionsort-Button3" >
     colorblind palette</button>     

     {/* <button className="btn4" 
           onClick={() => {pause_button()}} id="Button4" >
     pause</button>      */}
        </div>
    );
  }
  
  export default Selectionsort;
  
