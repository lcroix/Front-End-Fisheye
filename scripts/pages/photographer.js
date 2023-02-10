const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const photographer_id = urlParams.get("id");
console.log(photographer_id);

async function fetchPhotographerById() {
  const response = await fetch("../../data/photographers.json");
  const responseJSON = await response.json();
  const dataPhotographe = responseJSON.photographers.find(
    (x) => x.id == photographer_id
  );
  return dataPhotographe;
}
async function fetchMediaById() {
  const response = await fetch("../../data/photographers.json");
  const responseJSON = await response.json();
  const medias = responseJSON.media.filter((x) => x.photographerId == photographer_id)
  console.log(medias);
  return medias
}

async function getonePhotographers() {
  const donnees = await fetchPhotographerById();
  console.log(donnees);
  return donnees;
}
async function getMediaFind () {
  const data = await fetchMediaById()
  console.log(data);
  return data

}
async function displayData(donnees) {
  console.log(donnees);
  const onPhotographe = document.querySelector(".onPhotographer_section");
  const photographeDOM = getPhotographer(donnees);
  onPhotographe.appendChild(photographeDOM);
  
}

async function init() {
  const medias = await getMediaFind()
  for(const media of medias) {
    const galerieSection = document.querySelector(".photographerGallery")
    const card = getMedias(media)
    galerieSection.appendChild(card)
   
  }
  const donnees = await getonePhotographers();
  displayData(donnees, medias);
}

init();
