const user = JSON.parse(localStorage.getItem("loggedInUser"));
if (!user) window.location.href = "login.html";

fullname.value = user.fullname;
username.value = user.username;
about.value = user.about || "";

function saveProfile() {
  user.fullname = fullname.value;
  user.username = username.value;
  user.about = about.value;

  localStorage.setItem("loggedInUser", JSON.stringify(user));
  localStorage.setItem("voyagoUser", JSON.stringify(user));

  window.location.href = "profilepage.html";
}
