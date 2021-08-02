import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header, Home, Contact,Team } from './components'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
         
          <Header />
          <Home />
          <Team />
          <Contact />
        </Route>
       
      </Router>
      <script src="https://apps.elfsight.com/p/platform.js" defer></script>
      <div class="elfsight-app-466f64d1-ed62-479b-b4b5-a9c5acf673c3"></div>
    </div>
  );
}

export default App;
