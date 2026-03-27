import '../css/index_style.css'
import { Link } from 'react-router-dom';


export default function Home(){
        return  (
        <main>
            <div className="container-info">
                <div className="container-text">
                    <h3>Umeå naturvetar- och teknologkår</h3>
                        <p>NTK är kåren för dig som studerar vid teknisk-naturvetenskaplig fakultet 
                                vid Umeå Universitet. Vi finns till för att göra din studietid så bra  
                                som möjligt. Detta gör vi bland annat genom att ordna roliga event, 
                                göra studenternas röster hörda, driva kårhus och se till att studenterna 
                                får bra näringslivsanknytning.</p> 
                    <button>
                        Bli medlem
                    </button>
                </div>
                <img  src="/assets/Karhuset_Origo.jpg" alt="bild"/>
            </div>

            <div className="container-info">
                <img  src="/assets/ovve_bild.png" alt="bild"/>
                <div className="container-text">
                    <h3>Studentlivet</h3>
                    <p>NTK är kåren för dig som studerar vid teknisk-naturvetenskaplig fakultet 
                        vid Umeå Universitet. Vi finns till för att göra din studietid så bra  
                        som möjligt. Detta gör vi bland annat genom att ordna roliga event, 
                        göra studenternas röster hörda, driva kårhus och se till att studenterna 
                        får bra näringslivsanknytning. 
                    </p>
                
                    <Link to="/studentliv">
                        <button>Info</button>
                    </Link>
                </div>
            </div>

            <div className="container-info-no-border">
                <div className="container-text">
                    <h3>Kårhuset Origo</h3>
                    <p>Kårhuset Origo drivs av Umeå naturvetar- och teknologkår och är drygt 400 kvadratmeter stort. 
                        Kårhuset kan på dagtid, 8-15, användas som  studieplats. 
                        Givetvis har vi trådlös internetuppkoppling. Kårhuset är utrustat med 
                        restaurangkök och bedriver  efter-plugget-pubverksamhet varje tisdag samt 
                        nattklubb fredagar och  lördagar. Självklart så har vi ett stort och 
                        varierat utbud av mat och  dryck. 
                    </p>
                    
                        
                    <Link to="/origo">
                        <button>Info</button>
                    </Link>
                </div>
                <img  src="/assets/Karhuset_Origo.jpg" alt="bild"/>
            </div>
        </main>
    )
}
        
