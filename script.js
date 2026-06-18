const statuszKijelzo = document.getElementById("statusz-kijelzo");
const uzenet = document.getElementById("uzenet");
const statEtes = document.getElementById("stat-etes");
const cicaDiv = document.getElementById("cica");
const vizDiv = document.getElementById("viz");
const hang = new Audio('nyavas.mp3');

let etetesSzam = 0;
let vizSzint = 100; // Kezdjük tele a pohárral

// Víz fogyasztása percenként (60000 ms = 1 perc)
setInterval(() => {
    if (vizSzint > 0) {
        vizSzint -= 5;
        vizDiv.style.height = vizSzint + "%";
    }
}, 60000);

function frissitCica() {
    let szint = "Kóbormacska";
    if (etetesSzam >= 250) { szint = "Szuper csillag macska ⭐"; cicaDiv.classList.add("aura"); }
    else if (etetesSzam >= 200) szint = "Szobatiszta kis kedvenc 🏠";
    else if (etetesSzam >= 150) szint = "Házi cica ❤️";
    else if (etetesSzam >= 100) szint = "Mentett jószág 🐾";
    else if (etetesSzam >= 50) szint = "Kóbormacska (túlélő) 🐈";
    statuszKijelzo.innerText = "Státusz: " + szint;
}

document.getElementById("itatas-gomb").addEventListener("click", () => {
    vizSzint = Math.min(100, vizSzint + 20);
    vizDiv.style.height = vizSzint + "%";
    uzenet.innerText = "A cica hálásan iszik! 💧";
});

document.getElementById("etetes-gomb").addEventListener("click", () => {
    etetesSzam++;
    statEtes.innerText = etetesSzam;
    frissitCica();
    // Véletlenszerű reakció etetésnél
    const reakciok = ["Nyamm, ez finom! 🐟", "Fúj, ez nem ízlik!", "Tele a pocak! 😋", "Még kérek!"];
    uzenet.innerText = reakciok[Math.floor(Math.random() * reakciok.length)];
});

document.getElementById("simi-gomb").addEventListener("click", () => {
    try { hang.play(); } catch(e) {}
    uzenet.innerText = etetesSzam > 20 ? "Dorombol: prrr... prrr... 😻" : "Fél tőled, de hagyja magát simogatni... 🐈";
});

document.getElementById("tema-gomb").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
