   function fetchPhotographer() {
    fetch('../../data/photographers.json')
    .then(function(res){
        return res.json()
    })
    .then(function datasPhoto(data) {
        localStorage.setItem("photographersMedia", JSON.stringify(data));
        console.log(data);
        return data;
      })
    }
   
   
   async function getPhotographers() {
    fetchPhotographer();
    let donnees = JSON.parse(localStorage.getItem("photographersMedia"));
    let photographers = donnees.photographers;
    return(({photographers: [...photographers]}))
}

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const  photographers  = await getPhotographers();
        displayData(photographers.photographers);
    };
    
    init();
    
