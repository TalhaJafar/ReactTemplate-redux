import { Route, Switch } from "react-router-dom";
import Navbar from './components/general/Navbar/navbar'
//css
import './App.scss'

//pages
import Home from './pages/Home'
import About from './pages/About'


const App = () =>{
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
      </Switch>
    </>
  );
}

export default App;
