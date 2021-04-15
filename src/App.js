import {PrimaryButton, SecondaryButton} from './components/general/AppButtton'
import AppLoader from './components/general/AppLoader'
import './App.scss'

function App() {
  return (
    <div>
      <PrimaryButton title="Press Here" onClick={() => {console.log("pressed")}} className="over" disabled={true}/>
      <SecondaryButton title="Secondary Here" className="over" />
      <AppLoader size={50}color="yellow" />
    </div>
  );
}

export default App;
