const back = document.getElementById("back");
const email = document.getElementById("email");
const password = document.getElementById("password");
const user_name = document.getElementById("name");
const date = document.getElementById("date");
const edit = document.getElementById("edit");
const state = document.getElementById("state");
const baseUrl = "http://localhost/hospital-project/backend";

back.addEventListener("click", () => {
  window.location.href = "./patient.html";
});
edit.addEventListener("click", () => {
  const body = new FormData();
  body.append("email", email.value);
  body.append("password", password.value);
  body.append("user_name", user_name.value);
  body.append("birthday", date.value);
  const id = localStorage.getItem("User ID");
  parsed_id = JSON.parse(id);
  body.append("id", parsed_id);
  axios.post(`${baseUrl}/profile.php`, body).then((res) => {
    state.innerHTML = res.data.state;
  });
});
