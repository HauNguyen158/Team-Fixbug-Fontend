import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carousel from './components/layout/Carousel';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Carousel />}/>
        <Route path='/home' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>                 
    </BrowserRouter>
  );
}

export default App;
