import logo from './logo.svg';
import './App.css';
import RadioButtonsGroup from './components/RadioButtonsGroup';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          AutoEdit
        </h1>

        <div style={{ marginTop: '20px' }}>
          <h2>Function</h2>
          <RadioButtonsGroup />
        </div>
      </header>
    </div>
  );
}

export default App;