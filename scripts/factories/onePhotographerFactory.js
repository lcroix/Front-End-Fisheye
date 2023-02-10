function getPhotographer(data){
    const { name, portrait, city, country, tagline  } = data;
    const picture = `./assets/photographers/Photographers ID Photos/${portrait}`;


 
        //création de header
        //html
        const presentationProfile = document.createElement('article');
        const presentationImg = document.createElement('img');
        const presentationName = document.createElement('h2');
        const presentationCity = document.createElement('h3');
        const presentationCountry = document.createElement('h3');
        const presentationTagline = document.createElement('p');

        //class
        presentationProfile.classList.add('photographer-card');
        presentationImg.classList.add('photographer-card__img');
        presentationName.classList.add('photographer-card__name');
        presentationCity.classList.add('photographer-card__city');
        presentationCountry.classList.add('photographer-card__country');
        presentationTagline.classList.add('photographer-card__tagline');

        //data
        presentationName.textContent = name;
        presentationCity.textContent = city;
        presentationCountry.textContent = country;
        presentationTagline.textContent = tagline;

        //image
        presentationImg.setAttribute('src', picture);
        presentationImg.setAttribute('alt', `photo de la photographe ${name}`);

        // ajout des éléments enfant a la presentaion profile
        presentationProfile.appendChild(presentationName);
        presentationProfile.appendChild(presentationCity);
        presentationProfile.appendChild(presentationCountry);
        presentationProfile.appendChild(presentationTagline);
        presentationProfile.appendChild(presentationImg);
        return  presentationProfile;  
}

function getMedias(media){
    const { id, title, image, likes, date, price, video, photographerId}= media
    const imgSrc = `./assets/photographers/${photographerId}/${image}`
    const vidSrc = `./assets/photographers/${photographerId}/${video}`
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
      vid.controls = true
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

    //set attribut
    cardFooter.setAttribute('class', 'card_footer')
    h3.setAttribute('class', 'title')
    likeCounter.setAttribute('class', 'likeCount')
    p.setAttribute('id', 'likes')
    //heart.setAttribute('class', 'far fa-heart')

    //data
    h3.textContent = title
    p.innerHTML = likes

    card.appendChild(cardFooter)
    cardFooter.appendChild(h3)
    cardFooter.appendChild(likeCounter)
    likeCounter.appendChild(p)
    //likeCounter.appendChild(heart)

    return card;
}