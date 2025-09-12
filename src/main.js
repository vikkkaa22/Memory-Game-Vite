const cards = document.querySelectorAll('.card'); //выбираем все элементы с классом card на странице
for (let card of cards) {
    card.addEventListener("click", () => {
        card.classList.add("card-show")
    });
}
