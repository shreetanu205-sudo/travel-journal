const journalList = document.getElementById("journalList");

// Load trips
const trips = JSON.parse(localStorage.getItem("trips")) || [];

// Empty state
if (trips.length === 0) {
  journalList.innerHTML = "<p>No memories yet.</p>";
} else {
  journalList.innerHTML = "";

  trips.forEach((trip, index) => {
    const card = document.createElement("div");
    card.className = "journal-card";

    card.innerHTML = `
      <h2>${trip.title}</h2>
      <p>📍 ${trip.location}</p>
      <p>📅 ${trip.date}</p>
      <p>${trip.story}</p>

      <div class="journal-actions">
        <button class="edit-btn" onclick="editTrip(${index})">✏ Edit</button>
        <button class="delete-btn" onclick="deleteTrip(${index})">🗑 Delete</button>
      </div>
    `;

    journalList.appendChild(card);
  });
}

// ✅ THIS IS THE LINE YOU WERE MISSING
function editTrip(index) {
  window.location.href = "edittrip.html?id=" + index;
}

// Delete
function deleteTrip(index) {
  trips.splice(index, 1);
  localStorage.setItem("trips", JSON.stringify(trips));
  location.reload();
}
