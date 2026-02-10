function saveTrip() {
  const title = document.getElementById("title").value.trim();
  const location = document.getElementById("location").value.trim();
  const date = document.getElementById("date").value;
  const story = document.getElementById("story").value.trim();

  if (!title || !location || !date || !story) {
    alert("Please fill all fields");
    return;
  }

  const trip = {
    id: Date.now(), // 🔥 UNIQUE ID (THIS FIXES EVERYTHING)
    title,
    location,
    date,
    story,
  };

  const trips = JSON.parse(localStorage.getItem("trips")) || [];
  trips.push(trip);
  localStorage.setItem("trips", JSON.stringify(trips));

  window.location.href = "Myjournal.html";
}
