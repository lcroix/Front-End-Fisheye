function photographerFactory(data) {
    const { id, name, portrait, city, country, tagline, price } = data;
    const picture = `./assets/photographers/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {

        // création des balise  HTML
        const photographerProfile = document.createElement('article');
        const photographerLink = document.createElement('a');
        const photographerImg = document.createElement('img');
        const photographerLocation = document.createElement('div');
        const photographerName = document.createElement('h2');
        const photographerCity = document.createElement('h3');
        const photographerCountry = document.createElement('h3');
        const photographerTagline = document.createElement('p');
        const photographerPrice = document.createElement('span');
        
        //Création des class
        photographerProfile.classList.add('photographer-card');
        photographerLink.classList.add('photographer-card__link');
        photographerImg.classList.add('photographer-card__img');
        photographerLocation.classList.add('photographer-card__location')
        photographerName.classList.add('photographer-card__name');
        photographerCity.classList.add('photographer-card__city');
        photographerCountry.classList.add('photographer-card__country');
        photographerTagline.classList.add('photographer-card__tagline');
        photographerPrice.classList.add('photographer-card__price');

    // ajout de la data de chaque photographe
    photographerName.textContent = name;
    photographerCity.textContent = city + ',';
    photographerCountry.textContent = country;
    photographerTagline.textContent = tagline;
    photographerPrice.textContent = `${price}€/jour`;

// ajout des attributs 
        photographerLink.setAttribute('aria-label', `${name}`);
        photographerLink.setAttribute('href', `./photographer.html?id=${id}`);
        photographerImg.setAttribute('src', picture);
        photographerImg.setAttribute('alt', `photo de la photographe ${name}`);

            // Ajoute des éléments enfants html à l'élément principal
        photographerProfile.appendChild(photographerLink);
        photographerLink.appendChild(photographerImg);
        photographerLink.appendChild(photographerName);
        photographerProfile.appendChild(photographerLocation)
        photographerLocation.appendChild(photographerCity);
        photographerLocation.appendChild(photographerCountry);
        photographerProfile.appendChild(photographerTagline);
        photographerProfile.appendChild(photographerPrice);
        return  photographerProfile;
    }

  
    return {
      getUserCardDOM,
    };
  }