const baseUrl = "http://localhost/hospital-project/backend";
const profile = document.getElementById("profile");
const serviceList = document.getElementById("serviceList");
const meds = document.getElementById("meds");
const hospitalNames = document.getElementById("hospitalNames");
const roomInfo = document.getElementById("roomInfo");
const bedInfo = document.getElementById("bedInfo");
const submitHospital = document.getElementById("submitHospital");
const submitMedics = document.getElementById("submitMedics");
const submitServices = document.getElementById("submitServices");
const savedMedics = document.getElementById("savedMedics");
const savedServices = document.getElementById("savedServices");

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
  serviceList.addEventListener("change", (event) => {
    selectedService = event.target.value;
  });
  submitServices.addEventListener("click", () => {
    savedServices.innerHTML += `<p>${selectedService}</p>`;
  });
});

axios({
  url: `${baseUrl}/getmedications.php`,
}).then((res) => {
  const medics = res.data.meds;
  medics.forEach((med) => {
    meds.innerHTML += ` <option>${med.name}</option>`;
  });
  meds.addEventListener("change", (event) => {
    selectedMed = event.target.value;
  });
  submitMedics.addEventListener("click", () => {
    savedMedics.innerHTML += `<p>${selectedMed}</p>`;
  });
});
axios({
  url: `${baseUrl}/gethospitals.php`,
}).then((res) => {
  const hospitalsArray = res.data.hospitals;
  hospitalsArray.forEach((hospital) => {
    hospitalNames.innerHTML += ` <option value="${hospital.id}">${hospital.name}</option>`;
  });
});

hospitalNames.addEventListener("change", (event) => {
  const hospitalId = event.target.value;
  const body = new FormData();
  body.append("hospital_id", hospitalId);
  axios.post(`${baseUrl}/getroomsfromhospital.php`, body).then((res) => {
    const roomsArray = res.data.roomsdata;
    roomInfo.innerHTML = "";
    roomsArray.forEach((room) => {
      roomInfo.innerHTML += ` <option value="${room.id}">${room.room_number}/Cost:${room.cost_day_usd}/${room.is_vip}</option>`;
    });
  });
});

roomInfo.addEventListener("change", (event) => {
  const roomId = event.target.value;
  console.log(event.target.value);
  const body = new FormData();
  body.append("id", roomId);
  axios.post(`${baseUrl}/getroomsfromhospital.php`, body).then((res) => {
    const bedRoomsArray = res.data;
    console.log(bedRoomsArray);
    bedInfo.innerHTML = "";
    bedArray.forEach((bed) => {
      bedInfo.innerHTML += ` <option">${bed.number_beds}</option>`;
    });
  });
});
