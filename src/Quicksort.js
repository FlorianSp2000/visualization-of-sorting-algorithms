import React, { useState } from 'react';

  import './quicksort.css'
import SequenceInputButton from './SequenceInputButton';
import PlaybackSpeedSlider from './PlaybackSpeedSlider';
import PauseButton from './PauseButton';
import PlayWidget from './PlayWidget';

var colorblind_active = false;
var default_bar_color = "rgb(0, 183, 255)";
var finished_bar_color = "rgb(49, 226, 13)";
var pivot_bar_color = "rgb(10, 26, 177)";
var left_running_bar_color = "rgb(213,94,0)";//"rgb(189, 22, 22)";
var right_running_bar_color = "rgb(189, 22, 22)";
var pause = false;
var global_width = 600;
var global_max_value = 0;
var finished_bars; // = new Array();


// // function to change colors to colorblind:
function change_colors_to_colorblind() {
  if (!colorblind_active) {
    default_bar_color = "#f0e442";//"rgb(240,228,66)";
    finished_bar_color = "#009e73";//"rgb(0,158,115)";
    pivot_bar_color = "#0072b2";//"rgb(0,114,178)";
    left_running_bar_color = "#d55e00";//"rgb(213,94,0)";
    right_running_bar_color = "#cc79a7";//"rgb(204,121,167)";
    // update hr color
    let hr = document.querySelectorAll(".quicksort-hr");
    if (hr.length>0) {
      hr[0].style.backgroundColor = pivot_bar_color;
    }  
    // update bar color
    let bars = document.querySelectorAll(".quicksort-bar");
    for (let i=0; i<bars.length; i+=1) {
      bars[i].style.backgroundColor = default_bar_color;
    }
    colorblind_active = true;
    document.getElementById("quicksort-Button3").innerHTML = "standard palette";
  }
  else {
    default_bar_color = "rgb(0, 183, 255)";
    finished_bar_color = "rgb(49, 226, 13)";
    pivot_bar_color = "rgb(10, 26, 177)";
    left_running_bar_color = "rgb(213,94,0)";
    right_running_bar_color = "rgb(189, 22, 22)"; // "rgb(189, 22, 22)";   
    // update hr color
    let hr = document.querySelectorAll(".quicksort-hr");
    if (hr.length>0) {
      hr[0].style.backgroundColor = pivot_bar_color;
    }      
    // update bar color     
    let bars = document.querySelectorAll(".quicksort-bar");
    for (let i=0; i<bars.length; i+=1) {
      bars[i].style.backgroundColor = default_bar_color;
    }
    colorblind_active = false;    
    document.getElementById("quicksort-Button3").innerHTML = "colorblind palette";
  }


}
// // function to generate bars



// // function to delete bars
function deletebars() {
  document.querySelectorAll('.quicksort-bar').forEach(e => e.remove());
}

function togglePauseButton() {
  var element = document.getElementById("bubblesort");
  element.classList.toggle("paused");

}

// Create Bars with integer sequence given by user
function processInputSequence(sequence) {
  
  generatebars(20, sequence);
  togglePauseButton();
}


// // function to generate bars
function generatebars(num = 20, sequence) {
  const container = document.querySelector(".quicksort-data-container");
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

  global_max_value = max_value;

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
    bar.classList.add("quicksort-bar");
  
    // Provide height to the bar
    bar.style.height = `${parseInt(value) * 300 / max_value}px`;

    // Provide width to the bar
    bar.style.width = `${width}px`;

    // Translate the bar towards positive X axis 
    bar.style.transform = `translateX(${i * (width+2)}px)`;
      
    // To create element "label"
    const barLabel = document.createElement("label");
  
    // To add class "bar_id" to "label"
    barLabel.classList.add("quicksort-bar_id");
  
    // Assign value to "label"
    barLabel.innerHTML = value;

    barLabel.style.fontSize = `${Math.min(width*0.75, 30)}px`;
      
    // Append "Label" to "div"
      bar.appendChild(barLabel);
  
      container.appendChild(bar);
  } 

}


function Quicksort(props) {
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
async function QuickSort(delay = delayy) {

  if (sortingIsActive) {
    pause_button()
  }
  if (!sortingIsActive) {

    setSortingIsActive(true)
    let bars = document.querySelectorAll(".quicksort-bar");
    const width = global_width/ bars.length;

    finished_bars = new Array(bars.length);

    async function quicksort_rek(left, right) {
        console.log("quicksort ", left, right);
        if (left<right) {
            var pivot_idx = await divide(left, right);
            // console.log("pivot index ", pivot_idx);
            await quicksort_rek(left, pivot_idx-1);
            // console.log("first rek finished");
            await quicksort_rek(pivot_idx+1, right);
            // console.log("second rek finished");
        }
        else if (left==right) {
          bars[left].style.backgroundColor = finished_bar_color;
          finished_bars[left] = 1;
        }
    }

    async function divide(left, right) {
        // pivot is chosen as right element
        var p = left;
        var q = right-1;
        var pivot = parseInt(bars[right].childNodes[0].innerHTML);
        // console.log("pivot element ", pivot);
        bars[right].style.backgroundColor = pivot_bar_color;
        // create hr on level of pivot
        const hr_elems = document.querySelectorAll('.quicksort-hr');
        // console.log("hr ", hr_elems.length==0);
        if (hr_elems.length==0) {
          const hr = document.createElement("hr");
          hr.classList.add("quicksort-hr");
          hr.style.width = `${global_width + bars.length*2 - 2}px`;
          hr.style.bottom = `${pivot * 300 / global_max_value - 15}px`;
          hr.style.backgroundColor = pivot_bar_color;
          const container = document.querySelector(".quicksort-data-container");
          container.appendChild(hr);
        }
        else {
          hr_elems[0].style.bottom = `${pivot * 300 / global_max_value - 15}px`;
        }

        // console.log("left and right color: ", left_running_bar_color, right_running_bar_color);
        bars[p].style.backgroundColor = left_running_bar_color;
        bars[q].style.backgroundColor = right_running_bar_color;

        while (p<q) {
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
            // console.log("p<q, ", p, q);
            // bars[p].style.backgroundColor = left_running_bar_color;
            // bars[q].style.backgroundColor = right_running_bar_color;
            while ((p<q) && parseInt(bars[p].childNodes[0].innerHTML)<=pivot) {
                var old_color = bars[p].style.backgroundColor;
                await new Promise((resolve) =>
                  setTimeout(() => {
                    resolve();
                  }, delay)
                );                

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

                bars[p].style.backgroundColor = default_bar_color;
                p += 1;
                bars[p].style.backgroundColor = old_color;
            }
            while ((q>p) &&  parseInt(bars[q].childNodes[0].innerHTML) > pivot) {
                var old_color = bars[q].style.backgroundColor
                await new Promise((resolve) =>
                  setTimeout(() => {
                    resolve();
                  }, delay)
                );

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

                bars[q].style.backgroundColor = default_bar_color
                q -= 1;
                bars[q].style.backgroundColor = old_color;
            }
            if (parseInt(bars[p].childNodes[0].innerHTML) > parseInt(bars[q].childNodes[0].innerHTML)) {
                // swap bars[p] and bars[q]

                await new Promise((resolve) =>
                  setTimeout(() => {
                    resolve();
                  }, delay*2)
                );     

                // first swap backwards
                for (var j = q; j > p; j -= 1) {

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
                    bars[j].className = "selectionsort-bar-no-transition";
                    bars[j-1].className = "selectionsort-bar-no-transition";
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
                    bars[j-1].className = "selectionsort-bar";
                    bars[j].className = "selectionsort-bar";
            
                
                }
            
                // then swap forwards
                for (var j = p+2; j < q+1; j += 1) {

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
                    bars[j].className = "selectionsort-bar-no-transition";
                    bars[j-1].className = "selectionsort-bar-no-transition";
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
                    bars[j-1].className = "selectionsort-bar";
                    bars[j].className = "selectionsort-bar";      
                
                }    
            
            }
        }

        await new Promise((resolve) =>
            setTimeout(() => {
            resolve();
            }, delay*2)
        );        

        if (parseInt(bars[p].childNodes[0].innerHTML) > pivot) {
            // swap bars[p] and bars[right]

            // first swap backwards
            for (var j = right; j > p; j -= 1) {
        
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
                bars[j].className = "selectionsort-bar-no-transition";
                bars[j-1].className = "selectionsort-bar-no-transition";
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
                bars[j-1].className = "selectionsort-bar";
                bars[j].className = "selectionsort-bar";
        
            
            }
        
            // then swap forwards
            for (var j = p+2; j < right+1; j += 1) {

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
                bars[j].className = "selectionsort-bar-no-transition";
                bars[j-1].className = "selectionsort-bar-no-transition";
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
                bars[j-1].className = "selectionsort-bar";
                bars[j].className = "selectionsort-bar";      
            
            }    
                        
        }
        else {
            p = right;
        }    



        // console.log('TEST');
        bars[p].style.backgroundColor = finished_bar_color;
        // console.log(finished_bar_color);   
        finished_bars[p] = 1;

        for (let i=0; i<bars.length; i+=1) {
           
          // console.log(i, bars[i].style.backgroundColor==finished_bar_color);
          if (finished_bars[i]!=1) {
            bars[i].style.backgroundColor = default_bar_color;
          }
        }
        if (left==right-1) {
          bars[left].style.backgroundColor = finished_bar_color;
          bars[right].style.backgroundColor = finished_bar_color;
        }

        await new Promise((resolve) =>
          setTimeout(() => {
          resolve();
          }, delay*2)
        );        

      //  // remove hr
      //  document.querySelectorAll('.quicksort-hr').forEach(e => e.remove());    

        return p;    
    }

    await quicksort_rek(0, bars.length-1);
  
    // remove hr
    document.querySelectorAll('.quicksort-hr').forEach(e => e.remove());      
    
    
  //   // Provide lightgreen color to the ith bar
  //   bars[bars.length-1].style.backgroundColor = finished_bar_color;//" rgb(49, 226, 13)";  
    
    // To enable the button "Generate New Array" after final(sorted)
    document.getElementById("quicksort-Button1").disabled = false;
    document.getElementById("quicksort-Button1").style.backgroundColor = "#6f459e";
    
    // to disable the change_colors_to_colorblind button
    document.getElementById("quicksort-Button3").disabled = false;
    document.getElementById("quicksort-Button3").style.backgroundColor = "#6f459e";      
    setSortingIsActive(false)
  }
}

  
// //  function to disable the button
function disable()
{
  // To disable the button "Generate New Array"
  document.getElementById("quicksort-Button1").disabled = true;
  document.getElementById("quicksort-Button1").style.backgroundColor = "#d8b6ff";
  
  // to disable the change_colors_to_colorblind button
  document.getElementById("quicksort-Button3").disabled = true;
  document.getElementById("quicksort-Button3").style.backgroundColor = "#d8b6ff";    
}

    return (
      <>
      <section className="quicksort-head">Quick Sort Visualizer</section>
          <section className="quicksort-data-container"></section> 

      <div className="sorting-toolbar">
          <SequenceInputButton processInputSequence={processInputSequence} resetSortingStatus={setSortingIsActive}/>
          <PlayWidget sortingIsActive={sortingIsActive} modifyDelay={modifyDelay} playComponent={<div style={{height: '74px'}} onClick={() => {QuickSort();disable();}}>
                                <PauseButton id="quicksort" sortingIsActive={sortingIsActive} pause={pause}/>
                              </div>}/>
      <button  className="btn1" onClick={() => generatebars()} id="quicksort-Button1" >
        Generate New Array</button>   
        
        <button className="btn3" 
              onClick={() => {change_colors_to_colorblind()}} id="quicksort-Button3" >
        colorblind palette</button>     

      </div>
      </>        
    );
  }
  
  export default Quicksort;
  
