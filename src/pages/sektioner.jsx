import NavBar from '../components/Navbar';
import '../css/sektioner_style.css'


export default function sektioner(){
    return (
        <main>
        <header className="hero" style="background-color:#05401C">
            <NavBar className="nav-links"/>
            <div className="hero-content">
                <img src="/assets/sektioner.png" className="active" alt="sektioner"/>
                <img src="/assets/CS.png" alt="CS"/>
                <img src="/assets/logo-sektion-ds.png" alt="DS"/>
                <img src="/assets/I-Sektionen.png" alt="I"/>
                <img src="/assets/insekt-logga-ny-1-768x540.png" alt="Insekt"/>
                <img src="/assets/logo-sektion-f.png" alt="F-sektionen"/>
                <img src="/assets/Sigma.svg" alt="Sigma"/>
                <img src="/assets/logo-sektion-MEGA-pxi8kruh7gdk5farbjm1dmt64yicx4xqiox0sahjmg.png" alt="Mega"/>
                <img src="/assets/PhD.png" alt="PhD"/>
            </div>


        </header>

        <div className="container-info">
            <div className="container-text">
                <h3>Sektioner</h3>
                <p>Under NTK finns det åtta sektioner, sektionerna består av ett par pogram. Det är sektionerna
                    som är ansvriga över exemeplvis utbildnings bevaktnigen på deras program men även 
                    mer studentliviga saker som undergrupper och mottagnigen.  </p> 
            </div>
            <img  src="/assets/Ntk_logo_text.png" alt="ntk_loga"/>
        </div>

        <div className="container-info-no-border">
            <img src="/assets/CS.png" alt="CS_logo"/>
            <div className="container-text">
                <h3 className="collaps">CS ▼</h3>
                <div className="content">  
                    <p>CS sektionen är sektionen för studenter som studerar program kopplade till data vetenskap.
                        Programen är Civilingenjörs pogramen i teknisk-dataventenskap och interaktion och desing samt 
                        kandidat pogramet i teknisk-dataventenskap.
                    </p>
                    <h4>Du kan se mer om CS-sektionen på deras <a onmouseover="showMessage()"  href="https://www.cssektionen.se/">hemsida</a>, Facebook eller Instagram.</h4>
                </div>
            </div>
        </div>

        <div className="container-info-no-border">
            <img src="/assets/logo-sektion-ds.png" alt="design_logo"/>
            <div className="container-text">
                <h3 className="collaps">Design ▼</h3>
                    <div className="content">
                        <p>Design sektionen är sektionen för studenter som studerar program kopplade till industriel desing och 
                            arketektur. Programen är Arkitekt och industriel design.
                        </p>
                        <h4>Du kan se mer om Design-sektionen på deras Facebook.</h4>
                    </div> 
            </div>
        </div>

        <div className="container-info-no-border">
            <img src="/assets/logo-sektion-f.png" alt="F_logo"/>
            <div className="container-text">
                <h3 className="collaps">F ▼</h3>
                <div className="content"> 
                    <p>F sektionen är sektionen för studenter som studerar program kopplade till fysik.
                        Programen är Civilingenjörs pogramen i teknisk fysik, energi teknik och öppen ingåg samt 
                        basåret.
                    </p>
                    <h4>Du kan se mer om F-sektionen på deras Facebook eller Instagram.</h4>
                </div> 
            </div>
        </div>

        <div className="container-info-no-border">
            <img src="/assets/I-Sektionen.png" alt="I_logo"/>
            <div className="container-text">
                <h3 className="collaps">I ▼</h3>
                <div className="content"> 
                    <p>I sektionen är sektionen för studenter som studerar program kopplade till matematik.
                        Programen är Civilingenjörs pogramen i industriel ekonomi samt 
                        kandidat pogramet i matematik.
                    </p>
                    <h4>Du kan se mer om I-sektionen på deras hemsida, Facebook eller Instagram.</h4>
                </div> 
            </div>
        </div>

        <div className="container-info-no-border">
            <img src="/assets/insekt-logga-ny-1-768x540.png" alt="Insekt_logo"/>
            <div className="container-text">
                <h3 className="collaps">Insekt ▼</h3>
                <div className="content"> 
                    <p>Insekt sektionen är sektionen för studenter som studerar ett Högskoleingenjör pogram.
                        Programen är Byggteknik, masikt, energiteknik och elektronik och datateknik.
                    </p>
                    <h4>Du kan se mer om Insekt-sektionen på deras Facebook eller Instagram.</h4>
                </div> 
            </div>
        </div>

        <div className="container-info-no-border">
            <img src="/assets/logo-sektion-MEGA-pxi8kruh7gdk5farbjm1dmt64yicx4xqiox0sahjmg.png" alt="Mega_logo"/>
            <div className="container-text">
                <h3 className="collaps">Mega ▼</h3>
                <div className="content"> 
                    <p>Mega sektionen är sektionen för studenter som studerar program kopplade till biologi, geologi och 
                        miljövetenskap. Programen är kanditatpogramen biologi och geologi samt Miljöteknik.
                    </p>
                    <h4>Du kan se mer om Mega-sektionen på deras Facebook eller Instagram.</h4>
                </div> 
            </div>
        </div>

        <div className="container-info-no-border">
            <img src="/assets/Sigma.svg" alt="Sigma_logo"/>
            <div className="container-text">
                <h3 className="collaps">Sigma ▼</h3>
                <div className="content"> 
                    <p>Sigma sektionen är sektionen för studenter som studerar program kopplade till teknisk biologi.
                        Programen är Civilingenjörs pogramet i  bioteknik samt 
                        kandidat pogramet i Life science.
                    </p>
                    <h4>Du kan se mer om Sigma-sektionen på deras Facebook eller Instagram.</h4>
                </div> 
            </div>
        </div>

        <div className="container-info-no-border">
            <img src="/assets/PhD.png" alt="PhD_logo"/>
            <div className="container-text">
                <h3 className="collaps">PhD ▼</h3>
                <div className="content"> 
                    <p>PhD sektionen är sektionen för alla forskarstudenter vid Teknisk-naturvetenskaplig fakultet.
                </p>
                </div> 
            </div>
        </div>
        </main>
    )
}