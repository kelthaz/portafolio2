import './App.css';
import Home from './Components/Home/Home.js'
import Contact from './Components/Contact/Contact.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


function App() {
  return (
        <BrowserRouter>
          <AppBar position="static" style={{ background: '#24292f' }}>
            <Toolbar>
              <Link to='/home'>
                <Button color="inherit">Acerca de </Button>
              </Link>
              <Link to='/contact'>
                <Button color="inherit">Contacto</Button>
              </Link>
              {/* <Button color="inherit">Mis habilidades </Button>
              <Button color="inherit">Trabajar</Button>
              
              <Button color="inherit">Blog</Button> */}
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path="/home"   element={<Home />}> </Route> 
            <Route path="/contact"  element={<Contact />}></Route> 
          </Routes>
        </BrowserRouter>
  );
}

export default App;
