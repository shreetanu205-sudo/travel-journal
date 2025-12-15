const user = JSON.parse(localStorage.getItem("loggedInUser"));
if (!user) window.location.href = "login.html";

document.getElementById("fullName").innerText = user.fullname;
document.getElementById("username").innerText = "@" + user.username;
document.getElementById("loginId").innerText = user.email;
document.getElementById("about").innerText =
  user.about || "No bio yet";
