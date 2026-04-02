import NavBar from '../components/Navbar';
import '../css/origo_style.css'


export default function Origo(){
    return (
        <main>
            <header className="hero-origo">
            <NavBar backgroundcolor="#031D44"/>
            <div className="hero-content">
                <h1>ORIGO</h1>
                <h2>(0,0,0)</h2>
            </div>
            
        </header>

        <div className="container-info-origo">
            <div className="container-text">
                <h3>Kårhuset Origo</h3>
                <p>Hos oss på Kårhuset Origo kan du boka allt från sittningar 
                    till  företagskvällar. Om du vill göra en bokning skickar 
                    ni ett mail till  Kårhuschefen, origo@ntkumea.se,  
                    med detaljer kring vad bokningen gäller och vilket 
                    datum ni önskar boka. Kårhuschefen kommer då att meddela 
                    om datumet och bokningen går att  genomföra samt bifoga rätt 
                    bokningskontrakt. När ni fått kontraktet är  datumet preliminärt 
                    bokat och det är först när ni lämnat in kontraktet  som bokningen 
                    är gjord.</p> 
                <button className="origo-button"> BOKA </button>
            </div>
            <img  src="/assets/Karhuset_Origo.jpg" alt="bild"/>
        </div>

        <div className="container-info-origo">
            <img  src="/assets/kallender.png" alt="bild"/>
            <div className="container-text">
                <h3>Öppettider</h3>
                <p>Tisdagar: 17.00-20.00 EPP
                    Fredagar: 22.00-02.00 Nattklubb 
                    Lördagar: 22.00-02.00 Nattklubb </p>
                <h3>EPP</h3>
                <p>Varje tisdag bjuder origo in till ett skönt avslut på dagen, Efter Plugget Pub!
                    Kom till origo för att njuta av trevligt sällskap, god mat för en billig  
                    peng och ta del av vårt breda dryckesutbud! Vi har även brädspel 
                    som går att låna för att göra hänget ännu trevligare!
                    Släpp tankarna på plugget för en stund, välkomna! </p>
                <h3>Nattklubb</h3>
                <p>Varje tisdag bjuder origo in till ett skönt avslut på dagen, Efter Plugget Pub!
                    Kom till origo för att njuta av trevligt sällskap, god mat för en billig  
                    peng och ta del av vårt breda dryckesutbud! Vi har även brädspel 
                    som går att låna för att göra hänget ännu trevligare!
                    Släpp tankarna på plugget för en stund, välkomna!</p>
            </div>
        </div>

        <div className="container-info-no-border-origo">
            <div className="container-text">
                <h3>Kontakt</h3>
                <p>Kårhuset Origo drivs av Umeå naturvetar- och teknologkår och är drygt 400 kvadratmeter stort. 
                    Kårhuset kan på dagtid, 8-15, användas som  studieplats. 
                    Givetvis har vi trådlös internetuppkoppling. Kårhuset är utrustat med 
                    restaurangkök och bedriver  efter-plugget-pubverksamhet varje tisdag samt 
                    nattklubb fredagar och  lördagar. Självklart så har vi ett stort och 
                    varierat utbud av mat och  dryck. </p>
            </div>
            <img className="img_no_border"  src="/assets/origo_khc.png" alt="bild"/>
        </div>
        </main>
    );
}