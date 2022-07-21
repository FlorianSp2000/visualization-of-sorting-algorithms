import logo from './logo.svg';
import './App.css';
import Selectionsort from './Selectionsort';
import Intro from './Intro'
import GeneralStats from './GeneralStats';


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
          <GeneralStats/>
      </header>
    </div>
  );
}

export default App;
