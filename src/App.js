import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header, Home, Contact } from './components'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Header />
          <Home />
          <Contact />
        </Route>
      </Router>
    </div>
  );
}

export default App;
