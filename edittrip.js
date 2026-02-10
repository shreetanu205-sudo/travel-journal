const params = new URLSearchParams(window.location.search);
const index = parseInt(params.get("id"), 10);

const trips = JSON.parse(localStorage.getItem("trips")) || [];

if (Number.isNaN(index) || !trips[index]) {
  alert("Memory not found.");
  window.location.href = "Myjournal.html";
}

const trip = trips[index];

const title = document.getElementById("title");
const locationInput = document.getElementById("location");
const date = document.getElementById("date");
const story = document.getElementById("story");
const existingPhotos = document.getElementById("existingPhotos");
const newImagesInput = document.getElementById("newImages");

// Prefill
title.value = trip.title;
locationInput.value = trip.location;
date.value = trip.date;
story.value = trip.story;

let images = [...(trip.images || [])];

// Render existing images
function renderPhotos() {
  existingPhotos.innerHTML = "";
  images.forEach((img, i) => {
    const div = document.createElement("div");
    div.className = "photo-item";
    div.innerHTML = `
      <img src="${img}">
      <button class="remove-btn" onclick="removePhoto(${i})">×</button>
    `;
    existingPhotos.appendChild(div);
  });
}

renderPhotos();

// Remove image
function removePhoto(i) {
  images.splice(i, 1);
  renderPhotos();
}

// Update trip
function updateTrip() {
  const files = Array.from(newImagesInput.files);

  if (images.length + files.length > 10) {
    alert("Maximum 10 photos allowed.");
    return;
  }

  if (files.length === 0) {
    save();
    return;
  }

  let loaded = 0;
  files.forEach((file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      images.push(e.target.result);
      loaded++;
      if (loaded === files.length) save();
    };
    reader.readAsDataURL(file);
  });
}

function save() {
  trips[index] = {
    ...trip,
    title: title.value.trim(),
    location: locationInput.value.trim(),
    date: date.value,
    story: story.value.trim(),
    images,
  };

  localStorage.setItem("trips", JSON.stringify(trips));
  window.location.href = "Myjournal.html";
}
