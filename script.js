const textos=[
"Desenvolvedor Web",
"Designer com IA",
"Criador de Conteúdo",
".NET Developer",
"UI/UX Enthusiast"
];

let textoAtual=0;
let letraAtual=0;

function escrever(){
const el=document.getElementById("typing");

if(!el)return;

el.textContent=textos[textoAtual].substring(0,letraAtual);

letraAtual++;

if(letraAtual>textos[textoAtual].length){
textoAtual=(textoAtual+1)%textos.length;
letraAtual=0;
}

setTimeout(escrever,120);
}

escrever();

document.querySelectorAll('a[href^="#"]').forEach(link=>{
link.addEventListener("click",e=>{
e.preventDefault();

const alvo=document.querySelector(
link.getAttribute("href")
);

if(alvo){
alvo.scrollIntoView({
behavior:"smooth"
});
}
});
});

window.onload=()=>{
document.body.style.opacity="0";

setTimeout(()=>{
document.body.style.transition="1s";
document.body.style.opacity="1";
},100);
};

const canvas=document.getElementById("matrix");

if(canvas){

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const letras="01010101010101010101";
const tamanho=14;

let colunas=Math.floor(
canvas.width/tamanho
);

let gotas=[];

for(let x=0;x<colunas;x++){
gotas[x]=1;
}

function desenhar(){

ctx.fillStyle="rgba(5,8,22,0.08)";
ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);

ctx.fillStyle="#00d4ff";
ctx.font=tamanho+"px monospace";

for(let i=0;i<gotas.length;i++){

const texto=
letras[Math.floor(
Math.random()*letras.length
)];

ctx.fillText(
texto,
i*tamanho,
gotas[i]*tamanho
);

if(
gotas[i]*tamanho>
canvas.height &&
Math.random()>0.975
){
gotas[i]=0;
}

gotas[i]++;
}
}

setInterval(desenhar,35);

window.addEventListener(
"resize",
()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

colunas=Math.floor(
canvas.width/tamanho
);

gotas=[];

for(let x=0;x<colunas;x++){
gotas[x]=1;
}

}
);

}

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".gallery img").forEach(img => {

    img.addEventListener("click", () => {

        modal.style.display = "flex";
        modalImg.src = img.src;

    });

});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {

    if(e.target === modal){
        modal.style.display = "none";
    }

});