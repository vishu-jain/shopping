import './App.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Navbar from './navbar';
import Carousel from './Carousel';
import Signupform from './Signupform';
import Login from './Login';
import Casual from './products/casual';

function App() {
  return (
   <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Carousel/>} />
    <Route path="/signup" element={<Signupform/>} />
    <Route path="/login" element={<Login/>}/>
    <Route path="/casual" element={<Casual/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
