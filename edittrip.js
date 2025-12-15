const index = new URLSearchParams(window.location.search).get("id");
const trips = JSON.parse(localStorage.getItem("trips"));

document.getElementById("title").value = trips[index].title;
document.getElementById("location").value = trips[index].location;
document.getElementById("date").value = trips[index].date;
document.getElementById("story").value = trips[index].story;

function updateTrip() {
    trips[index].title = title.value;
    trips[index].location = location.value;
    trips[index].date = date.value;
    trips[index].story = story.value;

    localStorage.setItem("trips", JSON.stringify(trips));
    window.location.href = "Myjournal.html";
}
