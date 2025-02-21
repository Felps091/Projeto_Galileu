// IMPORTAÇÃO DOS ARQUIVOS DE TEXTO
import { data } from './data.js';

// FUNÇÃO PARA EXIBIR O MENU PARA DISPOSITIVOS MENORES
const mobileMenu = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

mobileMenu.addEventListener('click', () =>{
    menu.classList.toggle('active');
});

const sections = document.querySelectorAll('.hidden');

// FUNÇÃO PARA EXIBIR O CONTEÚDO OCULTO
function reveal() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 50) {
            section.classList.add('show');
        }
    });
}

// FUNÇÃO PARA EXIBIR O CONTEÚDO OCULTO - EXECUTA APÓS O SCROLL
window.addEventListener('scroll', reveal);

// FUNÇÃO PARA CRIAR OS CARTÕES DA SESSÃO DESTINOS
const cartoes = document.getElementById('cartoes');

function createCard(item){
    return`
    <div class="card-turismo">
            <div class="card-image">
                <img src="${item.imagem}" alt="">
            </div>

            <div class="detalhes">
                <h1 class="titulo">${item.titulo}</h1>
                <p class="conteudo">${item.conteudo}</p>
                <a class="btn-saiba-mais" href="${item.link}">Leia mais</a>
            </div>
        </div>
    `;
}

// FUNÇÃO PARA EXIBIR TODOS OS CARTÕES
function listCard(data){
    const cards = data.map(createCard).join('');
    cartoes.innerHTML = cards;
}

listCard(data);

// FUNÇÃO DO SLIDESHOW
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

// NAVEGAÇÃO AUTOMÁTICA ENTRE OS SLIDES
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}, 5000);

// BOTÕES DE PRÓXIMO E ANTERIOR DO SLIDESHOW
document.querySelector('.nav-btn.left')?.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
});

document.querySelector('.nav-btn.right')?.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
});







