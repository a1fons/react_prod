import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
