import NavBar from '../components/Navbar';
import '../css/om_oss_style.css'

export default function Info(){
    return (
        <main>
            <header className="hero-info">
                <NavBar page="#05401C"/>
                <div className="hero-info-content">
                    <img src="/assets/Ntk_logo_text_vit.png" alt="NTK_logo_vit"/>
                </div>
            </header>

            <div className="container-info">
                <div className="container-text">
                    <h3>NTK</h3>
                    <p>NTK är kåren för dig som studerar vid teknisk-naturvetenskaplig fakultet 
                        vid Umeå Universitet. Vi finns till för att göra din studietid så bra  
                        som möjligt. Detta gör vi bland annat genom att ordna roliga event, 
                        göra studenternas röster hörda, driva kårhus och se till att studenterna 
                        får bra näringslivsanknytning.</p> 
                    <button> Bli medlem </button>
                </div>
                <div className="bild">
                    <img src="/assets/fotanen_styrsle.png" alt="bild"/>
                </div>
            </div>

            <div className="container-info">
                <img src="/assets/Styrelsen.png" alt="bild"/>
                <div className="container-text">
                    <h3>Styrelsen</h3>
                    <p>Stryrelsen består av tre tre personer en kårordförande, utbildningsbevakare och en studimiljöanvarig.
                        halvtid dessa är också studenter och är valda av kårfulmäktige(fum).  </p>
                </div>

                <div className="container-text">
                    <h3>Ledarmötten</h3>
                    <p>Utöver själva styrelsen så består sytrelsen också av tre Ledarmötten en för doctorander
                        och två för studenterna. Dessa hjälper styrelsen med koplingen till de studerade 
                        även dessa är valda av fum.
                    </p>
                </div>
                <img src="/assets/ledarmotter.png" alt="ledarmotter"/>
            </div>

            <div className="container-info">
                <img  src="/assets/Opperativagruppen.png" alt="Operativagruppen"/>
                <div className="container-text">
                    <h3>Operativagruppen</h3>
                    <p>
                        Den Operativagruppen är personer som jobbar för kåren och anonar med olika 
                        saker som arbetsmarknad, mottagning och event. Dessa är också studenter och
                        som alla andra student respresntater inröstade av fum. 
                    </p>
                </div>
            </div>

            <div className="container-info">
                <div className="container-text">
                    <h3>FUM</h3>
                    <p>Kårfulmäktige är som NTKs riksdag och röstar in kårstyrelsen. FUM består
                        av respresntater från varje sektion där sektionerna själva röstar in sina 
                        respresntater. Fulmäktige leds av en Talman och en vice talman det är dessa 
                        som ut gör presidium. Utöver att rösta in personer så är FUMs uppdrag att 
                        bestäma vad kåren ska jobba mot.  
                    </p>
                </div>
                <img src="/assets/presidium.png" alt="presidium"/>

            </div>
            <div className="formular">
                <form action="skicka.php" method="post"/>
                    
                    <label for="namn">Namn:</label><br/>
                    <input type="text" id="namn" name="namn" required/><br/><br/>
                    
                    <label for="epost">E-post:</label><br/>
                    <input type="email" id="epost" name="epost" required/><br/><br/>
                    
                    <label for="meddelande">Meddelande:</label><br/>
                    <textarea id="meddelande" name="meddelande" rows="5" cols="30"></textarea><br/><br/>
                    
                    <input type="submit" value="Skicka"/>
                    
                <form/>
            </div>
        </main>
    )
}