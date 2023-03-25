function getPhotographer(data) {
  const { name, portrait, city, country, tagline } = data;
  const picture = `./assets/photographers/Photographers ID Photos/${portrait}`;

  //création de header
  //html
  const presentationProfile = document.createElement("article");

  const presentationImg = document.createElement("img");
  const presentationInfo = document.createElement("div");
  const presentationLocation = document.createElement("div");
  const contact = document.createElement("button");
  const presentationName = document.createElement("h2");
  const presentationCity = document.createElement("h3");
  const presentationCountry = document.createElement("h3");
  const presentationTagline = document.createElement("p");

  //class
  presentationProfile.classList.add("photographer-card");
  presentationImg.classList.add("photographer-card__img");
  presentationInfo.classList.add("info");
  presentationLocation.classList.add("location");
  contact.classList = "contact_button";
  presentationName.classList.add("photographer-card__name");
  presentationCity.classList.add("photographer-card__city");
  presentationCountry.classList.add("photographer-card__country");
  presentationTagline.classList.add("photographer-card__tagline");

  //data
  presentationName.textContent = name;
  presentationCity.textContent = city + ", ";
  presentationCountry.textContent = country;
  presentationTagline.textContent = tagline;

  //attribute
  contact.setAttribute("onclick", "displayModal()");
  contact.textContent = "Contactez-moi";
  presentationImg.setAttribute("src", picture);
  presentationImg.setAttribute("alt", `photo de la photographe ${name}`);

  // ajout des éléments enfant a la presentaion profile
  presentationProfile.appendChild(presentationInfo);
  presentationInfo.appendChild(presentationName);
  presentationInfo.appendChild(presentationLocation);
  presentationLocation.appendChild(presentationCity);
  presentationLocation.appendChild(presentationCountry);
  presentationInfo.appendChild(presentationTagline);
  presentationProfile.appendChild(contact);
  presentationProfile.appendChild(presentationImg);
  return presentationProfile;
}

function getMedia(media, nb) {
  const { id, title, image, likes, date, price, video, photographerId } = media;
  const nbOfMedia = nb;
  const imgSrc = `./assets/photographers/${photographerId}/${image}`;
  const vidSrc = `./assets/photographers/${photographerId}/${video}`;
  const lightbox = document.querySelector(".modal-content");
  const lightbox_div = document.createElement("div");
  lightbox_div.setAttribute("class", "lightbox_slide");
  // image est vidéo

  const card = document.createElement("a");
  card.setAttribute("class", "card");
  card.setAttribute("data-id", id);
  if (image) {
    const img = document.createElement("img");
    img.setAttribute("src", imgSrc);
    img.setAttribute("class", "image");
    img.setAttribute("alt", title);
    img.addEventListener("click", () => {
      currentSlide(nbOfMedia);
      openLightboxModal();
    });
    img.classList.add("media");
    img.setAttribute("tabindex", 0);
    lightbox_div.appendChild(img);

    card.appendChild(img);
    const lightbox_img = document.createElement("img");
    lightbox_img.setAttribute("src", imgSrc);
    lightbox_div.appendChild(lightbox_img);
  }
  if (video) {
    const vid = document.createElement("video");
    vid.setAttribute("src", vidSrc);
    vid.setAttribute("type", "video/mp4");
    vid.setAttribute("alt", title);
    vid.autoplay = false;
    vid.addEventListener("click", (e) => {
      e.preventDefault();
      currentSlide(nbOfMedia);
      openLightboxModal();
      
    });
    // vid.controls = true
    vid.muted = false;
    vid.classList.add("media");
    vid.setAttribute("tabindex", 0);
    card.appendChild(vid);

    card.appendChild(vid);
    const lightbox_video = document.createElement("video");
    lightbox_video.setAttribute("src", vidSrc);
    lightbox_video.setAttribute("controls", "");
    lightbox_div.appendChild(lightbox_video);
  }
  const title_span = document.createElement("span");
  const title_lightbox = document.createElement("p");
  title_span.classList = "media_title";
  title_span.textContent = title;
  title_lightbox.textContent = title;
  title_span.addEventListener("click", () => {
    currentSlide(nbOfMedia);
    openLightboxModal();
  });

  //html
  const cardFooter = document.createElement("div");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const heart = document.createElement("i");

  //set attribut
  cardFooter.setAttribute("class", "card_footer");
  h3.setAttribute("class", "title");
  p.setAttribute("id", "likes");
  heart.setAttribute("class", "fa-solid fa-heart");

  //data
  card.appendChild(cardFooter);
  lightbox_div.appendChild(title_lightbox);
  lightbox.appendChild(lightbox_div);
  const sticky_price = document.querySelector(".photograph_sticky_price");
  sticky_price.textContent = price + "€ / jour";

  //like
  let total_likes_boolean = false;
  const likes_span = document.createElement("span");
  const title_container = document.createElement("div");
  title_container.className = "like";
  likes_span.className = "media_likes";
  likes_span.innerHTML = likes + "<i class='fa-solid fa-heart'></i>";

  let likes_counter = {
    likes: likes,
    liked: false,
    like: function () {
      this.likes += this.liked ? -1 : 1;
      this.total_likes += this.liked ? -1 : 1;
      this.liked = !this.liked;
    },
  };

  likes_span.addEventListener("click", () => {
    let total_likes = document.querySelector(".photograph_sticky_total_likes");

    if (total_likes_boolean === false) {
      likes_span.likes = likes_span.likes + 1;
      total_likes_boolean = true;
      total_likes.innerHTML = parseInt(total_likes.innerHTML, 10) + 1;

    } else {
      likes_span.innerHTML = likes_span.likes - 1;
      total_likes.innerHTML = parseInt(total_likes.innerHTML, 10) - 1;
      total_likes_boolean = false;
    }
    likes_counter.like();
    likes_span.innerHTML =
      likes_counter.likes + "<i class='fa-solid fa-heart'></i>";
  });

  title_container.appendChild(title_span);
  title_container.appendChild(likes_span);
  card.appendChild(title_container);

  return card;
}
