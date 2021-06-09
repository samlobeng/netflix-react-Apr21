
import './App.css';
import CustomNavbar from './Component/Navbar';
import Header from './Component/Header';
import RowOfMovies from './Component/RowOfMovies';
import ShowDetail from './Component/ShowDetail';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
    <CustomNavbar/>
    <Header/>
    <RowOfMovies title='Star Wars'/>
    <RowOfMovies title='Harry Potter'/>
    <RowOfMovies title='The lord of the rings'/>
    <Route path="/detail/:id/" component={ShowDetail} />
    </Router>
    </>
  );
}

export default App;
