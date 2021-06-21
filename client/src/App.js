import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './views/Home';
import PetDetail from './views/PetDetail';
import PetForm from './views/PetForm';

// import Home from './views/Home';
// import PetDetail from './views/PetDetail';
// import PetForm from './views/PetForm';

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route exact path="/pets/:id">
              <PetDetail/>
          </Route>
          <Route exact path="/create">
              <PetForm />
          </Route>
          <Route exact path="/edit/:id">
              <PetForm/>
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;

