import './App.css';
import LandingPage from './LandingPage';
import TodoView from './TodoView';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <header>
        <h1>Todo list</h1>
      </header>
      <Router>
        <Switch>
          <Route component={LandingPage} exact path="/" />
          <Route exact component={TodoView} path="/todo/:id" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
