const baseUrl = "http://localhost/hospital-project/backend";
const profile = document.getElementById("profile");
const serviceList = document.getElementById("serviceList");
const meds = document.getElementById("meds");
const hospitalNames = document.getElementById("hospitalNames");

profile.addEventListener("click", () => {
  window.location.href = "./profile.html";
});

axios({
  url: `${baseUrl}/getservices.php`,
}).then((res) => {
  const services = res.data.services;
  services.forEach((service) => {
    serviceList.innerHTML += ` <option>${service.description}</option>`;
  });
});

axios({
  url: `${baseUrl}/getmedications.php`,
}).then((res) => {
  const medics = res.data.meds;
  medics.forEach((med) => {
    meds.innerHTML += ` <option>${med.name}</option>`;
  });
});
axios({
  url: `${baseUrl}/gethospitals.php`,
}).then((res) => {
  const hospitalsArray = res.data.hospitals;
  hospitalsArray.forEach((hospital) => {
    hospitalNames.innerHTML += ` <option>${hospital.name}</option>`;
  });
});
