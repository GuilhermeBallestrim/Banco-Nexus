// Novos dados dos cartões
const cartoes = [
    {
        img: 'assets/img/cartaobranco.png',
        titulo: 'Clássico - Para seu dia a dia',
        itens: [
            'Cashback em Compras',
            'Isenção de Anuidade',
            'App Nexus'
        ],
        subtitulo: "" // opcional
    },
    {
        img: 'assets/img/cartaocinza.png',
        titulo: 'Empresarial - Para a sua empresa',
        itens: [
            'Gestão de Gastos',
            'Seguro para Dispositivos Móveis',
            'Desconto em hotéis'
        ],
        subtitulo: "" // opcional
    },
    {
        img: 'assets/img/cartaopreto.png',
        titulo: 'Black - Vantagens que fazem a diferença',
        itens: [
            'Crédito com Pontos Nexus',
            'Seguro Viagem + Gympass',
            'Dólar Direto'
        ],
        subtitulo: "" // opcional
    }
];

// Seleção dos Elementos DOM
const cartaoWrapper = document.getElementById("cartao-central");
const cardCenter = document.getElementById("card-center");
const cardTitle = document.getElementById("card-title");
const cardList = document.getElementById("card-list");
const cardLeft = document.getElementById("card-left");
const cardRight = document.getElementById("card-right");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

let index = 0; // Índice inicial

function updateCarousel(direction) {
    if (direction === "prev") {
        index = (index - 1 + cartoes.length) % cartoes.length;
    } else if (direction === "next") {
        index = (index + 1) % cartoes.length;
    }

    render();
}

// Função de renderização com animação profissional
function render() {
    // aplica a classe para iniciar a animação de saída (fade-out)
    cartaoWrapper.classList.add("fade-out");

    // o tempo deve ser igual à transição no CSS (0.2s)
    setTimeout(() => {
        const centerCard = cartoes[index];

        // lógica dos vizinhos
        const leftCard = cartoes[(index - 1 + cartoes.length) % cartoes.length];
        const rightCard = cartoes[(index + 1) % cartoes.length];

        // Atualiza o cartão central
        cardCenter.src = centerCard.img;

        // Subtítulo opcional (nunca mostra undefined)
        cardTitle.innerHTML = `
            ${centerCard.titulo}
            ${centerCard.subtitulo ? `<br><span style="font-weight: 300; font-size: 14px;">${centerCard.subtitulo}</span>` : ""}
        `;

        // Atualiza a lista
        cardList.innerHTML = centerCard.itens
            .map(i => `<li>${i}</li>`)
            .join("");

        // Atualiza miniaturas laterais
        cardLeft.src = leftCard.img;
        cardRight.src = rightCard.img;

        // Remove animação (fade-in)
        cartaoWrapper.classList.remove("fade-out");

    }, 200);
}

// Botões
btnPrev.addEventListener('click', () => updateCarousel('prev'));
btnNext.addEventListener('click', () => updateCarousel('next'));

// Inicializa o carrossel
document.addEventListener('DOMContentLoaded', () => {
    render();
});
