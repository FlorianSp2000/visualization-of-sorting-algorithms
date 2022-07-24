import logo from './logo.svg';
import './App.css';
import Selectionsort from './Selectionsort';
import Intro from './Intro';
import GeneralStats from './GeneralStats';
import Bubblesort from './Bubblesort';
import Quicksort from './Quicksort';
import Mergesort from './Mergesort';
import Insertionsort from './Insertionsort';

import Applications from './Applications'
import GitHubIcon from '@mui/icons-material/GitHub';
import './bubblesort.css'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{marginBottom: '0px'}}>
          Visualization of Sorting Algorithms
        </h1>
        <p style={{fontSize: '15px'}}>A project by Philipp Davydov, Jonas Harriehausen and Florian Sprick</p>
        <br></br>
        <Intro />
        <div style={{width: '80%'}}><hr></hr></div>
        <br></br>
          <Selectionsort>

          </Selectionsort>
          <br></br>

          <br></br>
          <Bubblesort>

          </Bubblesort>
          <br></br>

          <Quicksort>

          </Quicksort>
          <br></br>

          <Mergesort>

          </Mergesort>
          <br></br>          

          <Insertionsort>

          </Insertionsort>
          <br></br>   

          <GeneralStats/>
          <br></br>      
          <Applications />   
          <p style={{fontSize: '16px'}}>
            Our Source Code:
            </p>
          <div className="footer-text">
           
            <GitHubIcon  style={{marginRight: '6px'}}/>  
            <a style={{flex: '100%'}} href="https://github.com/FlorianSp2000/visualization">https://github.com/FlorianSp2000/visualization</a>

          </div>
          <p style={{fontSize: '16px'}}>
            External Sources:
            </p>            
          <div className="footer-text" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column"}}>
            <a style={{flex: '100%'}} href="https://github.com/SvenWoltmann/sorting-algorithms-ultimate-guide">https://github.com/SvenWoltmann/sorting-algorithms-ultimate-guide</a>
            <br></br> 
            <a style={{flex: '100%'}} href="https://www.makeartwithpython.com/blog/visualizing-sort-algorithms-in-python/">https://www.makeartwithpython.com/blog/visualizing-sort-algorithms-in-python/</a>
            <br></br>
            <a style={{flex: '100%'}} href="https://dev.to/christiankastner/visualizing-sorting-algorithms-with-images-17co">https://dev.to/christiankastner/visualizing-sorting-algorithms-with-images-17co</a>
          </div>

          <hr></hr>

      </header>
    </div>
  );
}

export default App;
