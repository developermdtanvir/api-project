const root = document.getElementById("_root");
displayLoading();

fetch("https://openapi.programming-hero.com/api/ai/tools")
  .then((res) => res.json())
  .then((data) => {
    displayTechnology(data.data.tools);
    hide_the_Loading();
  });

const displayTechnology = (data) => {
  console.log(data);
  data.slice(0, 6).map((data) => {
    const div = document.createElement("div");
    div.classList.add("col");
    root.appendChild(div);
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
  <img src=${data.image} class="card-img-top" alt="...">
  <div class="card-body">
    <h6 class="card-title">Features</h6>
    <ol>
      <li>${data.features[0]}</li>
      <li>${data.features[1]}</li>
      <li>${data.features[2]}</li>
    </ol>
    <h1 class="card-text">${data.name}</h1>
    <hr style="border: 1.5px solid gray">

    <div class="d-flex  justify-content-between">
    <div>
      <i class="fa-solid fa-calendar-days"></i>
      <span>${data.published_in}</span>
    </div>
    <i class="fa-solid fa-arrow-right btn btn-primary"  data-bs-toggle="modal"
    data-bs-target="#staticBackdrop" onclick="loadTechnologyDetails(${data.id})"></i>
    </div>
  </div>
</div>
    `;
  });
};

const loadTechnologyDetails = (id) => {
  if (id < 10) {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${"0" + id}`)
      .then((res) => res.json())
      .then((data) => displayTechnologyDetails(data.data));
  } else {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
      .then((res) => res.json())
      .then((data) => displayTechnologyDetails(data.data));
  }
};

const displayTechnologyDetails = (data) => {
  console.log(data);
  document.getElementById("modal-title").innerText = data.tool_name;

  const modalContent = document.getElementById("modal-content");

  const div = document.createElement("div");
  div.innerHTML = `
    <div class="d-flex">
      <div class='w-50 p-2 bg-danger bg-opacity-25 border'>
      <p class='fw-bold'>${data.description}</p>
      <div class="d-flex m-2 justify-content-between">
        <div class='p-2 text-success'>
            ${data.pricing[0].price}
            / ${data.pricing[0].plan}
        </div>
        <div class='p-2'>
          ${data.pricing[1].price} /
          ${data.pricing[1].plan}
        </div>
        <div class='p-2'>
          ${data.pricing[2].price} 
          ${data.pricing[2].plan}
        </div>
      </div>
      <div class="d-flex  justify-content-between">
        <div>
          <p>Features</p>
          <ol>
            <li>${data.features}</li>
          </ol>
        </div>
        <div>
          <p>Integrations</p>
          <ol>
          <li>${data.integrations[0]}</li>
          <li>${data.integrations[1]}</li>
          <li>${data.integrations[2]}</li>
        </ol>
        </div>
      </div>
      </div>
      <div class="w-50  p-2 bg-light border position-relative">
        <img src=${data.image_link[0]} class='img-fluid rounded ' />
        <span class='position-absolute top-0 d-flex badge text-bg-danger end-0'>${
          data.accuracy.score * 100
        }% accuracy</span>
      </div>
    </div>
  `;
  modalContent.appendChild(div);
};

// show all technology

document.getElementById("show-all").addEventListener("click", () => {
  displayLoading();
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => {
      hide_the_Loading();
      data.data.tools.map((data) => {
        const div = document.createElement("div");
        div.classList.add("col");
        root.appendChild(div);
        if (data) {
          document.getElementById("show-all").style.display = "none";
        }
        div.innerHTML = `
      <div class="card" style="width: 18rem;">
    <img src=${data.image} class="card-img-top" alt="...">
    <div class="card-body">
      <h6 class="card-title">Features</h6>
      <ol>
        <li>${data.features[0]}</li>
        <li>${data.features[1]}</li>
        <li>${data.features[2]}</li>
      </ol>
      <h1 class="card-text">${data.name}</h1>
      <hr style="border: 1.5px solid gray">
  
      <div class="d-flex  justify-content-between">
      <div>
        <i class="fa-solid fa-calendar-days"></i>
        <span>${data.published_in}</span>
      </div>
      <i class="fa-solid fa-arrow-right btn btn-primary"  data-bs-toggle="modal"
      data-bs-target="#staticBackdrop" onclick="loadTechnologyDetails(${data.id})"></i>
      </div>
    </div>
  </div>
      `;
      });
    });
});

// loader show for website
function displayLoading() {
  let loader = document.querySelector("#loader-container");
  loader.style.display = "block";
}
function hide_the_Loading() {
  let loader = document.querySelector("#loader-container");
  loader.style.display = "none";
}
