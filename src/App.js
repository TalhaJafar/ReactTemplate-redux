import {PrimaryButton} from './components/general/AppButtton'
import './App.scss'

function App() {
  return (
    <div>
      <PrimaryButton title="Press Here" onClick={() => {console.log("pressed")}} className="over" disabled={true}/>
    </div>
  );
}

export default App;
