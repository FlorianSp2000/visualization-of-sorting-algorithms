import logo from './logo.svg';
import './App.css';
import Selectionsort from './Selectionsort';
import Intro from './Intro';
import GeneralStats from './GeneralStats';
import Bubblesort from './Bubblesort';
import Quicksort from './Quicksort';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Visualization of Sorting Algorithms
        </h1>
        <br></br>
        <Intro />
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


          <GeneralStats/>
          <br></br>          
      </header>
    </div>
  );
}

export default App;
