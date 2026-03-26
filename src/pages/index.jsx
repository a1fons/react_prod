import '../css/index_style.css'

export default function Home(){
        return  (
        <main>
            <header className="hero" style={{backgroundColor: '#05401C'}}>                
                <div className="hero-content">
                    <h1>NTK</h1>
                    <h2>AV STUDENTER, FÖR STUDENTER</h2>
                </div>
            </header>
            <div className="container-info">
                <div className="container-text">
                    <h3>Umeå naturvetar- och teknologkår</h3>
                        <p>NTK är kåren för dig som studerar vid teknisk-naturvetenskaplig fakultet 
                                vid Umeå Universitet. Vi finns till för att göra din studietid så bra  
                                som möjligt. Detta gör vi bland annat genom att ordna roliga event, 
                                göra studenternas röster hörda, driva kårhus och se till att studenterna 
                                får bra näringslivsanknytning.</p> 
                    <button onClick="showMessage()"> Bli medlem </button>
                </div>
                <img  src="../assets/Karhuset_Origo.jpg" alt="bild"/>
            </div>

            <div className="container-info">
                <img  src="../assets/ovve_bild.png" alt="bild"/>
                <div className="container-text">
                    <h3>Studentlivet</h3>
                    <p>NTK är kåren för dig som studerar vid teknisk-naturvetenskaplig fakultet 
                        vid Umeå Universitet. Vi finns till för att göra din studietid så bra  
                        som möjligt. Detta gör vi bland annat genom att ordna roliga event, 
                        göra studenternas röster hörda, driva kårhus och se till att studenterna 
                        får bra näringslivsanknytning. 
                    </p>
                
                    <button onClick="window.location.href='studentliv.html'"> Info </button>
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
                    
                    
                    <button onClick="window.location.href='origo.html'" className="origo-button"> Info </button>
                    
                </div>
                <img  src="../assets/Karhuset_Origo.jpg" alt="bild"/>
            </div>
        </main>
    )
}
        
