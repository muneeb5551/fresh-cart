import './App.css';
import Adds from './components/Adds';
import Featured from './components/Featured';
import Herocarousel from './components/Herocarousel';
import Items from './components/Items';
import Navbar from './components/Navbar';
import Navbarsecond from './components/Navbarsecond';
import Popular from './components/Popular';

function App() {
  return (
    <>
    <Navbar />
    <Navbarsecond />
    <Herocarousel />
    <Featured />
    <Items />
    <Adds />
    <Popular />
    </>
  );
}

export default App;
