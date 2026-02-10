function saveTrip() {
  const title = document.getElementById("title").value.trim();
  const location = document.getElementById("location").value.trim();
  const date = document.getElementById("date").value;
  const story = document.getElementById("story").value.trim();
  const imageInput = document.getElementById("images");

  if (!title || !location || !date || !story) {
    alert("Fill everything. Memories deserve respect.");
    return;
  }

  if (imageInput.files.length > 10) {
    alert("Max 10 images only.");
    return;
  }

  const trips = JSON.parse(localStorage.getItem("trips")) || [];
  const images = [];

  const files = Array.from(imageInput.files);
  let loaded = 0;

  if (files.length === 0) {
    finalize([]);
    return;
  }

  files.forEach((file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      images.push(e.target.result);
      loaded++;
      if (loaded === files.length) {
        finalize(images);
      }
    };
    reader.readAsDataURL(file);
  });

  function finalize(images) {
    trips.push({
      title,
      location,
      date,
      story,
      images,
    });

    localStorage.setItem("trips", JSON.stringify(trips));
    window.location.href = "Myjournal.html";
  }
}
