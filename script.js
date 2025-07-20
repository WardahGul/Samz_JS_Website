function flipCard(card) {
  card.classList.toggle('flipped');
}

document.getElementById('toggleMode').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

function showBookingModal(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const destination = document.getElementById("destination").value;
  const modal = document.getElementById("modal");
  const text = document.getElementById("modal-text");

  text.innerText = `Thanks ${name}! Your trip to ${destination.toUpperCase()} is booked.`;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
