import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Contact } from './components'
import { About} from './components'


function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path="/">
          <About />
        </Route>
      <Route exact path="/">
          <Contact />
        </Route>
      </Router>
    </div>
  );
}

export default App;
