// --------------------------------------------------------- //
const loadNews = async (category_id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayNews(data.data);
};

const displayNews = (allNews) => {
  const newsContainer = document.getElementById("news-container");
  newsContainer.textContent = "";
  const counter = document.getElementById("counter");
  counter.innerHTML = `<h5 class="fw-bold mt-2 mb-1 ms-2">Founded ${allNews.length} Items</h5>`;
  allNews.forEach((news) => {
    const newsDiv = document.createElement("div");
    newsDiv.classList.add("col-12");
    newsDiv.innerHTML = ` 

    <div class="card mb-2">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${news.thumbnail_url}" class="img-fluid rounded-start w-100" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h4 class="card-title fw-bold">${news.title}</h4>
          <p class="card-text">${news.details.slice(0, 1000)}</p>
          <div class="d-flex align-items-center mt-5 mt-lg-0">
          <img src="${
            news.author.img
          }" style="height: 50px; width: 50px;" class="rounded-circle p-1" alt="">
          <div class="d-lg-flex flex-lg-row justify-content-center align-items-center">
          <div class="mt-5 mt-lg-0">
            <small class="fw-semibold">${news.author.name}</small>
            <br>
            <small>${news.author.published_date.slice(0,10)}</small>
          </div>
          <div class="mx-5 mt-5 mt-lg-0">
          <span class="p-1"><i class="fa-solid fa-eye"></i></span>
          <span class="p-1">${news.total_view}</span>
          </div>
          <div class="mx-5 mt-5 mt-lg-0">
          <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Details
          </button>
          
          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title fw-bold" id="exampleModalLabel">${news.title}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div class="mt-5">
    
                <div class="">
                <div>
                  <h1 class="fw-semibold">${news.author.name}</h1>
                </div>
                <div>
                <h5 class="fw-semibold">Viewed by ${news.total_view} people</h5>
                </div>
                </div>
                </div>
                <p class="card-text">${news.details}</p>
                
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
    </div>
  </div>
      </div>
    </div>
  </div>
  `;
    newsContainer.appendChild(newsDiv);
  });
  toggleSpinner(false);
};

const loadCategory = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  setCategory(data.data.news_category);
};

const setCategory = (allCategory) => {
  const categories = document.getElementById("all-cetagory");
  allCategory.forEach((category) => {
    const div = document.createElement("div");
    // div.classList.add('d-flex');
    div.innerHTML = `
    <p onclick="showNews('${category.category_id}')" class="m-3 text-decoration-none btn btn-link" href="">${category.category_name}</p>
    `;
    categories.appendChild(div);
  });
};

loadCategory();

const showNews = (id) => {
  loadNews(id);
  toggleSpinner(true);
};
// function showNews(id) {
//   loadNews(id);
// }

const toggleSpinner = (isLoading) => {
  const loaderSection = document.getElementById("loader");
  if (isLoading) {
    loaderSection.classList.remove("d-none");
  } else {
    loaderSection.classList.add("d-none");
  }
};
