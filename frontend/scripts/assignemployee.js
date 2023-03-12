const back = document.getElementById("back");
const hospitalNames = document.getElementById("hospitalNames");
const employeeNames = document.getElementById("employeeNames");
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
    hospitalNames.innerHTML += ` <option>${hospital.name}</option>`;
  });
});
axios({
  url: `${baseUrl}/getemployee.php`,
}).then((res) => {
  console.log(res.data.employee);
  const employeeArray = res.data.employee;
  employeeArray.forEach((employee) => {
    employeeNames.innerHTML += ` <option>${employee.name}/ID:${employee.id}</option>`;
  });
});

submit.addEventListener("click", () => {
  axios.get(`${baseUrl}/assignemployee.php`).then((res) => {
    state.innerHTML = "Employee Assigned";
  });
});
