import './App.css';
import { Route, Routes } from 'react-router-dom';

//Templetes
import Header from './templates/Header';
import Footer from './templates/Footer';

//Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={Home()}></Route>
        <Route exact path="/about" element={About()}></Route>
        <Route exact path="/contact" element={Contact()}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
