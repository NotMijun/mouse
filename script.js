document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.mouse-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const name = card.querySelector('h3').innerText; // Get the name of the mouse
            const desc = card.querySelector('p').innerText; // Get the description of the mouse
            showPopup(name, desc);
        });
    });
});

function showPopup(name, desc) {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
        <div class="popup-content">
            <h3>${name}</h3>
            <p>${desc}</p>
            <button id="closePopupBtn">Close</button>
        </div>
    `;
    document.body.appendChild(popup);

    document.getElementById('closePopupBtn').addEventListener('click', () => {
        closePopup(popup);
    });
}

function closePopup(popup) {
    popup.remove();
}
