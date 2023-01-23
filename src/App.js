import './App.css';
import { Route, Routes } from 'react-router-dom';

//Templetes
import Header from './templates/Header';
import Footer from './templates/Footer';

//Pages
import Home from './pages/Home';
import Notfound from './pages/Notfound';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={Home()}></Route>
        <Route path='*' element={Notfound()}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
