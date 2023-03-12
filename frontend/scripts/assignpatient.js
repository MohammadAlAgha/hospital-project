const back = document.getElementById("back");
const hospitalNames = document.getElementById("hospitalNames");
const userNames = document.getElementById("userNames");
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
    hospitalNames.innerHTML += ` <option>${hospital.name}</option>`;
  });
});
axios({
  url: `${baseUrl}/getuser.php`,
}).then((res) => {
  console.log(res.data.users);
  const usersArray = res.data.users;
  usersArray.forEach((user) => {
    userNames.innerHTML += ` <option>${user.name}/ID:${user.id}</option>`;
  });
});
