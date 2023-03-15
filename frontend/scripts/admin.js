const patient = document.getElementById("patient");
const employee = document.getElementById("employee");
const service = document.getElementById("service");
const stats = document.getElementById("stats");
const logout = document.getElementById("logout");
const addEmployee = document.getElementById("addEmployee");

patient.addEventListener("click", () => {
  window.location.href = "./assignpatient.html";
});

employee.addEventListener("click", () => {
  window.location.href = "./assignemployee.html";
});

service.addEventListener("click", () => {
  window.location.href = "./services.html";
});
addEmployee.addEventListener("click", () => {
  window.location.href = "./addEmployee.html";
});
stats.addEventListener("click", () => {
  window.location.href = "./stats.html";
});
