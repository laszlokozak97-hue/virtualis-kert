const statuszKijelzo = document.getElementById("statusz-kijelzo");
const uzenet = document.getElementById("uzenet");
const statEtes = document.getElementById("stat-etes");
const cicaDiv = document.getElementById("cica"); // Ezt most hozzáadtuk
const hang = new Audio('nyavas.mp3');

let etetesSzam = 0;
let cicaSzint = "Kóbormacska";

function frissitCica() {
    if (etetesSzam >= 250) {
        cicaSzint = "Szuper csillag macska ⭐";
        cicaDiv.classList.add("aura"); // Itt adjuk hozzá az aurát!
    } else if (etetesSzam >= 200) {
        cicaSzint = "Szobatiszta kis kedvenc 🏠";
    } else if (etetesSzam >= 150) {
        cicaSzint = "Házi cica ❤️";
    } else if (etetesSzam >= 100) {
        cicaSzint = "Mentett jószág 🐾";
    } else if (etetesSzam >= 50) {
        cicaSzint = "Kóbormacska (túlélő) 🐈";
    } else {
        cicaSzint = "Kóbormacska";
    }
    statuszKijelzo.innerText = "Státusz: " + cicaSzint;
}

document.getElementById("itatas-gomb").addEventListener("click", () => {
    statuszKijelzo.innerText = "Státusz: " + cicaSzint + " (Megitatva 💧)";
    uzenet.innerText = "A cica boldogan iszik!";
});

document.getElementById("etetes-gomb").addEventListener("click", () => {
    etetesSzam++;
    statEtes.innerText = etetesSzam;
    frissitCica();
    uzenet.innerText = "Finom falatok!";
});

document.getElementById("simi-gomb").addEventListener("click", () => {
    hang.play();
    statuszKijelzo.innerText = "Státusz: " + cicaSzint + " (Dorombol 😻)";
    uzenet.innerText = "Nagyon élvezi a simogatást!";
});

document.getElementById("tema-gomb").addEventListener("click", () => {
    document.body.style.backgroundColor = document.body.style.backgroundColor === "rgb(51, 51, 51)" ? "white" : "#333";
    document.body.style.color = document.body.style.color === "white" ? "black" : "white";
    uzenet.innerText = "Téma váltva!";
});
