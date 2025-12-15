const journalList = document.getElementById("journalList");

let trips = JSON.parse(localStorage.getItem("trips")) || [];

if (trips.length === 0) {
    journalList.innerHTML = "<p class='empty'>No trips added yet.</p>";
} else {
    journalList.innerHTML = "";

    trips.forEach((trip, index) => {
        const card = document.createElement("div");
        card.className = "journal-card";

        card.innerHTML = `
            <h3>${trip.title}</h3>
            <p>📍 ${trip.location}</p>
            <p>📅 ${trip.date}</p>
            <p>${trip.story}</p>

            ${trip.voiceNote ? `<audio controls src="${trip.voiceNote}"></audio>` : ""}

            <div class="btns">
                <button class="edit" onclick="editTrip(${index})">✏ Edit</button>
                <button class="delete" onclick="deleteTrip(${index})">🗑 Delete</button>
            </div>
        `;

        journalList.appendChild(card);
    });
}

function deleteTrip(index) {
    trips.splice(index, 1);
    localStorage.setItem("trips", JSON.stringify(trips));
    location.reload();
}

function editTrip(index) {
    window.location.href = "edittrip.html?id=" + index;
}
