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
const invoices = document.getElementById("invoices");

total = {};

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
    savedServices.innerHTML += `<p id='servicesCollection'>${selectedService}</p>`;
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
    savedMedics.innerHTML += `<p id='medsCollection'>${selectedMed}</p>`;
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

roomInfo.addEventListener("change", (Roomevent) => {
  const roomId = Roomevent.target.value;
  const body = new FormData();
  body.append("id", roomId);
  axios.post(`${baseUrl}/getbedfromrooms.php`, body).then((res) => {
    const bedRooms = res.data.roombeds.number_beds;
    bedInfo.innerHTML = "";
    for (let index = 1; index <= bedRooms; index++) {
      bedInfo.innerHTML += ` <option value="${index}">${index}</option>`;
    }
    submitHospital.addEventListener("click", () => {
      total.hospital = hospitalNames.value;
      total.room = roomInfo.value;
      total.bed = bedInfo.value;
    });
  });
});

invoices.addEventListener("click", () => {
  const medsCollection = document.querySelectorAll("#medsCollection");
  medsArray = [];
  medsCollection.forEach((med) => {
    medsArray.push(med.innerHTML);
  });
  total.medics = medsArray;
  const servicesCollection = document.querySelectorAll("#servicesCollection");
  serviceArray = [];
  servicesCollection.forEach((service) => {
    serviceArray.push(service.innerHTML);
  });
  total.service = serviceArray;
  localStorage.setItem("invoicesStats", JSON.stringify(total));

  window.location.href = "./invoices.html";
});
