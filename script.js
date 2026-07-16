const inicio = new Date("2025-02-24");
const hoy = new Date();

const diferencia = hoy - inicio;
const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

document.getElementById("dias").textContent = dias;
const boton=document.getElementById("start");

boton.addEventListener("click",()=>{

document.getElementById("historia").scrollIntoView({
behavior:"smooth"
});

});
const elementos=document.querySelectorAll(".contenido");

const observar=new IntersectionObserver((entradas)=>{

entradas.forEach((entrada)=>{

if(entrada.isIntersecting){

entrada.target.animate([

{opacity:0,transform:"translateY(60px)"},

{opacity:1,transform:"translateY(0)"}

],{

duration:1200,

fill:"forwards"

});

}

});

});

elementos.forEach(e=>{

e.style.opacity=0;

observar.observe(e);

});
const aventura=document.querySelector("#aventura");

const efectoAventura=new IntersectionObserver((entradas)=>{

entradas.forEach((entrada)=>{

if(entrada.isIntersecting){

entrada.target.querySelector(".contenido").animate(
[
{
opacity:0,
transform:"translateY(80px)"
},
{
opacity:1,
transform:"translateY(0)"
}
],
{
duration:1200,
fill:"forwards"
}
);

}

});

});


if(aventura){

efectoAventura.observe(aventura);

}
function abrirCarta(elemento){

elemento.classList.toggle("abierta");

}
function iniciarMusica(){

const musica = document.getElementById("musica");

musica.play();

}