const categoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach((category) => {
  const categoryTitleEl = category.querySelector("h2").textContent;
  const elements = category.querySelectorAll("li").length;

  console.log(`Category: ${categoryTitleEl}`);
  console.log(`Elements: ${elements}`);
});
