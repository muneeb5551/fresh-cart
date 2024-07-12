import './App.css';
import Navbar from './components/Navbar';
import Navbarsecond from './components/Navbarsecond';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Wishlist from './pages/Wishlist';
import Home from './pages/Home';

function App() {
  return (
    <>
    <div className="">

      <Router>
        <Navbar />
        <Navbarsecond />
        <Routes>
          <Route path='/' element={<Home />} />
         <Route path='/Wishlist' element={<Wishlist />} />
        </Routes>
        <Footer />
      </Router>

    </div>

    </>
  );
}

export default App;
