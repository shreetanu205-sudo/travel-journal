const params = new URLSearchParams(window.location.search);
const index = parseInt(params.get("id"), 10);

const trips = JSON.parse(localStorage.getItem("trips")) || [];
if (Number.isNaN(index) || !trips[index]) {
  alert("Memory not found.");
  window.location.href = "Myjournal.html";
}

const trip = trips[index];

const title = document.getElementById("title");
const location = document.getElementById("location");
const date = document.getElementById("date");
const story = document.getElementById("story");
const imagePreview = document.getElementById("imagePreview");
const newImagesInput = document.getElementById("newImages");

let images = trip.images ? [...trip.images] : [];

/* PREFILL */
title.value = trip.title;
location.value = trip.location;
date.value = trip.date;
story.value = trip.story;

/* RENDER IMAGES */
function renderImages() {
  imagePreview.innerHTML = "";
  images.forEach((img, i) => {
    const div = document.createElement("div");
    div.className = "image-item";
    div.innerHTML = `
      <img src="${img}">
      <button class="remove-btn" onclick="removeImage(${i})">✕</button>
    `;
    imagePreview.appendChild(div);
  });
}

function removeImage(i) {
  images.splice(i, 1);
  renderImages();
}

renderImages();

/* UPDATE */
function updateTrip() {
  if (!title.value || !location.value || !date.value || !story.value) {
    alert("Every memory deserves completeness.");
    return;
  }

  const files = Array.from(newImagesInput.files);
  if (files.length === 0) {
    finalize(images);
    return;
  }

  let loaded = 0;
  files.forEach((file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      images.push(e.target.result);
      loaded++;
      if (loaded === files.length) finalize(images);
    };
    reader.readAsDataURL(file);
  });
}

function finalize(finalImages) {
  trips[index] = {
    ...trips[index],
    title: title.value.trim(),
    location: location.value.trim(),
    date: date.value,
    story: story.value.trim(),
    images: finalImages,
  };

  localStorage.setItem("trips", JSON.stringify(trips));
  window.location.href = "Myjournal.html";
}
