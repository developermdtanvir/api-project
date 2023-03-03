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
    <h5 class="card-title">${data.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div class="d-flex  justify-content-between">
    <div>
      <i class="fa-solid fa-calendar-days"></i>
      <span>${data.published_in}</span>
    </div>
    <a href="#" class="btn btn-primary"  data-bs-toggle="modal"
    data-bs-target="#staticBackdrop" onclick="loadTechnologyDetails(${data.id})">Go somewhere</a>
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
};
