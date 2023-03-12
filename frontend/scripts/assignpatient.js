const back = document.getElementById("back");
const hospitalNames = document.getElementById("hospitalNames");
const userNames = document.getElementById("userNames");
const submit = document.getElementById("submit");
const state = document.getElementById("state");
const baseUrl = "http://localhost/hospital-project/backend";

back.addEventListener("click", () => {
  window.location.href = "./admin.html";
});

axios({
  url: `${baseUrl}/gethospitals.php`,
}).then((res) => {
  console.log(res.data.hospitals);
  const hospitalsArray = res.data.hospitals;
  hospitalsArray.forEach((hospital) => {
    hospitalNames.innerHTML += ` <option id='user'>${hospital.name}</option>`;
  });
  const user = document.getElementById("user");
});
axios({
  url: `${baseUrl}/getuser.php`,
}).then((res) => {
  console.log(res.data.users);
  const usersArray = res.data.users;
  usersArray.forEach((user) => {
    userNames.innerHTML += ` <option id='hospital'>${user.name}/ID:${user.id}</option>`;
  });
  const hospital = document.getElementById("hospital");
});

submit.addEventListener("click", () => {
  axios
    .get(`${baseUrl}/assignuser.php?${userNames}&${hospitalNames}`)
    .then((res) => {
      state.innerHTML = "Patient Assigned";
    });
});
