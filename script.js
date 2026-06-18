// Elemek kiválasztása
const statuszKijelzo = document.getElementById("statusz-kijelzo");
const uzenet = document.getElementById("uzenet");
const statEtes = document.getElementById("stat-etes");
const cicaDiv = document.getElementById("cica");
const vizDiv = document.getElementById("viz");
const temaGomb = document.getElementById("tema-gomb");

let etetesSzam = 0;
let vizSzint = 50; // Kezdő vízszint

// 1. VÍZ FOGYÁS: Minden 60 másodpercben csökken 10%-ot
setInterval(() => {
    if (vizSzint > 0) {
        vizSzint -= 10;
        vizDiv.style.height = vizSzint + "%";
    }
}, 60000);

// 2. SZINTLÉPÉS LOGIKA
function frissitCica() {
    let szint = "Kóbormacska";
    if (etetesSzam >= 250) { szint = "Szuper csillag macska ⭐"; cicaDiv.classList.add("aura"); }
    else if (etetesSzam >= 200) szint = "Szobatiszta kis kedvenc 🏠";
    else if (etetesSzam >= 150) szint = "Házi cica ❤️";
    else if (etetesSzam >= 100) szint = "Mentett jószág 🐾";
    else if (etetesSzam >= 50) szint = "Kóbormacska (túlélő) 🐈";
    
    statuszKijelzo.innerText = "Státusz: " + szint;
}

// 3. GOMBOK MŰKÖDÉSE
document.getElementById("itatas-gomb").addEventListener("click", () => {
    vizSzint = Math.min(100, vizSzint + 20);
    vizDiv.style.height = vizSzint + "%";
    uzenet.innerText = "A cica hálásan iszik! 💧";
});

document.getElementById("etetes-gomb").addEventListener("click", () => {
    etetesSzam++;
    statEtes.innerText = etetesSzam;
    frissitCica();
    const etetesUzenetek = ["Nyamm, ez finom! 🐟", "Fúj, ez nem ízlik!", "Tele a pocak! 😋", "Még kérek!"];
    uzenet.innerText = etetesUzenetek[Math.floor(Math.random() * etetesUzenetek.length)];
});

document.getElementById("simi-gomb").addEventListener("click", () => {
    const simiUzenetek = ["Dorombol: prrr... 😻", "Nyávog egyet neked! 😺", "Fúj rád, ne piszkáld! 😾", "Fél tőled... 🐈", "Bújik hozzád! ❤️"];
    uzenet.innerText = simiUzenetek[Math.floor(Math.random() * simiUzenetek.length)];
});

// 4. SÖTÉT MÓD KAPCSOLÓ
temaGomb.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
