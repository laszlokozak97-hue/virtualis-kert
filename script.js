const statuszKijelzo = document.getElementById("statusz-kijelzo");
const uzenet = document.getElementById("uzenet");
const statEtes = document.getElementById("stat-etes");
const cicaDiv = document.getElementById("cica");
const vizDiv = document.getElementById("viz");
const hang = new Audio('nyavas.mp3');

let etetesSzam = 0;
let vizSzint = 0;

function frissitCica() {
    let szint = "Kóbormacska";
    if (etetesSzam >= 250) {
        szint = "Szuper csillag macska ⭐";
        cicaDiv.classList.add("aura");
    } else if (etetesSzam >= 200) szint = "Szobatiszta kis kedvenc 🏠";
    else if (etetesSzam >= 150) szint = "Házi cica ❤️";
    else if (etetesSzam >= 100) szint = "Mentett jószág 🐾";
    else if (etetesSzam >= 50) szint = "Kóbormacska (túlélő) 🐈";
    
    statuszKijelzo.innerText = "Státusz: " + szint;
}

document.getElementById("itatas-gomb").addEventListener("click", () => {
    if (vizSzint < 100) {
        vizSzint += 10;
        vizDiv.style.height = vizSzint + "%";
        vizDiv.style.backgroundColor = "blue";
    }
    uzenet.innerText = "A cica boldogan iszik!";
});

document.getElementById("etetes-gomb").addEventListener("click", () => {
    etetesSzam++;
    statEtes.innerText = etetesSzam;
    frissitCica();
});

document.getElementById("tema-gomb").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
