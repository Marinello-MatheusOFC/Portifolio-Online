const textos = [
    "Desenvolvedor Web",
    "Designer com IA",
    "Criador de Conteúdo",
    ".NET Developer",
    "UI/UX Enthusiast"
];

let textoAtual = 0;
let letraAtual = 0;

// EFEITO MÁQUINA DE ESCREVER
function escrever() {
    const el = document.getElementById("typing");
    if (!el) return;

    el.textContent = textos[textoAtual].substring(0, letraAtual);
    letraAtual++;

    if (letraAtual > textos[textoAtual].length) {
        textoAtual = (textoAtual + 1) % textos.length;
        letraAtual = 0;
    }

    setTimeout(escrever, 120);
}
escrever();

// SCROLL SUAVE LINKS
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const alvo = document.querySelector(link.getAttribute("href"));
        if (alvo) {
            alvo.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// EFEITO FADE IN WINDOW
window.onload = () => {
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "1s";
        document.body.style.opacity = "1";
    }, 100);
};

// CANVAS MATRIX
const canvas = document.getElementById("matrix");
if (canvas) {
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letras = "01010101010101010101";
    const tamanho = 14;
    let colunas = Math.floor(canvas.width / tamanho);
    let gotas = [];

    for (let x = 0; x < colunas; x++) {
        gotas[x] = 1;
    }

    function desenhar() {
        ctx.fillStyle = "rgba(5,8,22,0.08)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#00d4ff";
        ctx.font = tamanho + "px monospace";

        for (let i = 0; i < gotas.length; i++) {
            const texto = letras[Math.floor(Math.random() * letras.length)];
            ctx.fillText(texto, i * tamanho, gotas[i] * tamanho);

            if (gotas[i] * tamanho > canvas.height && Math.random() > 0.975) {
                gotas[i] = 0;
            }
            gotas[i]++;
        }
    }
    setInterval(desenhar, 35);

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        colunas = Math.floor(canvas.width / tamanho);
        gotas = [];
        for (let x = 0; x < colunas; x++) {
            gotas[x] = 1;
        }
    });
}

// MODAL DAS IMAGENS (Unificado e corrigido)
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
        if (modal && modalImg) {
            modal.style.display = "flex";
            modalImg.src = img.src;
        }
    });
});

if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

if (modal) {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}

// BOTÃO MOSTRAR MAIS (Unificado e funcional)
// BOTÃO MOSTRAR MAIS (Aplica a ação para os dois botões juntos)
document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os botões de mostrar mais
    const botoes = document.querySelectorAll(".btn-mostrar-mais");

    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            // Pega a seção (<section>) onde ESSE botão específico está dentro
            const secaoAtual = botao.closest("section");
            
            // Busca as imagens extras APENAS dentro dessa seção atual
            const imagensDaGaleria = secaoAtual.querySelectorAll(".extra-img");

            // Verifica se o botão atual diz "Mostrar Mais"
            const abrindo = botao.textContent.trim() === "Mostrar Mais";

            // Abre ou fecha apenas as imagens dessa galeria
            imagensDaGaleria.forEach(img => {
                if (abrindo) {
                    img.classList.add("mostrar");
                } else {
                    img.classList.remove("mostrar");
                }
            });

            // Altera o texto apenas do botão que foi clicado
            botao.textContent = abrindo ? "Mostrar Menos" : "Mostrar Mais";
        });
    });
});