window.onload = function () {
    const listItems = document.querySelectorAll("li");
    const submitButton = document.querySelector("button");
    const thankYouDiv = document.querySelector(".tks");
    const ratingSpan = document.querySelector("#rating");
    const container = document.querySelector(".container");
    let selectedRating = null;

    // Adiciona evento de clique para cada item da lista
    listItems.forEach(item => {
        item.addEventListener("click", function () {
            // Remove a seleção anterior
            listItems.forEach(li => li.classList.remove("selected"));

            // Adiciona a classe selecionada ao item clicado
            this.classList.add("selected");
            selectedRating = this.textContent;
        });
    });

    // Evento de clique para o botão de envio
    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Evita comportamento padrão caso esteja dentro de um <form>

        if (selectedRating) {
            ratingSpan.textContent = selectedRating;
            thankYouDiv.classList.remove("hidden"); // Exibe a mensagem de agradecimento
            container.classList.add("hidden"); // Oculta o container principal
        } else {
            alert("Por favor, selecione uma nota antes de enviar.");
        }
    });
};
