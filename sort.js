fetch("https://openapi.programming-hero.com/api/ai/tools")
  .then((res) => res.json())
  .then((data) => {
    displayBySort(data.data.tools);
  });

const displayBySort = (data) => {
  document.getElementById("sort_date").addEventListener("click", () => {
    const sort = data.slice().sort((a, b) => {
      return new Date(a.published_in) - new Date(b.published_in);
    });
    sort.map((data) => {
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
        data-bs-target="#technology_modal" onclick="loadTechnologyDetails(${data.id})"></i>
        </div>
      </div>
    </div>
        `;
    });
  });
};
