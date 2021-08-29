import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

// Import components
import MovieList from '../MovieList/MovieList'
import AddMovie from '../AddMovie/AddMovie';
import Details from '../Details/Details';


function App() {
  return (
    <div className="App">
     
      
      <Router>        
        <div className="nav">
          <header>
            <div id="mainTitle"><h1>The Movies Saga!</h1></div>
            <div id="links">
              <Link to="/Movie_List" style={{ textDecoration: 'none' }}>Movie List</Link>
              <Link to="/Add_Movie" style={{ textDecoration: 'none' }}>Add Movie</Link>
            </div>
          </header>
        </div>


        <Route path="/Movie_List">
          <MovieList />
        </Route>
      
        {/* Details page */}
        <Route path='/Details'>
          <Details />
        </Route>

        {/* Add Movie page */}
        <Route path="/Add_Movie">
          <AddMovie />
        </Route>

      </Router>
    </div>
  );
}


export default App;
