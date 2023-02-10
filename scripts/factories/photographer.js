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

    function getUserHeaderDOM() {
      // Create HTML elements
      const photographerDescription = document.createElement('div');
      const photographerImgContainer = document.createElement('div');
      const photographerImg = document.createElement('img');
      const photographerName = document.createElement('h2');
      const photographerCity = document.createElement('h3');
      const photographerCountry = document.createElement('h3');
      const photographerTagline = document.createElement('p');
  
      // Set classes
      photographerDescription.classList.add('photograph-header__description');
      photographerImg.classList.add('photograph-header__img');
      photographerName.classList.add('photograph-header__name');
      photographerCity.classList.add('photograph-header__location');
      photographerCountry.classList.add('photographer-card__location');
      photographerTagline.classList.add('photograph-header__tagline');
  
      // Set text content
      photographerName.textContent = name;
      photographerCity.textContent = city;
      photographerCountry.textContent = country;
      photographerTagline.textContent = tagline;
  
      // Set attributes
      photographerImg.setAttribute('src', picture);
      photographerImg.setAttribute('alt', `${name}`);
  
      // Append html children elements to main element
      photographerDescription.appendChild(photographerName);
      photographerDescription.appendChild(photographerCity, photographerCountry );
      photographerDescription.appendChild(photographerTagline);
      photographerImgContainer.appendChild(photographerImg);
  
      // Return main elements
      return { photographerDescription, photographerImgContainer };
    }
  
    function getUserInfoBarDOM() {
      // Create HTML elements
      const infoBar = document.createElement('div');
      const photographerLikes = document.createElement('span');
      const photographerPrice = document.createElement('span');
      const infoBarLeft = document.createElement('div');
      const heart = document.createElement('i');
  
      // Set classes
      infoBar.classList.add('info-bar');
      infoBarLeft.classList.add('info-bar__left');
      photographerLikes.classList.add('info-bar__likes');
      photographerPrice.classList.add('info-bar__price');
      heart.classList.add('fa-solid');
      heart.classList.add('fa-heart');
  
      // Set text content
      photographerLikes.textContent = totalLikes;
      photographerPrice.textContent = `${price}€/jour`;
  
      // Append html children elements to main element
      infoBar.appendChild(infoBarLeft);
      infoBarLeft.appendChild(photographerLikes);
      infoBarLeft.appendChild(heart);
      infoBar.appendChild(photographerPrice);
  
      // Return main element
      return infoBar;
    }
  
    return {
      getUserCardDOM,
      getUserHeaderDOM,
      getUserInfoBarDOM,
    };
  }