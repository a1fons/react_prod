import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import './css/style.css'
import Footer from './components/Footer';
import Student from './pages/studentliv';
import Header from './components/Header';

export default function App() {
    return(
        <>
          <Header />
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />} ></Route>
                <Route path='/' element={<Student />} ></Route>
              </Routes>
            </BrowserRouter>
          <Footer />
        </>
    )
}
