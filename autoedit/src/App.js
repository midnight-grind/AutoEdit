import logo from './logo.svg';
import './App.css';
import RadioButtonsGroup from './components/RadioButtonsGroup';
import ExportButton from './components/Export';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          AutoEdit
        </h1>

        <div>
          <h3>Select Process:</h3>
          <RadioButtonsGroup />
        </div>

        <ExportButton/>
      </header>
    </div>
  );
}

export default App;