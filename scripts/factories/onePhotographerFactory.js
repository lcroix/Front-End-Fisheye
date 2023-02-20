function getPhotographer(data){
    const { name, portrait, city, country, tagline  } = data;
    const picture = `./assets/photographers/Photographers ID Photos/${portrait}`;


 
        //création de header
        //html
        const presentationProfile = document.createElement('article');
        const presentationImg = document.createElement('img');
        const presentationInfo = document.createElement('div')
        const presentationLocation = document.createElement('div')
        const contact = document.createElement("button");
        const presentationName = document.createElement('h2');
        const presentationCity = document.createElement('h3');
        const presentationCountry = document.createElement('h3');
        const presentationTagline = document.createElement('p');

        //class
        presentationProfile.classList.add('photographer-card');
        presentationImg.classList.add('photographer-card__img');
        presentationInfo.classList.add('info');
        presentationLocation.classList.add('location')
        contact.classList = "contact_button";
        presentationName.classList.add('photographer-card__name');
        presentationCity.classList.add('photographer-card__city');
        presentationCountry.classList.add('photographer-card__country');
        presentationTagline.classList.add('photographer-card__tagline');

        //data
        presentationName.textContent = name;
        presentationCity.textContent = city +', ';
        presentationCountry.textContent = country;
        presentationTagline.textContent = tagline;

        //attribute
        contact.setAttribute("onclick", "displayModal()")
        contact.textContent = "Contactez-moi";
        presentationImg.setAttribute('src', picture);
        presentationImg.setAttribute('alt', `photo de la photographe ${name}`);

        // ajout des éléments enfant a la presentaion profile
        presentationProfile.appendChild(presentationInfo);
        presentationInfo.appendChild(presentationName);
        presentationInfo.appendChild(presentationLocation);
        presentationLocation.appendChild(presentationCity);
        presentationLocation.appendChild(presentationCountry);
        presentationInfo.appendChild(presentationTagline);
        presentationProfile.appendChild(contact);
        presentationProfile.appendChild(presentationImg);
        return  presentationProfile;  
}

function getMedias(media){
    const { id, title, image, likes, date, price, video, photographerId}= media
    const imgSrc = `./assets/photographers/${photographerId}/${image}`
    const vidSrc = `./assets/photographers/${photographerId}/${video}`
    console.log(photographerId);
    // image est vidéo

    const card = document.createElement('a')
    card.setAttribute('class', 'card')
    card.setAttribute('data-id', id)
    if (image) {
      const img = document.createElement('img')
      img.setAttribute('src', imgSrc)
      img.setAttribute('class', 'image')
      img.setAttribute('alt', title)
      img.classList.add('media')
      img.setAttribute('tabindex', 0)

      card.appendChild(img)
    }
    if (video) {
      const vid = document.createElement('video')
      vid.setAttribute('src', vidSrc)
      vid.setAttribute('type', 'video/mp4')
      vid.setAttribute('alt', title)
      vid.autoplay = false
      // vid.controls = true
      vid.muted = false
      vid.classList.add('media')
      vid.setAttribute('tabindex', 0)
      card.appendChild(vid)
    }

    //html
    const cardFooter = document.createElement('div')
    const h3 = document.createElement('h3')
    const likeCounter = document.createElement('div')
    const p = document.createElement('p')
    const heart = document.createElement('i')

    //set attribut
    cardFooter.setAttribute('class', 'card_footer')
    h3.setAttribute('class', 'title')
    likeCounter.setAttribute('class', 'likeCount')
    p.setAttribute('id', 'likes')
    heart.setAttribute('class', 'fa-solid fa-heart')

    //data
    h3.textContent = title
    p.innerHTML = likes

    card.appendChild(cardFooter)
    cardFooter.appendChild(h3)
    cardFooter.appendChild(likeCounter)
    likeCounter.appendChild(p)
    likeCounter.appendChild(heart)

    return card;
}