import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

// Import components
import MovieList from '../MovieList/MovieList'
import AddMovie from '../AddMovie/AddMovie';
import Details from '../Details/Details';
import DropdownTest from '../dropdownTest/dropdownTest';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <DropdownTest />

      <Router>        

        <div className="nav">
          <Link to="/Movie_List">Movie List</Link>
          <br />
          <Link to="/Add_Movie">Add Movie</Link>
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
