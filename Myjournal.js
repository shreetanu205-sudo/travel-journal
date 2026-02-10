const journalList = document.getElementById("journalList");
const trips = JSON.parse(localStorage.getItem("trips")) || [];

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
        <button class="edit-btn" onclick="editTrip(${index})">✏ Edit</button>
        <button class="view-btn" onclick="viewTrip(${index})">📖 Open</button>
        <button class="delete-btn" onclick="deleteTrip(${index})">🗑 Delete</button>
      </div>
    `;

    journalList.appendChild(card);
  });
}

function editTrip(index) {
  window.location.href = "edittrip.html?id=" + index;
}

function viewTrip(index) {
  window.location.href = "viewtrip.html?id=" + index;
}

function deleteTrip(index) {
  trips.splice(index, 1);
  localStorage.setItem("trips", JSON.stringify(trips));
  location.reload();
}
