import { useState } from 'react';
import StarterPage from './components/StarterPage';
import SetCharacterPage from './components/SetCharacterPage';
import './App.css';


function App() {

  const [starterPage, setStarterPage] = useState(true);
  const [setCharacter, setSetCharacter]= useState(false);
  const [inputVal, setInputVal] = useState("");

  const newPageAppear = () => {
    setStarterPage(false);
    setSetCharacter(true);
  }


  return (
    <div className="App">
      {starterPage && 
      <StarterPage
        onChange={event =>setInputVal(event.target.value)}
        onClick={newPageAppear}
      />}
      {setCharacter && <SetCharacterPage
       name={inputVal}
      />}
    </div>

  );
}

export default App;
