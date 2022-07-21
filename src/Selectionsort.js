import React, { useState } from 'react';

  import './selectionsort.css'
import SequenceInputButton from './SequenceInputButton';
import PlaybackSpeedButton from './PlaybackSpeedButton';

var colorblind_active = false;
var default_bar_color = "rgb(0, 183, 255)";
var finished_bar_color = "rgb(49, 226, 13)";
var next_bar_color = "rgb(10, 26, 177)";
var min_bar_color = "rgb(189, 22, 22)";

// // function to change colors to colorblind:
function change_colors_to_colorblind() {
  if (!colorblind_active) {
    default_bar_color = "rgb(240,228,66)";
    finished_bar_color = "rgb(0,158,115)";
    next_bar_color = "rgb(0,114,178)";
    min_bar_color = "rgb(213,94,0)";
    let bars = document.querySelectorAll(".bar")
    for (let i=0; i<bars.length; i+=1) {
      bars[i].style.backgroundColor = default_bar_color;
    }
    colorblind_active = true;
    document.getElementById("Button3").innerHTML = "standard palette";
  }
  else {
    default_bar_color = "rgb(0, 183, 255)";
    finished_bar_color = "rgb(49, 226, 13)";
    next_bar_color = "rgb(10, 26, 177)";
    min_bar_color = "rgb(189, 22, 22)";
    let bars = document.querySelectorAll(".bar")
    for (let i=0; i<bars.length; i+=1) {
      bars[i].style.backgroundColor = default_bar_color;
    }
    colorblind_active = false;    
    document.getElementById("Button3").innerHTML = "colorblind palette";
  }


}
// // function to generate bars



// // function to delete bars
function deletebars() {
  document.querySelectorAll('.bar').forEach(e => e.remove());
}
// Create Bars with integer sequence given by user
function processInputSequence(sequence) {
  // deletebars();
  console.log("test")
  generatebars(20, sequence)
}
// // function to generate bars
function generatebars(num = 20, sequence) {
  const container = document.querySelector(".data-container");
  // delete old bars
  deletebars()
  
  if (sequence != null) {
    for (let i = 0; i < sequence.length; i += 1) {
    
      // To generate random values from 1 to 100
      const value = sequence[i]
        
      // To create element "div"
      const bar = document.createElement("div");

      // Provide color to the bar
      bar.style.backgroundColor = default_bar_color;
    
      // To add class "bar" to "div"
      bar.classList.add("bar");
    
      // Provide height to the bar
      bar.style.height = `${value * 3}px`;
    
      // Translate the bar towards positive X axis 
      bar.style.transform = `translateX(${i * 30}px)`;
        
      // To create element "label"
      const barLabel = document.createElement("label");
    
      // To add class "bar_id" to "label"
      barLabel.classList.add("bar_id");
    
      // Assign value to "label"
      barLabel.innerHTML = value;
        
      // Append "Label" to "div"
        bar.appendChild(barLabel);
    
        container.appendChild(bar);
    } 
  }
  else {
    //for loop to generate <num> bars
    for (let i = 0; i < num; i += 1) {
    
      // To generate random values from 1 to 100
      const value = Math.floor(Math.random() * 100) + 1; 
        
      // To create element "div"
      const bar = document.createElement("div");
    
      // Provide color to the bar
      bar.style.backgroundColor = default_bar_color;

      // To add class "bar" to "div"
      bar.classList.add("bar");
    
      // Provide height to the bar
      bar.style.height = `${value * 3}px`;
    
      // Translate the bar towards positive X axis 
      bar.style.transform = `translateX(${i * 30}px)`;
        
      // To create element "label"
      const barLabel = document.createElement("label");
    
      // To add class "bar_id" to "label"
      barLabel.classList.add("bar_id");
    
      // Assign value to "label"
      barLabel.innerHTML = value;
        
      // Append "Label" to "div"
      if (bar != null) {
          bar.appendChild(barLabel);

      }
    
      // Append "div" to "data-container div"
      if (container != null ) {
        container.appendChild(bar);
      }
    } 
  }
  }

function Selectionsort(props) {
  const [sortingIsActive, setSortingIsActive] = useState(false);
  const [delayy, setDelayy] = useState(300);
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

// // asynchronous function to perform "Selection Sort"
async function SelectionSort(delay = delayy) {

  setSortingIsActive(true)
  let bars = document.querySelectorAll(".bar");
  // Assign 0 to min_idx
   var min_idx = 0;
   for (var i = 0; i < bars.length-1; i += 1) {
  
    // Assign i to min_idx
    min_idx = i;
  
    // Provide darkblue color to the ith bar
    // TODO:
    // var temp_style = getComputedStyle(bars[i]);
    // console.log(typeof(temp_style.getPropertyValue('--next-bar-color')));
    bars[i].style.backgroundColor = next_bar_color;//"darkblue";
    for (var j = i + 1; j < bars.length; j += 1) {
  
      // Provide red color to the jth bar
      bars[j].style.backgroundColor = min_bar_color;
        
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
        }, delay/4)
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
        }, delay/4)
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
  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#6f459e";
  
  // To enable the button "Selection Sort" after final(sorted)
  document.getElementById("Button2").disabled = false;
  document.getElementById("Button2").style.backgroundColor = "#6f459e";

  // to disable the change_colors_to_colorblind button
  document.getElementById("Button3").disabled = false;
  document.getElementById("Button3").style.backgroundColor = "#6f459e";      
  setSortingIsActive(false)
}

  
// //  function to disable the button
function disable()
{
  // To disable the button "Generate New Array"
  document.getElementById("Button1").disabled = true;
  document.getElementById("Button1").style.backgroundColor = "#d8b6ff";
  
  // To disable the button "Selection Sort"
  document.getElementById("Button2").disabled = true;
  document.getElementById("Button2").style.backgroundColor = "#d8b6ff";  

  // to disable the change_colors_to_colorblind button
  document.getElementById("Button3").disabled = true;
  document.getElementById("Button3").style.backgroundColor = "#d8b6ff";    
}



    return (
        <div>
               <section className="head">Selection Sort Visualizer</section>
   <section className="data-container"></section> 
      <SequenceInputButton processInputSequence={processInputSequence}/>
      <PlaybackSpeedButton sortingIsActive={sortingIsActive} modifyDelay={modifyDelay}/>
   <button  className="btn1" onClick={() => generatebars()} id="Button1" >
     Generate New Array</button>   
     
   <button className="btn2" 
           onClick={() => {SelectionSort();disable()}} id="Button2" >
     Selection Sort</button>

     <button className="btn3" 
           onClick={() => {change_colors_to_colorblind()}} id="Button3" >
     colorblind palette</button>     

        </div>
    );
  }
  
  export default Selectionsort;
  
