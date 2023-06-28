let formulario = document.querySelector("form");

const objObrigatorio =
`
<div class="campo-obrigatorio">
    <img src="../img/errro.png">
    <small> * Campo obrigatorio </small>
</div>

`;

let control = true


const checkInputs = (nome, telefone, email, renda, residencia, opcaoResidencia, intencao) => {
    if (nome.value.trim() == "") {
        nome.classList.add("erro");
        control = false;

        nome.parentElement.innerHTML += objObrigatorio;
    }
    if (telefone.value.trim() == "") {
        telefone.classList.add("erro");
        control = false;

        telefone.parentElement.innerHTML += objObrigatorio;
    }
    if (email.value.trim() == "") {
        email.classList.add("erro");
        control = false;

        email.parentElement.innerHTML += objObrigatorio;
    }
    if (renda == null) {
        let divRenda = document.querySelector(".form-item-radio").parentElement;
        divRenda.classList.add("erro");
        control = false;
        
        divRenda.innerHTML += objObrigatorio;
    }
    if (opcaoResidencia.value == "") {
        residencia.classList.add("erro");
        control = false;

        residencia.parentElement.innerHTML += objObrigatorio;
    }
    if(intencao.value == ""){
        intencao.classList.add("erro");
        control = false;

        intencao.parentElement.innerHTML += objObrigatorio;
    }
    return control;
}

formulario.addEventListener("submit", (event) => {

    let nome = document.querySelector("#nome");
    let telefone = document.querySelector("#telefone");
    let email = document.querySelector("#email");
    let renda = document.querySelector("input[type='radio']:checked");
    let residencia = document.querySelector("#residencia")
    let opcaoResidencia = residencia.options[residencia.selectedIndex];
    let intencao = document.querySelector("#intencao");

    if (!checkInputs(nome, telefone, email, renda, residencia, opcaoResidencia, intencao)) {
        event.preventDefault();
    } else {

        const adotante = {
            id: 1,
            nome: nome.value,
            telefone: telefone.value,
            renda: renda.value,
            residencia: opcaoResidencia.value,
            intencao: intencao.value,
            animal:sessionStorage.getItem("idAnimal"),
        };
        
        const objetoJSON = JSON.stringify(adotante);
        console.log(objetoJSON);

        const objetoTeste = JSON.parse(objetoJSON);
        console.log(objetoTeste);
    }
})