/* 🔹 FETCH USER */
let user = JSON.parse(localStorage.getItem("loggedInUser"));

if (!user) {
  window.location.href = "login.html";
}

/* 🔹 INIT ARRAYS (VERY IMPORTANT) */
user.trips = user.trips || [];
user.countries = user.countries || [];
user.voiceNotes = user.voiceNotes || [];

localStorage.setItem("loggedInUser", JSON.stringify(user));

/* 🔹 BASIC INFO */
document.getElementById("fullName").innerText = user.fullname;
document.getElementById("username").innerText = "@" + user.username;
document.getElementById("loginId").innerText = user.email;
document.getElementById("about").innerText = user.about || "No bio added yet";

/* 🔹 COUNTS */
document.getElementById("tripCount").innerText = user.trips.length;
document.getElementById("countryCount").innerText = user.countries.length;
document.getElementById("voiceCount").innerText = user.voiceNotes.length;

/* 🔹 PROFILE IMAGE */
const profilePic = document.getElementById("profilePic");
const imageInput = document.getElementById("profileImageInput");

if (user.profileImage) {
  profilePic.src = user.profileImage;
}

imageInput.addEventListener("change", function () {
  const file = this.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function () {
    user.profileImage = reader.result;
    profilePic.src = reader.result;
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  };
  reader.readAsDataURL(file);
});


