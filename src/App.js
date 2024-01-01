// import logo from './logo.svg';
import './App.css';
import { Functionquiz } from './quiz/Functionquiz/Functionquiz';
import { Classquiz } from './quiz/Classquiz/Classquiz';

function App() {
  return (
    <div className="App">
      <h3>Class Component</h3>
      <Classquiz/><hr/><hr/>
      <h3>Function Component</h3>
      <Functionquiz/>
    </div>
  );
}

export default App;
