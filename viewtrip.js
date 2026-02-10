const params = new URLSearchParams(window.location.search);
const index = parseInt(params.get("id"), 10);

const trips = JSON.parse(localStorage.getItem("trips")) || [];

if (!trips[index]) {
  alert("Memory not found.");
  window.location.href = "Myjournal.html";
}

const trip = trips[index];

document.getElementById("title").innerText = trip.title;
document.getElementById("meta").innerText =
  `📍 ${trip.location} | 📅 ${trip.date}`;
document.getElementById("story").innerText = trip.story;

const imagesDiv = document.getElementById("images");

(trip.images || []).forEach((src) => {
  const img = document.createElement("img");
  img.src = src;
  imagesDiv.appendChild(img);
});

function goBack() {
  window.location.href = "Myjournal.html";
}
