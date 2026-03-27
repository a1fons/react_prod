import '../css/studentliv_style.css'
import { Link } from 'react-router-dom';


export default function Student() {
    return (
        <main>
        <div className="container-info">
            <div className="container-text">
                <h3>Umeå naturvetar- och teknologkår</h3>
                <p>Studentlivet är ett stor del av ens studie tid och NTK har ett rikt student liv kopplat till sig.
                    Du kan engagera dig i ett fler tal olika samman hang kåren, sektionen, festriet, studentorkestern 
                    eller andra föreningar vid universitetet. På denna sida kommer du kunna hitta info om motagnigen,
                    ovveroller och sittningar. Det finns många sätt att engagera dig även om du 
                    inte gillar festande här kan man lätt titta mot sektionerna där finns det undergrupper
                    för sport, brädspel, lan och mycket mer. Om man vill bidra till student livet kan 
                    man alltid jobba på kårhuset origo där man dels får erfarenheter och vänner för livet.
                </p> 
            </div>
            <img  src="/assets/caps.JPG" alt="bild"/>
        </div>

        <div className="container-info">
            <div className="container-text">
                <h3>Mottagning</h3>
                <p>Varje höst anordnar NTK en mottagning för alla nya studnter, varje pogram
                    har en egen mottagning. Mottagningen startar litte olika beronde pogram men oftast en 
                    vecka inan kurstart på universitetet och sedan på går den i ungefär 3-4 veckor.
                    För ingengör pogramen så erbjuds det en preppmatte veckan inan kurstart som är anpassad 
                    efter motagningen.
                </p>
            </div>
            <video width="640" height="360" controls>
                <source src="/assets/video_studentliv.mp4" type="video/mp4"/>
                Din webbläsare stödjer inte video.
            </video>
        </div>

        <div className="container-info">
            <div>
                <h3>Ovveroller</h3>
                <p>Studentpalget på umeå universitet är ovver roller. På detta sätt kan man se folks pogramtilhörighet samt 
                    om folk till hör ett festeri eller liknade. Nedan för kan du både hitta info om bärande regler och Programfärger
                    för pogram under NTK. Om du har mer frågor kan du altid vända dig till Ovveralernas vänner umeå som är en grupp 
                    som vänar just för ovven. 
                </p>
            </div>
            <img src="/assets/OVE_grupp_bild.jpg" alt="ove_grupp"/>
            <img src="/assets/ovve_info.jpg" alt="ovve_info"/>
            <div>
                <h3>Bärrande regler</h3>
                <ul>
                    <li>Naken overall bärs generellt inte. Overallen ska ha namn/smeknamn sytt/målat/klistrat/tejpat på höger ben och det ska finnas minst tre märken på overallen. Observera att inom vissa program är det lite olika kulturer.</li>
                    <li>Overallen bärs vanligtvis nercabbat (den används som byxor med överdelen nerhängande). Vissa program tar på sig hela vid särskilda event.</li>
                    <li>Overall benämns i folkmun Ove.</li>
                    <li>Overallen får tvättas om man har den på sig. Får maskintvättas om man har annans kroppsvätskor på den eller har simmat i campusdammen med den.</li>
                    <li>Tisdagar är overallsdag i Umeå. Man bär då overall och i gamla Mitum säljer diverse festerier/sektioner/program märken mellan kl. 12-13.</li>
                    <li>Man får byta delar av overallens armar och ben med vem man vill utan förbehåll.</li>
                    <li>Byten av halskragar och ficklock sker med den person man har ett förhållande med.</li>
                    <li>Märken sys/klistras/häftas/tejpas varhelst man vill på overallen.</li>
                </ul>
            </div>
            <div className="container-text">
                <h3>Programfärger</h3>
                <table id="ovve_table">
                    <thead>
                        <tr>
                            <th>Färg</th>
                            <th>Program</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >Grå</td>
                            <td>Högskoleingenjör i maskinteknik</td>
                        </tr>
                        <tr>
                            <td>Orange</td>
                            <td>Högskoleingenjör i byggteknik</td>
                        </tr>
                        <tr>
                            <td>Vinröd</td>
                            <td>Högskoleingenjör i energiteknik</td>
                        </tr>
                        <tr>
                            <td>Vit</td>
                            <td>Högskoleingenjör i elektronik och datorteknik / medicinsk teknik</td>
                        </tr>
                        <tr>
                            <td>Svart</td>
                            <td>Civilingenjör i teknisk fysik</td>
                        </tr>
                        <tr>
                            <td>Gul</td>
                            <td>Civilingenjör i industriell ekonomi</td>
                        </tr>
                        <tr>
                            <td>Mörkblå</td>
                            <td>Civilingenjör i energiteknik</td>
                        </tr>
                        <tr>
                            <td>Mörkgrön</td>
                            <td>Civilingenjör i bioteknik</td>
                        </tr>
                        <tr>
                            <td>Khaki</td>
                            <td>Civilingenjör i interaktion och design</td>
                        </tr>
                        <tr>
                            <td>Ljusblå</td>
                            <td>Civilingenjör i teknisk datavetenskap</td>
                        </tr>
                        <tr>
                            <td>Ljusblå med mörklila revär</td>
                            <td>Kandidat/masterutbildningen i datavetenskap</td>
                        </tr>
                        <tr>
                            <td>Mörklila med gul revär</td>
                            <td>Kandidatprogrammet i matematik</td>
                        </tr>
                        <tr>
                            <td>Blå</td>
                            <td>Kandidatprogrammet i biologi och geovetenskap</td>
                        </tr>
                        <tr>
                            <td>Ljusgrön</td>
                            <td>Life science</td>
                        </tr>
                        <tr>
                            <td>Turkos</td>
                            <td>Miljö- och hälsoskyddsprogrammet</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        
            <div className="bild" id="ovve_bild">
            </div>
        </div>

        <div className="container-info-no-border">
            <div className="container-text">
                <h3>Event och sittningar</h3>
                <p>Kårhuset Origo drivs av Umeå naturvetar- och teknologkår och är drygt 400 kvadratmeter stort. 
                    Kårhuset kan på dagtid, 8-15, användas som  studieplats. 
                    Givetvis har vi trådlös internetuppkoppling. Kårhuset är utrustat med 
                    restaurangkök och bedriver  efter-plugget-pubverksamhet varje tisdag samt 
                    nattklubb fredagar och  lördagar. Självklart så har vi ett stort och 
                    varierat utbud av mat och  dryck. </p>
                <Link to="/origo">
                    <button>Info</button>
                </Link>
            </div>
            <img  src="/assets/sittning.jpg" alt="bild"/>
        </div>
        </main>
    )
}