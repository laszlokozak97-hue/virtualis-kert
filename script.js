// Megkeressük a gombokat és a kijelzőt
const statuszKijelzo = document.getElementById("statusz-kijelzo");
const uzenet = document.getElementById("uzenet");
const statEtes = document.getElementById("stat-etes");

let etetesSzam = 0;

// Itatás funkció
document.getElementById("itatas-gomb").addEventListener("click", () => {
    statuszKijelzo.innerText = "Státusz: Megitatva 💧";
    uzenet.innerText = "A macska boldogan iszik!";
});

// Etetés funkció
document.getElementById("etetes-gomb").addEventListener("click", () => {
    statuszKijelzo.innerText = "Státusz: Jól lakott 🐟";
    etetesSzam++;
    statEtes.innerText = etetesSzam;
    uzenet.innerText = "Finom falatok!";
});

// Simogatás funkció
document.getElementById("simi-gomb").addEventListener("click", () => {
    statuszKijelzo.innerText = "Státusz: Dorombol 😻";
    uzenet.innerText = "Nagyon élvezi a simogatást!";
});

// Sötét mód
document.getElementById("tema-gomb").addEventListener("click", () => {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "white";
    uzenet.innerText = "Sötét mód bekapcsolva!";
});
let etetesSzam = 0;
let cicaSzint = "Kóbormacska";

function frissitCica() {
    if (etetesSzam >= 3 && etetesSzam < 6) {
        cicaSzint = "Mentett cica 🏠";
    } else if (etetesSzam >= 6 && etetesSzam < 10) {
        cicaSzint = "Házi cica ❤️";
    } else if (etetesSzam >= 10) {
        cicaSzint = "Szobatiszta sztárcica ⭐";
    }
    statuszKijelzo.innerText = "Státusz: " + cicaSzint;
}
const hang = new Audio('nyavas.mp3');

document.getElementById("simi-gomb").addEventListener("click", () => {
    hang.play(); // Itt játssza le a hangot
    statuszKijelzo.innerText = "Státusz: " + cicaSzint + " (Dorombol 😻)";
});

// Az etetés gombhoz add hozzá ezt a sort:
document.getElementById("etetes-gomb").addEventListener("click", () => {
    etetesSzam++;
    statEtes.innerText = etetesSzam;
    frissitCica(); // Itt hívjuk meg a fejlődést
    uzenet.innerText = "Finom falatok!";
});
