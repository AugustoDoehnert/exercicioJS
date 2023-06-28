const listaPosts = [
    {
        id: 1,
        titulo: "Negão",
        descricao: "Negão é um vira lata, adulto, vacinado, encontrado morando perto de um posto de gasolina na beira da estrada, ele odeia ser chamado de palmeirense.",
        imgURL: "./img/viralata1.jpg"
    },
    {
        id: 2,
        titulo: "Churros",
        descricao: "Churros é um vira lata, filho de umas das cadelas do abrigo.",
        imgURL: "./img/cachorro.webp",
    },
    {
        id: 3,
        titulo: "Cesar",
        descricao: "Cesar é um gato que foi encontrado na rua, ele estava muito doente e feio, mas agr bonito charmoso e elegante para ser adotado.",
        imgURL: "./img/gato.webp",
    },
    {
        id: 4,
        titulo: "Belzebuh",
        descricao: "Belzebuh é um filhote de pinscher, virado no diabo, pronto ter amor e carinho.",
        imgURL: "./img/pinscher.webp",
    },
    {
        id: 5,
        titulo: "Bolinha",
        descricao: "Bolinha é uma pitbull, ela é muito esperta e ama atividades fisicas.",
        imgURL: "./img/pitbull.jpg",
    },
    {
        id: 6,
        titulo: "Bagre",
        descricao: "Bagre é um bagre, unidade unica, feito pra um aquario.",
        imgURL: "./img/bagre.png",
    },
    {
        id: 7,
        titulo: "Boto",
        descricao: "O boto foi encontrado na beira do rio muito doente e desnutrido, e nos fomos atras dele para cuidar dele, e agora ele esta pronto para ter uma familia para que vai amar e cuidar dele.",
        imgURL: "./img/boto.jpg",
    },
    {
        id: 8,
        titulo: "Tucunaré",
        descricao: "Tucunaré é um Tucunaré, unidade unica, feito pra um aquario.",
        imgURL: "./img/tucuanre.jpg",
    },
    {
        id: 9,
        titulo: "Helio",
        descricao: "Helio é um papagaio, de voz fina, que ODEIA o flamengo, e em dias de estresse só se acalma com o hino do vasco.",
        imgURL: "./img/papagaio.jpg",
    },
    {
        id: 10,
        titulo: "Perry",
        descricao: "Perry o ornitorrinco, é um animal muito docil e carinhoso, gosta de usar seu chapéu, e ama água.",
        imgURL: "./img/ornitorrinco.jpg",
    },
];

let container = document.querySelector(".container");

const criacaoPosts = () => {
    listaPosts.forEach((post) => {
        let card = `
            <div class="card">
                <img class="card-img" src=${post.imgURL} />
                <h2 class="card-titulo"> ${post.titulo}</h2>
                <p class="card-descricao"> ${post.descricao}</p>
                <a class="card-botao" idAnimal="${post.id}">ADOTAR</a>
            </div>
        `;
        container.innerHTML += card;
    });
}

window.onload = () => {
    criacaoPosts();
    let cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.addEventListener("mouseover", () => {
            card.style.backgroundColor = "yellow";
        });
        card.addEventListener("mouseout", () => {
            card.style.backgroundColor = "transparent";
        })

        card.lastElementChild.addEventListener("click", (event) => {
            console.log("ebtrdmfkdm");
            event.preventDefault();

            sessionStorage.setItem(
                "idAnimal",
                 card.lastElementChild.getAttribute("idAnimal")
            );
            window.location.href = "../adotar.html"
        });
    });
};
/*
inputTest = document.getElementById("inputtext")

inputTest.addEventListener("keydown", (tecla) => {
    alert("tecla pressionada: " + tecla.key);
})*/
