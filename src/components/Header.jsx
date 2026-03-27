import { Link } from 'react-router-dom';

export default function Header() {
    return(
            <header className="hero" style={{backgroundColor: '#05401C'}}>                
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

                <div className="hero-content">
                    <h1>NTK</h1>
                    <h2>AV STUDENTER, FÖR STUDENTER</h2>
                </div>
            </header>
    )
}