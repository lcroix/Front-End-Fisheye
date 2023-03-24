const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const photographer_id = urlParams.get("id");
let displayMediaAlreadyCalled = false;
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
  filterMedia(medias);
  return medias
}

async function getonePhotographers() {
  const donnees = await fetchPhotographerById();
  console.log(donnees);
  return donnees;
}
async function getMediaFind () {
  const data = await fetchMediaById()
  return data

}
async function displayData(donnees) {
  const onPhotographe = document.querySelector(".onPhotographer_section");
  const photographeDOM = getPhotographer(donnees);
  onPhotographe.appendChild(photographeDOM);
  
}
async function displayMedia(medias){

  let nbMedia = 0;
  let total_likes = 0;
  const total_likes_section = document.querySelector(".photograph_sticky_total_likes");

  if (displayMediaAlreadyCalled === false) {
    medias.sort((a, b) => b.likes - a.likes);
    displayMediaAlreadyCalled = true;
}
  for(const media of medias) {
    const galerieSection = document.querySelector(".photographerGallery")
    total_likes += media.likes; 
    nbMedia++;
    const card = getMedia(media,nbMedia-1)
    galerieSection.appendChild(card)
   
  }
  total_likes_section.textContent = total_likes;

}

async function init() {
  const medias = await getMediaFind()


  const donnees = await getonePhotographers();

  displayData(donnees, medias);
  displayMedia(medias);

}

init();
