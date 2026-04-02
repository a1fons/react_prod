const ovve = [
    {image: "images/ovver_farg.jpg", program:"Program"},
    {image: "images/ding_ovve.jpg", program:"Högskoleingenjör i elektronik och datorteknik / medicinsk teknik"},
    {image: "images/tf_ovve.jpg", program:"Civilingenjör i teknisk fysik"},
    {image: "images/biotex_ovve.jpg", program:"Civilingenjör i bioteknik"},
    {image: "images/Khaki.jpg", program:"Civilingenjör i interaktion och design"},
    {image: "images/data_ovve.jpg", program:"Civilingenjör i teknisk datavetenskap"},
    {image: "images/biogeo_ovve.jpg", program:"Kandidatprogrammet i biologi och geovetenskap"},
];

function showRandomOvve() {

    const index = Math.floor(Math.random() * ovve.length);
    const selectedProgram = ovve[index].program;

    document.getElementById("ovve_bild").innerHTML =
        `<img src="${ovve[index].image}" alt="ovve bild">`;

    const rows = document.querySelectorAll("#ovve_table tbody tr");

    rows.forEach(row => {
        row.style.fontWeight = "normal";

        const programCell = row.querySelector("td:nth-child(2)");

        if (programCell && programCell.textContent.trim() === selectedProgram) {
            row.style.fontWeight = "bold";
        }
    });
}

window.onload = showRandomOvve;