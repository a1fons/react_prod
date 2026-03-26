import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import './css/style.css'

export default function App() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} ></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
