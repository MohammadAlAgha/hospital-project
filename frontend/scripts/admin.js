const patient = document.getElementById("patient");
const employee = document.getElementById("employee");
const service = document.getElementById("service");
const stats = document.getElementById("stats");
const logout = document.getElementById("logout");

patient.addEventListener("click", () => {
  window.location.href = "./assignpatient.html";
});

employee.addEventListener("click", () => {
  window.location.href = "./assignemployee.html";
});