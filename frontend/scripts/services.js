const back = document.getElementById("back");
const wrapper = document.getElementById("wrapper");
const baseUrl = "http://localhost/hospital-project/backend";

back.addEventListener("click", () => {
  window.location.href = "./admin.html";
});

if ((wrapper.innerHTML = "")) {
  state.innerHTML = "There are no requets yet";
}

axios({
  url: `${baseUrl}/getpatientrequest.php`,
}).then((res) => {
  services = res.data.services;
  services.forEach((service) => {
    wrapper.innerHTML += ` <div class="row  ${service.id} ${service.patient_id}">
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
      <div class="icon approve ${service.id}"><img src="./assets/approve.svg" alt="" /></div>
      <div class="icon deleted ${service.id}"><img src="./assets/delete.svg" alt="" /></div>
    </div>
  </div>`;
  });
  const approve = document.querySelectorAll(".approve");
  const deleted = document.querySelectorAll(".deleted");

  approve.forEach((button) => {
    button.addEventListener("click", () => {
      console.log(button);
    });
  });
  deleted.forEach((button) => {
    button.addEventListener("click", () => {
      service_id = button.classList[2];

      console.log(service_id);

      axios.get(`${baseUrl}/removeservice.php?id=${service_id}`).then((res) => {
        state.innerHTML =
          "The record is deleted it will no longer appear when you refresh";
      });
    });
  });
});
