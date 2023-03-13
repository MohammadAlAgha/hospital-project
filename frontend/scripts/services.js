const back = document.getElementById("back");
const wrapper = document.getElementById("wrapper");
const baseUrl = "http://localhost/hospital-project/backend";

back.addEventListener("click", () => {
  window.location.href = "./admin.html";
});

axios({
  url: `${baseUrl}/getpatientrequest.php`,
}).then((res) => {
  services = res.data.services;
  console.log(services);
  services.forEach((service) => {
    wrapper.innerHTML += ` <div class="row">
    <div class="cell">
      <p>User ID:</p>
      <p>${service.patient_id}</p>
    </div>
    <div class="cell">
      <p>Service ID:</p>
      <p>${service.service_id}</p>
    </div>
    <div class="cell">
      <p>Status:</p>
      <p>${service.status}</p>
    </div>
    <div class="cell">
      <div class="icon"><img src="./assets/approve.svg" alt="" /></div>
      <div class="icon"><img src="./assets/delete.svg" alt="" /></div>
    </div>
  </div>`;
  });
});
