function saveTrip() {
    const title = document.getElementById("title").value.trim();
    const location = document.getElementById("location").value.trim();
    const date = document.getElementById("date").value;
    const story = document.getElementById("story").value.trim();
    const voiceInput = document.getElementById("voice");

    if (!title || !location || !date || !story) {
        alert("Please fill all fields");
        return;
    }

    let voiceNote = null;

    if (voiceInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function () {
            voiceNote = reader.result;
            saveData(voiceNote);
        };
        reader.readAsDataURL(voiceInput.files[0]);
    } else {
        saveData(null);
    }

    function saveData(voice) {
        const trip = {
            title,
            location,
            date,
            story,
            voice
        };

        const trips = JSON.parse(localStorage.getItem("trips")) || [];
        trips.push(trip);
        localStorage.setItem("trips", JSON.stringify(trips));

        window.location.href = "Myjournal.html";
    }
}
