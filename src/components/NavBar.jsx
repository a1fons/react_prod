import { Link } from 'react-router-dom';
import '../css/style.css'
import '../utils/functions'

export default function NavBar({backgroundcolor}) {
    return(               
            <nav className="navbar">
                <div className="logo">
                    <Link to="/">
                    <img src="/assets/Ntk_logo_farg_vit.png" alt="NTK logo" />
                    </Link>
                </div>

                <ul className="nav-links" id="navLinks" style={{background:backgroundcolor}}>
                    <li><Link to="/studentliv">Studentlivet</Link></li>
                    <li><Link to="/origo">Origo</Link></li>
                    <li><Link to="/sektioner">Sektioner</Link></li>
                    <li><Link to="/info">Om oss</Link></li>
                    <li className="search">🔍</li>
                </ul>
                
                <div className="hamburger" id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
    )
}