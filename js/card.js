function toggleCard(card) {
    const isActive = card.classList.contains("active");
    const allCards = document.querySelectorAll(".service__card");

    // Resetowanie wszystkich kart
    allCards.forEach(c => c.classList.remove("active"));

    // Aktywacja karty, jeśli nie była aktywna
    if (!isActive) {
        card.classList.add("active");
    }
}
