import './App.css';
import Hero from './pages/Hero.jsx';
import ProductPage from './pages/ProductPage.jsx';
import AllCakes from './pages/AllCakes.jsx';
import Birthday from './pages/Birthday.jsx';
import Themed from './pages/Themed.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (

    <>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Hero />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/all" element={<AllCakes />} />
          <Route path='/birthday' element={<Birthday/>}/>
          <Route path='/themed' element={<Themed/>}/>
        </Routes>
      </BrowserRouter>    
    </>
  )
}

export default App