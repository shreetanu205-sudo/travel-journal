const params = new URLSearchParams(window.location.search);
const index = Number(params.get("id"));

const trips = JSON.parse(localStorage.getItem("trips")) || [];

const titleInput = document.getElementById("title");
const locationInput = document.getElementById("location");
const dateInput = document.getElementById("date");
const storyInput = document.getElementById("story");

// HARD STOP if invalid
if (Number.isNaN(index) || !trips[index]) {
  alert("Memory not found.");
  window.location.href = "Myjournal.html";
}

// 🔥 READ ACTUAL STORED OBJECT
const trip = trips[index];

// SUPPORT MULTIPLE KEY NAMES (fixes your issue)
titleInput.value = trip.title || trip.tripTitle || "";

locationInput.value = trip.location || trip.place || "";

dateInput.value = trip.date || trip.travelDate || "";

storyInput.value = trip.story || trip.description || "";

// UPDATE SAME OBJECT
function updateTrip() {
  if (
    !titleInput.value ||
    !locationInput.value ||
    !dateInput.value ||
    !storyInput.value
  ) {
    alert("Every memory deserves completeness.");
    return;
  }

  trips[index] = {
    ...trip, // preserve extras
    title: titleInput.value.trim(),
    location: locationInput.value.trim(),
    date: dateInput.value,
    story: storyInput.value.trim(),
  };

  localStorage.setItem("trips", JSON.stringify(trips));

  window.location.href = "Myjournal.html";
}
