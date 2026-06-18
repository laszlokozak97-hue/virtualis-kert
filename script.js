let vizSzint = parseInt(localStorage.getItem('vizSzint')) || 50;
let statEtetes = parseInt(localStorage.getItem('statEtetes')) || 0;
let statItatas = parseInt(localStorage.getItem('statItatas')) || 0;
let xp = parseInt(localStorage.getItem('xp')) || 0;

const vizElem = document.getElementById('viz');
const cicaKarakter = document.getElementById('cica');

// Segítő funkció a rezgéshez
function rezges() {
  if (window.navigator.vibrate) window.navigator.vibrate(100);
}

function frissites() {
  vizElem.style.height = vizSzint + "%";
  document.getElementById('stat-etes').innerText = statEtetes;
  document.getElementById('stat-itas').innerText = statItatas;
  
  let szint = Math.floor(xp / 200);
  let statuszok = ["Kóbor", "Mentett", "Házi", "Szobatiszta", "Társ"];
  document.getElementById('statusz-kijelzo').innerText = "Státusz: " + (statuszok[szint] || "Cica-gurus");
  
  localStorage.setItem('vizSzint', vizSzint);
  localStorage.setItem('statEtetes', statEtetes);
  localStorage.setItem('statItatas', statItatas);
  localStorage.setItem('xp', xp);
}

document.getElementById('itatas-gomb').addEventListener('click', () => {
  rezges();
  vizSzint = Math.min(vizSzint + 10, 100);
  statItatas++;
  xp += 10;
  frissites();
});

document.getElementById('etetes-gomb').addEventListener('click', () => {
  rezges();
  statEtetes++;
  xp += 10;
  frissites();
});

document.getElementById('simi-gomb').addEventListener('click', () => {
  rezges();
  if (xp >= 50) { xp += 20; alert("Dorombol!"); } 
  else { alert("Még fél tőled!"); }
  frissites();
});

document.getElementById('tema-gomb').addEventListener('click', () => {
  rezges();
  document.body.classList.toggle('sotet-mod');
});

setInterval(() => {
  vizSzint = Math.max(vizSzint - 5, 0);
  xp = Math.max(xp - 2, 0);
  frissites();
}, 60000);

frissites();
