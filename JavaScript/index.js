const loadAll = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  const allData = data.data.news_category;
  return allData;
};

const setCetagory = async () => {
  const allData = await loadAll();
  const categories = document.getElementById("all-cetagory");
  allData.forEach((category) => {
    const allCetagory = category.category_name;
    const a = document.createElement("a");
    a.innerHTML = `<a class="m-3 text-decoration-none" href="">${allCetagory}</a>`;
    categories.appendChild(a);
  });
};
setCetagory();

