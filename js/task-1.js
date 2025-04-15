const categoriesList = document.querySelectorAll("#categories .item");

console.log(`Toplam kategori sayısı: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const itemsCount = category.querySelectorAll("ul li").length;

  console.log(`Kategori: ${title}`);
  console.log(`Eleman Sayısı: ${itemsCount}`);
});
