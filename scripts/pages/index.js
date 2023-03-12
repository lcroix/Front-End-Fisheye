async function fetchPhotographer() {
  const response = await fetch("../../data/photographers.json");
  const responseJSON = await response.json();
  return responseJSON
}

async function getPhotographers() {
  let donnees = await fetchPhotographer();
  console.log(donnees);
  let photographers = donnees.photographers;
  console.log(photographers);
  return { photographers: [...photographers] };
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const photographers = await getPhotographers();
  displayData(photographers.photographers);
}

init();
