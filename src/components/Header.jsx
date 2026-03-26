export default function Header() {
    return(
            <header className="hero" style={{backgroundColor: '#05401C'}}>                
                <nav className="navbar">
                    <div className="logo">
                        <a href="index.html">
                            <img src="../assets/Ntk_logo_farg_vit.png" alt="NTK logo"/>
                        </a>
                    </div>

                    <ul className="nav-links" id="navLinks">
                        <li><a href="studentliv.html">Studentlivet</a></li>
                        <li><a href="origo.html">Origo</a></li>
                        <li><a href="sektioner.html">Sektioner</a></li>
                        <li><a href="om_oss.html">Om oss</a></li>
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