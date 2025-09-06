function filterCards() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        card.style.display = title.includes(input) ? 'block' : 'none';
    });
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
