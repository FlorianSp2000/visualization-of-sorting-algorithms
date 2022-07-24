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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Visualization of Sorting Algorithms
        </h1>
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
      </header>
    </div>
  );
}

export default App;
