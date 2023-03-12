const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const state = document.getElementById("state");

submit.addEventListener("click", () => {
  const body = new FormData();
  body.append("email", email.value);
  body.append("password", password.value);
  axios
    .post("http://localhost/hospital-project/backend/login.php", body)
    .then((res) => {
      if (res.data.response == "logged in") {
        user_id = res.data.user_id;
        localStorage.setItem("User ID", JSON.stringify(user_id));
        if (res.data.type == 3) window.location.href = "./patient.html";
      } else {
        state.innerHTML = res.data.status;
      }
    });
});
