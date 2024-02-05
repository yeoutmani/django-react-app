import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './components/login';
import { Logout } from './components/logout';
import { Navigation } from './components/Navigate';
import { Home } from './components/Home';
import Navbar from './components/NavBar';
import About from './components/About';

import Create from './components/Create';


function App() {
  const myWidth = 220

  return (
  <BrowserRouter>
    <Navigation></Navigation>
      <div className="App">
        <Navbar
          drawerWidth={myWidth}
          content={
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/create" element={<Create />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          }
        />
      </div>
  </BrowserRouter>
)
}
export default App;
