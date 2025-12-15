function validateLogin() {
  const loginUser = document.getElementById("loginUser").value.trim();
  const loginPass = document.getElementById("loginPass").value.trim();

  const savedUser = JSON.parse(localStorage.getItem("voyagoUser"));

  if (!savedUser) {
    alert("No account found. Please register first.");
    return;
  }

  const isUserValid =
    loginUser === savedUser.username ||
    loginUser === savedUser.email ||
    loginUser === savedUser.phone;

  if (!isUserValid) {
    alert("User not found");
    return;
  }

  if (loginPass !== savedUser.password) {
    alert("Wrong password");
    return;
  }

  // ✅ SUCCESS
  localStorage.setItem("loggedInUser", JSON.stringify(savedUser));
  window.location.href = "homeafterlogin.html";
}
