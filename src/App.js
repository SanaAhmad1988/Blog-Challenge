import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Create from './pages/Create';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogDetails from './pages/BlogDetails';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Navbar />
          <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/Create' element={<Create/>} />
             <Route path='/Blog.id' element={<BlogDetails/>} />
        </Routes>
     </BrowserRouter>
   
       </div> 
  );
}

export default App;



