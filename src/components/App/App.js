import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>

      <Router>        

        <div className="nav">
          <Link to="/">Home</Link>
          <br />
          <Link to="/Add_Movie">Add Movie</Link>
        </div>

        <Route path="/" exact>
          <MovieList />
        </Route>
      
        {/* Details page */}
        <Route>
          
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
