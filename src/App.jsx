 import Hero from './pages/Hero';
import './App.css';
import ProductPage from './pages/ProductPage';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Hero />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>   
    
    </>
  )
}

export default App
