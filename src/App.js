import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import CreatePages from './pages/CreatePages';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Navbar />
          <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/CreatePages' element={<CreatePages />} />
        </Routes>
     </BrowserRouter>
   
       </div> 
  );
}

export default App;



