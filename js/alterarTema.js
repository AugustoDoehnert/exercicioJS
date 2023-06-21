let botaoTema = document.querySelector("#botaotema");
console.log(botaoTema)

botaoTema.addEventListener("click", () => {
    let body = document.querySelector("body");

    if (botaoTema.checked) {
        alert("ok!")
        body.classList.add("body-dark");
    } else {
        body.classList.remove("body-dark");
    }
});