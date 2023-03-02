const root = document.getElementById("_root");
fetch("https://openapi.programming-hero.com/api/ai/tools")
  .then((res) => res.json())
  .then((data) => displayTechnology(data.data.tools));

const displayTechnology = (data) => {
  data.slice(0, 6).map((data) => {
    console.log(data.features.map((data) => console.log(data)));
    const div = document.createElement("div");
    root.appendChild(div);
    div.innerHTML = `
     
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<a href="#">
    <img class="rounded-t-lg" src=${data.image} alt="" />
</a>
<div class="p-5">
    <a href="#" class="text-white space-y-2">
      
        <p>Features</p>
        <ul>
          <li>${data.features[0]}</li>
          <li>${data.features[1]}</li>
          <li>${data.features[2]}</li>
        </ul>
    </a>
    <h5 class="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">${data.name}</h5>
   <div class="flex justify-between">
   <a class="text-white">
   <i class="fa-solid fa-calendar-days"></i>
   ${data.published_in}
   </a>
    <button>
    <i class="fa-solid fa-arrow-right text-white"></i>
    </button>
   </a>
   </div>
   
</div>
</div>

    `;
  });
};
