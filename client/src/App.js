import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer/Footer';
import Auth from './components/Auth/Auth';
import NewAccount from './components/Auth/NewAccount/NewAccount';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
          <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/login" exact element={<Auth />} />
              <Route path="/signup" exact element={<NewAccount />} />
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
