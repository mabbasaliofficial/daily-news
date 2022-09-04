// const loadAll = async () => {
//   const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
//   const data = await res.json();
//   const allData = data.data.news_category;
//   return allData;
// };

// const setCetagory = async () => {
//   const allData = await loadAll();
//   const categories = document.getElementById("all-cetagory");
//   allData.forEach((category) => {
//     const allCetagory = category.category_name;
//     const a = document.createElement("a");
//     a.innerHTML = `<a class="m-3 text-decoration-none" href="">${allCetagory}</a>`;
//     categories.appendChild(a);
//   });
// };
// setCetagory();

const loadNews = async () => {
  const url = `https://openapi.programming-hero.com/api/news/category/01`;
  const res = await fetch(url);
  const data = await res.json();
  displayNews(data.data);
};

const displayNews = (allNews) => {
  const newsContainer = document.getElementById("news-container");
  allNews.forEach((news) => {
    const newsDiv = document.createElement("div");
    newsDiv.classList.add("col-12");
    newsDiv.innerHTML = ` 
    <div class="card mt-2">
    <div class="d-flex">
      <img src="${news.thumbnail_url}" style="width: 250px;" alt="">
      <div class="card-body">
        <h6 class="card-title fw-semibold fs-6">${news.title}</h6>
        <p class="card-text">${news.details}</p>
        <div class="d-flex align-items-center mt-5">
              <img src="${news.author.img}" style="height: 50px; width: 50px;" class="rounded-circle p-1" alt="">
              <div class="me-5">
                <small class="fw-semibold">${news.author.name}</small>
                <br>
                <small>${news.author.published_date}</small>
              </div>
              
              <span class="p-1 ms-5"><i class="fa-solid fa-eye"></i></span>
              <span class="p-1">${news.total_view}</span>
        </div>
      </div>
    </div>
  </div>
  `;
    newsContainer.appendChild(newsDiv);
  });
};

loadNews();
