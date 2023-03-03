const root = document.getElementById("_root");
fetch("https://openapi.programming-hero.com/api/ai/tools")
  .then((res) => res.json())
  .then((data) => displayTechnology(data.data.tools));

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
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
  fetch(`https://openapi.programming-hero.com/api/ai/tool/${"0" + id}`)
    .then((res) => res.json())
    .then((data) => displayTechnologyDetails(data.data));
};

const displayTechnologyDetails = (data) => {
  console.log(data);
  document.getElementById("modal-title").innerText = data.tool_name;

  const modalContent = document.getElementById("modal-content");

  const div = document.createElement("div");
  div.innerHTML = `
    <div class="d-flex">
      <div class='w-50'>
        <h1>Hello World</h1>
      </div>
      <div class="w-50  p-2 bg-light border">
        <img src=${data.image_link[0]} class='img-fluid rounded' />
        <p>${
          data.description ? data.description : "No! Not Yet! Take a break!!!"
        }</p>
      </div>
    </div>
  `;
  modalContent.appendChild(div);
};
