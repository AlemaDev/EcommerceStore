import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer/Footer';
import Auth from './components/Auth/Auth';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
          <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/auth" exact element={<Auth />} />
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
