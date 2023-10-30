import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import Header from './components/Header';
import Home from "./components/Home";
import Login from "./components/Login";
//import Details from './components/Details';
//import Error from './components/Error';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/log" component={Login} />
    </Router>
  );
}

export default App;
