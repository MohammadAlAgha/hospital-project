const email = document.getElementById("email");
const password = document.getElementById("password");
const uname = document.getElementById("name");
const date = document.getElementById("date");
const submit = document.getElementById("submit");
const state = document.getElementById("state");

submit.addEventListener("click", () => {
  if (email.value && password.value && uname.value && date.value) {
    const body = new FormData();
    body.append("email", email.value);
    body.append("password", password.value);
    body.append("user_name", uname.value);
    body.append("birthday", date.value);
    axios
      .post("http://localhost/hospital-project/backend/signup.php", body)
      .then((res) => {
        if (res.data.status == "Sign up was successfull") {
          window.location.href = "./patient.html";
          localStorage.setItem("User ID", JSON.stringify(res.data.user_id));
        } else state.innerHTML = res.data.status;
      });
  } else {
    state.innerHTML = "Please enter the values";
  }
});
