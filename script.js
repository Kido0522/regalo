const pantallas = document.querySelectorAll('.pantalla, .contenido');

function mostrar(id){
  pantallas.forEach(p => p.classList.remove('activa'));
  document.getElementById(id).classList.add('activa');
  window.scrollTo({top:0,behavior:'smooth'});
}

document.getElementById('abrirBtn').addEventListener('click', () => {
  mostrar('principal');
  document.getElementById('musica').play().catch(() => {});
});

document.querySelectorAll('.tarjeta').forEach(btn => {
  btn.addEventListener('click', () => mostrar(btn.dataset.seccion));
});

document.querySelectorAll('.volver').forEach(btn => {
  btn.addEventListener('click', () => mostrar('principal'));
});

const corazones = ['💗','💕','💖','🌸','✨','🐱'];
const contenedor = document.querySelector('.hearts');

setInterval(() => {
  const h = document.createElement('span');
  h.className = 'heart';
  h.textContent = corazones[Math.floor(Math.random()*corazones.length)];
  h.style.left = Math.random()*100 + 'vw';
  h.style.animationDuration = (5 + Math.random()*5) + 's';
  h.style.fontSize = (12 + Math.random()*18) + 'px';
  contenedor.appendChild(h);
  setTimeout(() => h.remove(), 11000);
}, 700);
