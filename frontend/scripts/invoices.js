const data = localStorage.getItem("invoicesStats");
const parsed = JSON.parse(data);
const back = document.getElementById("back");
const medInfo = document.getElementById("medInfo");
const serviceInfo = document.getElementById("serviceInfo");

back.addEventListener("click", () => {
  window.location.href = "./patient.html";
});

const baseUrl = "http://localhost/hospital-project/backend";
const hospitalInfo = document.getElementById("hospitalInfo");
const roomInfo = document.getElementById("roomInfo");

axios
  .get(`${baseUrl}/hospitalrequest.php?id=${parsed.hospital}`)
  .then((res) => {
    const hospital = res.data.hospital;

    hospitalInfo.innerHTML += `<h2>Hospital:</h2>
    <p>Hospital Name:${hospital.name}</p>
    <p>Email:${hospital.email}</p>
    <p>Phone Number:${hospital.phone}</p>`;
  });
axios.get(`${baseUrl}/roomrequest.php?id=${parsed.room}`).then((res) => {
  const room = res.data.room;

  roomInfo.innerHTML += `<h2>Room:</h2>
  <p>Department:${room.department_id}</p>
  <p>Floor:${room.floor_number}</p>
  <p>Room Number:${room.room_number}</p>
  <p>Phone Number:${room.phone_number}</p>
  <p>Cost:${room.cost_day_usd}$</p>
  <p>${room.is_vip}</p>
  <p>Chosen Bed:${parsed.bed}</p>`;
});

medInfo.innerHTML = `<h2>Medications Selected:</h2>`;
parsed.medics.forEach((med) => {
  medInfo.innerHTML += `<p>${med}</p>`;
});
serviceInfo.innerHTML = `<h2>Services Selected:</h2>`;
parsed.service.forEach((serve) => {
  serviceInfo.innerHTML += `<p>${serve}</p>`;
});
