import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import './css/style.css'
import Footer from './components/Footer';
import Student from './pages/studentliv';
import Origo from './pages/origo'

export default function App() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Home />} ></Route>
                  <Route path='/studentliv' element={<Student />} ></Route>
                  <Route path='/origo' element={<Origo />} ></Route>
                </Routes>
            </BrowserRouter>
          <Footer />
        </>
    )
}
