const hamburgerbtn = document.querySelector('.hamburger-menu');
const main = document.querySelector('main');
const hamburgeritems1 = document.querySelector('.hamburger-items1');
const hamburgeritems2 = document.querySelector('.hamburger-items2');
const hamburgeritems3 = document.querySelector('.hamburger-items3');
const menuListItems = document.querySelectorAll('.menu-list-items');
const menuList = document.querySelector('.menu-list');
const introLogo = document.querySelector('#logo');

hamburgerbtn.addEventListener('click', () => {
  hamburgeritems1.classList.toggle('hamburger-items1-active');
  hamburgeritems2.classList.toggle('hamburger-items2-active');
  hamburgeritems3.classList.toggle('hamburger-items3-active');
  menuList.classList.toggle('menu-list-active');
});

menuListItems.forEach((i) => {
  i.addEventListener('click', () => {
    menuList.classList.remove('menu-list-active');
    hamburgeritems1.classList.remove('hamburger-items1-active');
    hamburgeritems2.classList.remove('hamburger-items2-active');
    hamburgeritems3.classList.remove('hamburger-items3-active');
  });
});

const data = {
  headerText: 'Featured Speakers',
  imgSource: ['img/firstSpeaker.jpeg', 'img/secondSpeaker.jpg', 'img/liz.jpg', 'img/adam.jpg', 'img/lucy.jpg', 'img/emma.jpg'],
  featuredSpeakerNames: ['Bekhzod Mirakhmedov', 'Otabek Mahkamov', 'Liz', 'Adam', 'Lucy', 'Emma'],
  featuredSpeakerAbout1: ['One of the best IELTS instructors', 'Speaks like a native speaker in English', 'Has many years of experience in teaching IELTS', 'is very experienced in teaching IELTS', 'Has over one million followers on YouTube in IELTS', 'has been teaching English for a long time'],
  featuredSpeakerAbout2: ['Passed IELTS exam 13 times and has been teaching IELTS for a long time', 'A good lawyer, actor and teacher', 'She runs a YouTube channel and has many online and offline students', 'Prepares students for IELTS and teaches very beneficial concepts', 'speaks in British accent', 'has experience in teaching students about IELTS'],
};

const featuredSpeakerSection = document.createElement('section');
featuredSpeakerSection.className = 'featured-speakers-section';
featuredSpeakerSection.innerHTML = `
      <h3 class="featured-speaker-header">${data.headerText}</h3>
      <div class="featured-speaker-container">
          <div class="featured-speaker-card">
              <img class="speaker-img" src="${data.imgSource[0]}" alt="">
              <div>
                  <h3 class="speaker-name">${data.featuredSpeakerNames[0]}</h3>
                  <h5 class="about-speaker">${data.featuredSpeakerAbout1[0]}</h5>
                  <p class="more-about-speaker">${data.featuredSpeakerAbout2[0]}</p>
              </div>
          </div>
          <div class="featured-speaker-card">
              <img class="speaker-img" src="${data.imgSource[1]}" alt="">
              <div>
                  <h3 class="speaker-name">${data.featuredSpeakerNames[1]}</h3>
                  <h5 class="about-speaker">${data.featuredSpeakerAbout1[1]}</h5>
                  <p class="more-about-speaker">${data.featuredSpeakerAbout2[1]}</p>
              </div>
          </div>
          <div class="featured-speaker-card featured-speaker-hidden">
              <img class="speaker-img" src="${data.imgSource[2]}" alt="">
              <div>
                  <h3 class="speaker-name">${data.featuredSpeakerNames[2]}</h3>
                  <h5 class="about-speaker">${data.featuredSpeakerAbout1[2]}</h5>
                  <p class="more-about-speaker">${data.featuredSpeakerAbout2[2]}</p>
              </div>
          </div>
          <div class="featured-speaker-card featured-speaker-hidden">
              <img class="speaker-img" src="${data.imgSource[3]}" alt="">
              <div>
                  <h3 class="speaker-name">${data.featuredSpeakerNames[3]}</h3>
                  <h5 class="about-speaker">${data.featuredSpeakerAbout1[3]}</h5>
                  <p class="more-about-speaker">${data.featuredSpeakerAbout2[3]}</p>
              </div>
          </div>
          <div class="featured-speaker-card featured-speaker-hidden">
              <img class="speaker-img" src="${data.imgSource[4]}" alt="">
              <div>
                  <h3 class="speaker-name">${data.featuredSpeakerNames[4]}</h3>
                  <h5 class="about-speaker">${data.featuredSpeakerAbout1[4]}</h5>
                  <p class="more-about-speaker">${data.featuredSpeakerAbout2[4]}</p>
              </div>
          </div>
          <div class="featured-speaker-card featured-speaker-hidden">
              <img class="speaker-img" src="${data.imgSource[5]}" alt="">
              <div>
                  <h3 class="speaker-name">${data.featuredSpeakerNames[5]}</h3>
                  <h5 class="about-speaker">${data.featuredSpeakerAbout1[5]}</h5>
                  <p class="more-about-speaker">${data.featuredSpeakerAbout2[5]}</p>
              </div>
          </div>
      </div>
      <button class="featured-speaker-btn" type="button">MORE<i class="fas fa-chevron-down down-arrow"></i></button>
      <button class="featured-speaker-btn2" type="button">HIDE<i class="fas fa-chevron-up up-arrow"></i></button>
`;
main.appendChild(featuredSpeakerSection);

const featuredSpeakerBtn = document.querySelector('.featured-speaker-btn');
const featuredSpeakerBtn2 = document.querySelector('.featured-speaker-btn2');
const featuredSpeakerCard = document.querySelectorAll('.featured-speaker-hidden');

featuredSpeakerBtn.addEventListener('click', () => {
  featuredSpeakerCard.forEach((i) => {
    i.classList.toggle('featured-speaker-active');
  });
  featuredSpeakerBtn.style.display = 'none';
  featuredSpeakerBtn2.style.display = 'block';
});

featuredSpeakerBtn2.addEventListener('click', () => {
  featuredSpeakerBtn2.style.display = 'none';
  featuredSpeakerBtn.style.display = 'block';
  featuredSpeakerCard.forEach((i) => {
    i.classList.remove('featured-speaker-active');
  });
});

const introLogofunc = () => {
  window.location = 'index.html';
};

introLogo.addEventListener('click', introLogofunc);
