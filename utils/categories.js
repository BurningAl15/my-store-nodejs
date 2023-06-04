const categories=[
  "Cat1",
  "Cat2",
  "Cat3",
  "Cat4",
  "Cat5",
  "Cat6",
  "Cat7",
  "Cat8",
  "Cat9",
  "Cat10",
]

const getRandomCategory = () => {
  const randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
}

const getAllCategories = () => {
  return categories;
}

module.exports = {getAllCategories, getRandomCategory}
