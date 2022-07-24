import React, { useState } from 'react';

  import './insertionsort.css'
import SequenceInputButton from './SequenceInputButton';
import PlaybackSpeedSlider from './PlaybackSpeedSlider';
import PauseButton from './PauseButton';
import PlayWidget from './PlayWidget';

var colorblind_active = false;
var default_bar_color = "rgb(0, 183, 255)";
var finished_bar_color = "rgb(49, 226, 13)";
var compared_bar_color = "rgb(189, 22, 22)";
var pause = false;
var global_width = 600;


// // function to change colors to colorblind:
function change_colors_to_colorblind() {
  if (!colorblind_active) {
    default_bar_color = "rgb(240,228,66)";
    finished_bar_color = "rgb(0,158,115)";
    compared_bar_color = "rgb(213,94,0)";
    let bars = document.querySelectorAll(".insertionsort-bar")
    for (let i=0; i<bars.length; i+=1) {
      bars[i].style.backgroundColor = default_bar_color;
    }
    colorblind_active = true;
    document.getElementById("insertionsort-Button3").innerHTML = "standard palette";
  }
  else {
    default_bar_color = "rgb(0, 183, 255)";
    finished_bar_color = "rgb(49, 226, 13)";
    compared_bar_color = "rgb(189, 22, 22)";
    let bars = document.querySelectorAll(".insertionsort-bar")
    for (let i=0; i<bars.length; i+=1) {
      bars[i].style.backgroundColor = default_bar_color;
    }
    colorblind_active = false;    
    document.getElementById("insertionsort-Button3").innerHTML = "colorblind palette";
  }


}
// // function to generate bars



// // function to delete bars
function deletebars() {
  document.querySelectorAll('.insertionsort-bar').forEach(e => e.remove());
}

function togglePauseButton() {
  var element = document.getElementById("insertionsort");
  element.classList.toggle("paused");

}

// Create Bars with integer sequence given by user
function processInputSequence(sequence) {
  // deletebars();
  generatebars(20, sequence)
}


// // function to generate bars
function generatebars(num = 20, sequence) {
  const container = document.querySelector(".insertionsort-data-container");
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
  const width = global_width / sequence.length;
      
  // create bars
  for (let i = 0; i < sequence.length; i += 1) {
  
    // To generate random values from 1 to 100
    const value = sequence[i]
      
    // To create element "div"
    const bar = document.createElement("div");

    // Provide color to the bar
    bar.style.backgroundColor = default_bar_color;
  
    // To add class "bar" to "div"
    bar.classList.add("insertionsort-bar");
  
    // Provide height to the bar
    bar.style.height = `${parseInt(value) * 300 / max_value}px`;

    // Provide width to the bar
    bar.style.width = `${width}px`;

    // Translate the bar towards positive X axis 
    bar.style.transform = `translateX(${i * (width+2)}px)`;
      
    // To create element "label"
    const barLabel = document.createElement("label");
  
    // To add class "bar_id" to "label"
    barLabel.classList.add("insertionsort-bar_id");
  
    // Assign value to "label"
    barLabel.innerHTML = value;

    barLabel.style.fontSize = `${Math.min(width*0.75, 30)}px`;
      
    // Append "Label" to "div"
      bar.appendChild(barLabel);
  
      container.appendChild(bar);
  } 
}


function Insertionsort(props) {
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

    if (pause==false) {
      pause=true;
    }
    else {
      pause=false;
    }
  }
  

// // asynchronous function to perform "Insertion Sort"
async function InsertionSort(delay = delayy) {

  if (sortingIsActive) {
    pause_button()
  }
    if (!sortingIsActive) {
        setSortingIsActive(true)
        var bars = document.querySelectorAll(".insertionsort-bar");
        console.log("bars ", bars);
    
        const width = global_width/ bars.length;
        bars[0].style.backgroundColor = finished_bar_color;
    
        for (var i = 1; i<bars.length; i += 1) {
            bars[i].style.backgroundColor = compared_bar_color;
            var current_value = parseInt(bars[i].childNodes[0].innerHTML);
            console.log("current_value", current_value);
            var j=i;
            if (parseInt(bars[j-1].childNodes[0].innerHTML) <= current_value) {
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
    
                    await new Promise((resolve) =>
                      setTimeout(() => {
                        resolve();
                      }, delay)
                    );  
    
    
                bars[j].style.backgroundColor = finished_bar_color;
            }
            while (j>0 && parseInt(bars[j-1].childNodes[0].innerHTML) > current_value) {
                console.log("while");
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

                await new Promise((resolve) =>
                  setTimeout(() => {
                    resolve();
                  }, delay)
                );  



                // smooth transition
                bars[j].style.transform =  `translateX(${(j-1) * (width+2)}px)`;
                bars[j-1].style.transform = `translateX(${j * (width+2)}px)`;      
                // // To pause the execution of code for <delay> milliseconds
                await new Promise((resolve) =>
                    setTimeout(() => {
                    resolve();
                    }, 50)
                );
                // // reverse smooth transition invisibly
                bars[j].className = "insertionsort-bar-no-transition";
                bars[j-1].className = "insertionsort-bar-no-transition";
                bars[j].style.transform = `translateX(${j * (width+2)}px)`;
                bars[j-1].style.transform =  `translateX(${(j-1) * (width+2)}px)`;   
        
                // now change columns
                var temp1 = bars[j-1].style.height;
                var temp2 = bars[j-1].childNodes[0].innerText;
                var temp3 = bars[j-1].style.backgroundColor;
                bars[j-1].style.height = bars[j].style.height;
                bars[j].style.height = temp1;
                bars[j-1].childNodes[0].innerText = bars[j].childNodes[0].innerText;
                bars[j].childNodes[0].innerText = temp2;        
                bars[j-1].style.backgroundColor = bars[j].style.backgroundColor;
                bars[j].style.backgroundColor = temp3;      
        
                // change class back
                bars[j-1].className = "insertionsort-bar";
                bars[j].className = "insertionsort-bar";

                j-=1;

            }
            // console.log("bars[j] after for ", bars[j].childNodes[0].innerHTML); 
            bars[j].style.backgroundColor = finished_bar_color;
            
            // bars[i-1].style.backgroundColor = finished_bar_color;
        }
        bars[bars.length-1].style.backgroundColor = finished_bar_color;

        // To enable the button "Generate New Array" after final(sorted)
        let btn1 = document.getElementById("insertionsort-Button1")
        btn1.disabled = false;
        btn1.classList.remove("disabled-btn");
            
        // to disable the change_colors_to_colorblind button
        let btn3 = document.getElementById("insertionsort-Button3")
        btn3.disabled = false;
        btn3.classList.remove("disabled-btn");
    
        setSortingIsActive(false)
        pause_button();
        togglePauseButton();

    }
}

  
// //  function to disable the button
function disable()
{
  // To disable the button "Generate New Array"
  let btn1 = document.getElementById("insertionsort-Button1")
  btn1.disabled = true;
  btn1.classList.add("disabled-btn");

  
  // to disable the change_colors_to_colorblind button
  let btn3 = document.getElementById("insertionsort-Button3")
  btn3.disabled = true;
  btn3.classList.add("disabled-btn");

}


    return (
      <>
        <section className="insertionsort-head">Insertion Sort Visualizer</section>
        The algorithm goes through the array left to right and moves every element to the left, as long as its smaller than its left neighbor. This way, there is a sorted sub-array on the left side that grows with every iteration.
          <section className="insertionsort-data-container"></section> 
        <div className="sorting-toolbar">
          <SequenceInputButton processInputSequence={processInputSequence} resetSortingStatus={setSortingIsActive} sortingIsActive={sortingIsActive} togglePauseButton={togglePauseButton}/>
          <PlayWidget sortingIsActive={sortingIsActive} modifyDelay={modifyDelay} playComponent={<div style={{height: '74px'}}>
                                <PauseButton id="insertionsort" sortingIsActive={sortingIsActive} pause={pause} Sort={InsertionSort} disable={disable}/>
                              </div>}/>
          <button  className="btn1" onClick={() => generatebars()} id="insertionsort-Button1" >
            Generate New Sequence</button>   
          <button className="btn3" 
                onClick={() => {change_colors_to_colorblind()}} id="insertionsort-Button3" >
          colorblind palette</button>     
        </div>
      </>
    );
  }
  
  export default Insertionsort;
  
