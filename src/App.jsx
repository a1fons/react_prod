import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/style.css'
import Home from './pages/index';
import Footer from './components/Footer';
import Student from './pages/studentliv';
import Origo from './pages/origo'
import Sektioner from './pages/sektioner';
import Info from './pages/om_oss';

export default function App() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Home />} ></Route>
                  <Route path='/studentliv' element={<Student />} ></Route>
                  <Route path='/origo' element={<Origo />} ></Route>
                  <Route path='/sektioner' element={<Sektioner />} ></Route>
                  <Route path='/info' element={<Info />} ></Route>
                </Routes>
            </BrowserRouter>
          <Footer />
        </>
    )
}
