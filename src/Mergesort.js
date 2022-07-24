import React, { useState } from 'react';

  import './mergesort.css'
import SequenceInputButton from './SequenceInputButton';
import PlaybackSpeedSlider from './PlaybackSpeedSlider';
import PauseButton from './PauseButton';
import PlayWidget from './PlayWidget';

var colorblind_active = false;
var default_bar_color = "rgb(0, 183, 255)";
var finished_bar_color = "rgb(49, 226, 13)";
var hr_color = "rgb(10, 26, 177)";
var left_split_color = "rgb(213,94,0)";
var right_split_color = "rgb(189, 22, 22)";
var pause = false;
var global_width = 600;


// // function to change colors to colorblind:
function change_colors_to_colorblind() {
  if (!colorblind_active) {
    default_bar_color = "#f0e442";//"rgb(240,228,66)";
    finished_bar_color = "#009e73";//"rgb(0,158,115)";
    hr_color = "#0072b2";//"rgb(0,114,178)";
    left_split_color = "#d55e00";//"rgb(213,94,0)";
    right_split_color = "#cc79a7";//"rgb(204,121,167)";
    // change hr color
    let hr = document.querySelectorAll(".quicksort-hr");
    for (let i=0; i<hr.length; i+=1) {
      hr[i].style.backgroundColor = hr_color;
    }
    // change bars color
    let bars = document.querySelectorAll(".mergesort-bar")
    for (let i=0; i<bars.length; i+=1) {
      bars[i].style.backgroundColor = default_bar_color;
    }
    colorblind_active = true;
    document.getElementById("mergesort-Button3").innerHTML = "standard palette";
  }
  else {
    default_bar_color = "rgb(0, 183, 255)";
    finished_bar_color = "rgb(49, 226, 13)";
    hr_color = "rgb(10, 26, 177)";
    left_split_color = "rgb(213,94,0)";
    right_split_color = "rgb(189, 22, 22)"; // "rgb(189, 22, 22)";  
    // change hr color
    let hr = document.querySelectorAll(".quicksort-hr");
    for (let i=0; i<hr.length; i+=1) {
      hr[i].style.backgroundColor = hr_color;
    }
    // change bars color     
    let bars = document.querySelectorAll(".mergesort-bar")
    for (let i=0; i<bars.length; i+=1) {
      bars[i].style.backgroundColor = default_bar_color;
    }
    colorblind_active = false;    
    document.getElementById("mergesort-Button3").innerHTML = "colorblind palette";
  }


}
// // function to generate bars



// // function to delete bars
function deletebars() {
  document.querySelectorAll('.mergesort-bar').forEach(e => e.remove());
}

function togglePauseButton() {
  var element = document.getElementById("mergesort");
  element.classList.toggle("paused");

}

// Create Bars with integer sequence given by user
function processInputSequence(sequence) {
  // deletebars();
  generatebars(20, sequence)
  togglePauseButton()
}


// // function to generate bars
function generatebars(num = 20, sequence, container_num=1, delete_old=true, x_shift=0, given_width=0, max_value=0, color=default_bar_color) {
    var container;
    if (container_num==1) {
        container = document.getElementById("mergesort-data-container-1");
    }
    else if (container_num==2) {
        container = document.getElementById("mergesort-data-container-2");
    }
    // else {
    //     const container = document.querySelectorAll(".mergesort-data-container")[0];
    // }

    if (delete_old) {
        // delete old bars
        deletebars()
    }

    // if sequence is null, generate sequence from random numbers
    if (sequence == null) {
        var sequence = new Array(num);
        for (let i=0; i<num; i+=1) {
        sequence[i] = String(Math.floor(Math.random() * 99) + 1); 
        }
    }

    // determine max value for uniform height
    if (max_value==0) {
      var max_value = parseInt(sequence[0]);
      for (let i=0; i<sequence.length; i+=1) {
          if (parseInt(sequence[i]) > max_value) {
          max_value = parseInt(sequence[i]);
          }
      }
    }

    // calculate width, so that the algorithm is approximately 600 px wide
    var width;
    if (given_width==0) {
        width = global_width / sequence.length;
    }
    else {
        width = given_width;
    }

        
    // create bars
    for (let i = 0; i < sequence.length; i += 1) {
    
        // To generate random values from 1 to 100
        const value = sequence[i]
        
        // To create element "div"
        const bar = document.createElement("div");

        // Provide color to the bar
        bar.style.backgroundColor = color;
    
        // To add class "bar" to "div"
        
        if (container_num==1) {
          bar.classList.add("mergesort-bar");
        }
        else if (container_num==2) {
          bar.classList.add("mergesort-bar-2");
        }
        // Provide height to the bar
        bar.style.height = `${parseInt(value) * 300 / max_value}px`;

        // Provide width to the bar
        bar.style.width = `${width}px`;

        // Translate the bar towards positive X axis 
        bar.style.transform = `translateX(${(i+x_shift) * (width+2) + x_shift}px)`;
        
        // To create element "label"
        const barLabel = document.createElement("label");
    
        // To add class "bar_id" to "label"
        barLabel.classList.add("mergesort-bar_id");
    
        // Assign value to "label"
        barLabel.innerHTML = value;

        barLabel.style.fontSize = `${Math.min(width*0.75, 30)}px`;
        
        // Append "Label" to "div"
        bar.appendChild(barLabel);
    
        container.appendChild(bar);
    } 
}


function Mergesort(props) {
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
  

// // asynchronous function to perform "Selection Sort"
async function MergeSort(delay = delayy) {

  var first_container = document.getElementById('mergesort-data-container-1');
  var second_container = document.getElementById('mergesort-data-container-2');
  second_container.style.height = `${first_container.offsetHeight}px`;// first_container.offsetHeight;

  if (sortingIsActive) {
    pause_button()
  }
  if (!sortingIsActive) {
    setSortingIsActive(true)

    let initial_bars = document.querySelectorAll(".mergesort-bar");    
    // console.log("parent test ", initial_bars[0].parentElement?.id=='mergesort-data-container-1');

    var bars_shift = new Array(initial_bars.length);
    for (let i=0; i<bars_shift.length; i+=1) {
      bars_shift[i] = 0;
    }
    // make container larger
    var containers = document.querySelectorAll(".mergesort-data-container");
    for (let i=0; i<containers.length; i+=1 ) {
      containers[i].style.width = "950px";
    }


    
    async function mergesort_rek(left, right, bars_shift) {
        // for (let i=0; i<initial_bars.length; i+=1) {
        //   if (i>right) {
        //     initial_bars[i].style.backgroundColor = default_bar_color;
        //   }            
        // }
        let bars = document.querySelectorAll(".mergesort-bar");     
        const width = global_width/ bars.length;           
        if (right<=left) {
            // if (right==left) {
            //     bars[left].style.backgroundColor = finished_bar_color;
            // }
            return;
        }
        else {
            // const new_container = document.getElementById("mergesort-data-container-2");            
            var mid = parseInt((left+right)/2)+1;
            // console.log("left, mid, right ", left, mid, right);
            var left_seq = new Array(mid);
            var right_seq = new Array(right+1-mid);
            for (let i=left; i<mid; i+=1) {
                left_seq[i] = parseInt(bars[i].childNodes[0].innerHTML);
                bars[i].style.backgroundColor = left_split_color;
            }
            for (let i=mid; i<right+1; i+=1) {
                right_seq[i-mid] = parseInt(bars[i].childNodes[0].innerHTML);
                bars[i].style.backgroundColor = right_split_color;
                // bars[i].style.transform = `translateX(${(i+x_shift+1) * (width+2)}px)`;             
            }
            await new Promise((resolve) =>
                setTimeout(() => {
                resolve();
                }, delay)
            );          
            // shift bars
            for (let i=mid; i<bars.length; i+=1) {

                // if pause, wait
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

                bars_shift[i] += 1;
                bars[i].style.transform = `translateX(${(i+bars_shift[i]/2) * (width+2)}px)`;             
            }
            // shift hr's:
            var hrs = document.querySelectorAll('.mergesort-hr');
            for (let i=0; i<hrs.length; i+=1) {
              // console.log("hr left", hrs[i].style.left, parseInt(hrs[i].style.left));
              if (parseInt(hrs[i].id) >= mid) {
                hrs[i].style.left = `${parseInt(hrs[i].style.left)+(width+2)/2}px`;
              }
            }


            // add hr 
            const hr = document.createElement("hr");
            hr.classList.add("mergesort-hr");
            hr.id = mid;
            hr.style.left = `${(mid+bars_shift[mid]/2) * (width+2) - (width+2)/4}px`;//`${(mid+1/4) * (width+2)}px`;
            hr.style.backgroundColor = hr_color;
            const container = document.querySelector(".mergesort-data-container");
            hr.style.height = `${container.offsetHeight}px`;
            container.appendChild(hr);

            for (let i=0; i<initial_bars.length; i+=1) {
              if (i>=mid) {
                initial_bars[i].style.backgroundColor = default_bar_color;
              }            
            }

            await new Promise((resolve) =>
                setTimeout(() => {
                resolve();
                }, delay)
            );
            // // recursive call
            await mergesort_rek(left, mid-1, bars_shift);

            await mergesort_rek(mid, right, bars_shift);

            await new Promise((resolve) =>
              setTimeout(() => {
              resolve();
              }, delay)
            );    

            await merge(left, mid-1, mid, right, bars_shift, width);
        }
    }      

    //async function merge(left_side_left, left_side_right, right_side_left, right_side_right) {
    async function merge(left_seq_left, left_seq_right, right_seq_left, right_seq_right, bars_shift, width) {
      // console.log("parent test ", initial_bars[0].parentElement?.id=='mergesort-data-container-1');  
      var top_bars = document.querySelectorAll(".mergesort-bar");   
      var max_value = 0;
      for (let i=0; i<top_bars.length; i+=1) {
        if (parseInt(top_bars[i].childNodes[0].innerHTML)>max_value) {
          max_value = parseInt(top_bars[i].childNodes[0].innerHTML);
        }
      }

      var new_seq = new Array((left_seq_right+1-left_seq_left)+(right_seq_right+1-right_seq_left));
      var i=left_seq_left;
      var j=right_seq_left;
      var new_idx=0;
      // change color on current hr
      var hrs = document.querySelectorAll(".mergesort-hr");
      for (let i=0; i<hrs.length; i+=1) {
        if (parseInt(hrs[i].id)>left_seq_left && parseInt(hrs[i].id)<=right_seq_right) {
          hrs[i].style.backgroundColor = right_split_color;
          hrs[i].style.width = "4px";
        }
      }
      await new Promise((resolve) =>
        setTimeout(() => {
        resolve();
        }, delay*2)
      );   

      while(i<=left_seq_right && j<=right_seq_right) {

        // if pause, wait
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
        
        if (parseInt(top_bars[i].childNodes[0].innerHTML)<=parseInt(top_bars[j].childNodes[0].innerHTML)) {           
          new_seq[new_idx] = parseInt(top_bars[i].childNodes[0].innerHTML);

          generatebars(0, [new_seq[new_idx]], 2, false, (bars_shift[left_seq_left] + 1/2) + new_idx, width, max_value, finished_bar_color);
          top_bars[i].style.height = 0;
          top_bars[i].childNodes[0].innerText = "";   
          await new Promise((resolve) =>
            setTimeout(() => {
            resolve();
            }, delay)
          );   

          i+=1;
          new_idx+=1;
        }
        else {
          new_seq[new_idx] = parseInt(top_bars[j].childNodes[0].innerHTML);

          generatebars(0, [new_seq[new_idx]], 2, false, (bars_shift[left_seq_left] + 1/2) + new_idx, width, max_value, finished_bar_color);
          top_bars[j].style.height = 0;
          top_bars[j].childNodes[0].innerText = "";   
          await new Promise((resolve) =>
            setTimeout(() => {
            resolve();
            }, delay)
          );   

          j+=1;
          new_idx+=1;
        }
      }
      while (i<=left_seq_right) {

        // if pause, wait
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
        
        new_seq[new_idx] = parseInt(top_bars[i].childNodes[0].innerHTML);

        generatebars(0, [new_seq[new_idx]], 2, false, (bars_shift[left_seq_left] + 1/2) + new_idx, width, max_value, finished_bar_color);
        top_bars[i].style.height = 0;
        top_bars[i].childNodes[0].innerText = "";     
        await new Promise((resolve) =>
          setTimeout(() => {
          resolve();
          }, delay)
        );   

        i+=1;
        new_idx+=1;
      }
      while (j<=right_seq_right) {

        // if pause, wait
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

        new_seq[new_idx] = parseInt(top_bars[j].childNodes[0].innerHTML);

        generatebars(0, [new_seq[new_idx]], 2, false, (bars_shift[left_seq_left] + 1/2) + new_idx, width, max_value, finished_bar_color);
        top_bars[j].style.height = 0;
        top_bars[j].childNodes[0].innerText = "";   
        await new Promise((resolve) =>
          setTimeout(() => {
          resolve();
          }, delay)
        );

        j+=1;
        new_idx+=1;
      }
      
      // generate new seq below:
      // generatebars(0, new_seq, 2, false, (bars_shift[left_seq_left] + bars_shift[right_seq_left]) / 2, width, max_value);  
      var bottom_bars = document.querySelectorAll(".mergesort-bar-2");           
      for (let i=0; i<bottom_bars.length; i+=1) {
        bottom_bars[i].style.backgroundColor = finished_bar_color;
      }      
      await new Promise((resolve) =>
        setTimeout(() => {
        resolve();
        }, delay)
      );
      

      // delete hr:
      var hrs = document.querySelectorAll('.mergesort-hr');
      for (let i=0; i<hrs.length; i+=1) {
        if (parseInt(hrs[i].id)>left_seq_left && parseInt(hrs[i].id)<=right_seq_right) {
          hrs[i].remove();
        }
      }

      // if pause, wait
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

      // shift new seq to top:
      for (let i=left_seq_left; i<=right_seq_right; i+=1) {
        top_bars[i].style.height = bottom_bars[i-left_seq_left].style.height;
        top_bars[i].style.backgroundColor = bottom_bars[i-left_seq_left].style.backgroundColor;
        top_bars[i].childNodes[0].innerText = bottom_bars[i-left_seq_left].childNodes[0].innerText;
      
        // hide bottom bars
        bottom_bars[i-left_seq_left].style.height = 0;
        bottom_bars[i-left_seq_left].childNodes[0].innerText = "";
        await new Promise((resolve) =>
          setTimeout(() => {
          resolve();
          }, delay)
        );
        // var temp1 = bars[j-1].style.height;
        // var temp2 = bars[j-1].childNodes[0].innerText;
        // var temp3 = bars[j-1].style.backgroundColor;
        // bars[j-1].style.height = bars[j].style.height;
        // bars[j].style.height = temp1;
        // bars[j-1].childNodes[0].innerText = bars[j].childNodes[0].innerText;
        // bars[j].childNodes[0].innerText = temp2;        
        // bars[j-1].style.backgroundColor = bars[j].style.backgroundColor;
        // bars[j].style.backgroundColor = temp3;     
      }
      await new Promise((resolve) =>
        setTimeout(() => {
        resolve();
        }, delay*2)
      );      
      // generatebars(0, new_seq, 1, false, bars_shift[left_seq_left] + width/2, width, max_value);  

      for (let i=0; i<bottom_bars.length; i+=1) {
        bottom_bars[i].remove();        
      }

      // if pause, wait
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

      return new_seq;
    }

    await mergesort_rek(0, initial_bars.length-1, bars_shift);

    var width = global_width / initial_bars.length; 
    initial_bars = document.querySelectorAll(".mergesort-bar");
    for (let i=0; i<initial_bars.length; i+=1) {
      initial_bars[i].style.transform = `translateX(${i * (width+2)}px)`;   
    }
    // make container smaller again
    for (let i=0; i<containers.length; i+=1 ) {
      containers[i].style.width = "600px";
    }
    var second_container = document.getElementById('mergesort-data-container-2');
    second_container.style.height="0px";
  }


}

  
// //  function to disable the button
function disable()
{
  // To disable the button "Generate New Array"
  let btn1 = document.getElementById("mergesort-Button1")
  btn1.disabled = true;
  btn1.classList.add("disabled-btn");
  // btn1.style.backgroundColor = "#d8b6ff";
  // btn1.style.cursor = null;

  // to disable the change_colors_to_colorblind button
  let btn3 = document.getElementById("mergesort-Button3")
  btn3.disabled = true;
  btn3.classList.add("disabled-btn");
  // btn3.style.backgroundColor = "#d8b6ff";  
  // btn3.style.cursor = "none";  
}


// const playComponent = () => <div onClick={() => {pause_button()}}>
//                             <PauseButton />
//                           </div>

    return (
      <>
        <section className="mergesort-head">Merge Sort Visualizer</section>
        The algorithm follows the principle "divide and conquer". The array is divided into two halfs (orange and red) which are sorted recursively. Then, the two sorted halfs are combined again to form the final sorted array.
          <section className="mergesort-data-container" id="mergesort-data-container-1"></section> 
          <section className="mergesort-data-container" id="mergesort-data-container-2" height="0"></section>           
        <div className="sorting-toolbar">
          <SequenceInputButton processInputSequence={processInputSequence} resetSortingStatus={setSortingIsActive}/>
          <PlayWidget sortingIsActive={sortingIsActive} modifyDelay={modifyDelay} playComponent={<div style={{height: '74px'}} onClick={() => {MergeSort();disable()}}>
                                <PauseButton id="mergesort" />
                              </div>}/>
          <button  className="btn1" onClick={() => generatebars()} id="mergesort-Button1" >
            Generate New Array</button>   
          <button className="btn3" 
                onClick={() => {change_colors_to_colorblind()}} id="mergesort-Button3" >
          colorblind palette</button>     
        </div>
      </>
    );
  }
  
  export default Mergesort;
  
