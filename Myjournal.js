const journalList = document.getElementById("journalList");

/* 🔹 FETCH USER */
let user = JSON.parse(localStorage.getItem("loggedInUser"));

if (!user) {
  window.location.href = "login.html";
}

/* 🔹 INIT TRIPS */
user.trips = user.trips || [];
const trips = user.trips;

if (trips.length === 0) {
  journalList.innerHTML = "<p>No memories yet.</p>";
} else {
  trips.forEach((trip, index) => {
    const card = document.createElement("div");
    card.className = "journal-card";

    card.innerHTML = `
      <h3>${trip.title}</h3>
      <p class="meta">📍 ${trip.location}</p>
      <p class="meta">📅 ${trip.date}</p>
      <p class="desc">${trip.story.slice(0, 120)}...</p>

      <div class="journal-actions">
        <button class="edit-btn" onclick="editTrip(${trip.id})">✏ Edit</button>
        <button class="view-btn" onclick="viewTrip(${trip.id})">📖 Open</button>
        <button class="delete-btn" onclick="deleteTrip(${trip.id})">🗑 Delete</button>
      </div>
    `;

    journalList.appendChild(card);
  });
}

/* 🔹 USE TRIP ID (NOT INDEX) */
function editTrip(id) {
  window.location.href = "edittrip.html?id=" + id;
}

function viewTrip(id) {
  window.location.href = "viewtrip.html?id=" + id;
}

function deleteTrip(id) {
  user.trips = user.trips.filter(trip => trip.id !== id);
  localStorage.setItem("loggedInUser", JSON.stringify(user));
  location.reload();
}
