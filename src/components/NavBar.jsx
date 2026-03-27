import { Link } from 'react-router-dom';
import '../css/style.css'

export default function NavBar() {
    return(
            <main>                
                <nav className="navbar">
                    <div className="logo">
                        <Link to="/">
                        <img src="/assets/Ntk_logo_farg_vit.png" alt="NTK logo" />
                        </Link>
                    </div>

                    <ul className="nav-links" id="navLinks">
                        <li><Link to="/studentliv">Studentlivet</Link></li>
                        <li><Link to="/origo">Origo</Link></li>
                        <li><Link to="/sektioner">Sektioner</Link></li>
                        <li><Link to="/om-oss">Om oss</Link></li>
                        <li className="search">🔍</li>
                    </ul>
                    
                    <div className="hamburger" id="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </main>
    )
}