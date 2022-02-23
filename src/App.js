import './App.css';
import Home from './RouterB/Home';
import About from './RouterB/About';
import Context from './RouterB/Context';
import {Switch,Route,Link} from 'react-router-dom';

function App() {
  return (
    <>
    
      <nav>
        <ul>
          <li>
            <Link exact to='/'>Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link exact to="/context">Context</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/context" component={Context} />
      </Switch>
      
    </> 
  );
}

export default App;
