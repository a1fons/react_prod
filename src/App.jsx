import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import './css/style.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Student from './pages/studentliv';

export default function App() {
    return(
        <>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path='/' element={<Home />} ></Route>
                <Route path='/' element={<Student />} ></Route>
              </Routes>
            </BrowserRouter>
          <Footer />
        </>
    )
}
