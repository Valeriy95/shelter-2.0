let pets = [
    {
      "name": "Jennifer",
      "img": "../../accects/img/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../accects/img/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../accects/img/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../accects/img/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../accects/img/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../accects/img/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../accects/img/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../accects/img/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ];


let arrPets = [];
const containerCard = document.querySelector('.main-content');
const paginatorBtnNext = document.querySelector('.main-paginator__btn-next');
const paginatorCurrentPage = document.querySelector('.main-paginator__current-page');
const paginatorBtnLast = document.querySelector('.main-paginator__btn-last');
const paginatorBtnStart = document.querySelector('.main-paginator__btn-start')
const paginatorBtnEnd = document.querySelector('.main-paginator__btn-end')
let page = 1;

for(let i = 0; i < 6; i++) {
    let petsCopy = [...pets];
    arrPets.push(petsCopy);
}

function getPetsArrays() {
  let screenWidth = window.innerWidth;
  let subarray = [];
  let size = 8;
  if(screenWidth >= 1280) {
    size = 8;
  } else if (screenWidth >= 768) {
    size = 6;

  } else {
    size = 3;
  }
  for (let i = 0; i < Math.ceil(arrPets.flat().length/size); i++){
    subarray[i] = arrPets.flat().slice((i*size), (i*size) + size);
    shuffle(subarray[i]);
  }
  return subarray
}


let arrPetsShuffle = getPetsArrays();

function drawingCards (num) {
  containerCard.innerHTML = '';
  arrPetsShuffle[num].forEach((animal, index) => {
    const card = document.createElement('div');
    card.setAttribute('data-id', `${index}`)
    card.classList.add(`main-content__card-1`);
    card.innerHTML = `<div class="main-content__card-1__img" style="background-image: url('${animal.img}')" data-id=${index}></div>
    <p class="main-content__card-1__name" data-id=${index}>${animal.name}</p>
    <button class="main-content__card-1__btn" data-id=${index}>Learn more</button>`;
    containerCard.appendChild(card);
    paginatorCurrentPage.innerText = `${page}`
  });
}

drawingCards(0)





paginatorBtnNext.addEventListener('click', function() {
  if (page < arrPetsShuffle.length) {
    page++;
    containerCard.innerHTML = '';
    drawingCards(page - 1);
    paginatorBtnLast.classList.remove('disabled')
    paginatorBtnStart.classList.remove('disabled')

    paginatorBtnLast.classList.add('active')
    paginatorBtnStart.classList.add('active')
  }
  if (page === arrPetsShuffle.length) {
    paginatorBtnNext.classList.add('disabled')
    paginatorBtnEnd.classList.add('disabled')

    paginatorBtnNext.classList.remove('active')
    paginatorBtnEnd.classList.remove('active')
  }
})


paginatorBtnLast.addEventListener('click', function() {
  if(page > 1) {
    console.log(page)
    page--;
    containerCard.innerHTML = '';
    drawingCards(page - 1);
    paginatorBtnNext.classList.remove('disabled')
    paginatorBtnEnd.classList.remove('disabled')

    paginatorBtnNext.classList.add('active')
    paginatorBtnEnd.classList.add('active')
  }
  if(page === 1) {
    paginatorBtnLast.classList.add('disabled')
    paginatorBtnStart.classList.add('disabled')

    paginatorBtnLast.classList.remove('active')
    paginatorBtnStart.classList.remove('active')
  }
})

paginatorBtnStart.addEventListener('click', function() {
  page = 1;
  containerCard.innerHTML = '';
  drawingCards(0);
  paginatorBtnLast.classList.add('disabled')
  paginatorBtnStart.classList.add('disabled')
  paginatorBtnNext.classList.remove('disabled')
  paginatorBtnEnd.classList.remove('disabled')

  paginatorBtnLast.classList.remove('active')
  paginatorBtnStart.classList.remove('active')
  paginatorBtnNext.classList.add('active')
  paginatorBtnEnd.classList.add('active')
})

paginatorBtnEnd.addEventListener('click', function () {
  page = arrPetsShuffle.length;
  containerCard.innerHTML = '';
  drawingCards(arrPetsShuffle.length - 1);
  paginatorBtnLast.classList.remove('disabled')
  paginatorBtnStart.classList.remove('disabled')
  paginatorBtnNext.classList.add('disabled')
  paginatorBtnEnd.classList.add('disabled')

  paginatorBtnLast.classList.add('active')
  paginatorBtnStart.classList.add('active')
  paginatorBtnNext.classList.remove('active')
  paginatorBtnEnd.classList.remove('active')
})

// // Функция для перемешивания массива
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}


window.addEventListener('resize', function() {
  arrPetsShuffle = getPetsArrays()
  if(arrPetsShuffle.length < page) {
    page = arrPetsShuffle.length;
  }
  drawingCards (page - 1)
  if (page === arrPetsShuffle.length) {
    paginatorBtnNext.classList.add('disabled')
    paginatorBtnEnd.classList.add('disabled')

    paginatorBtnNext.classList.remove('active')
    paginatorBtnEnd.classList.remove('active')
  } else if (page === 1) {
    paginatorBtnLast.classList.add('disabled')
    paginatorBtnStart.classList.add('disabled')

    paginatorBtnLast.classList.remove('active')
    paginatorBtnStart.classList.remove('active')
  } else {
    paginatorBtnNext.classList.remove('disabled')
    paginatorBtnEnd.classList.remove('disabled')
    paginatorBtnLast.classList.remove('disabled')
    paginatorBtnStart.classList.remove('disabled')

    paginatorBtnNext.classList.add('active')
    paginatorBtnEnd.classList.add('active')
    paginatorBtnLast.classList.add('active')
    paginatorBtnStart.classList.add('active')
  }
})


// Модульное окно

const modalWindowContainer = document.querySelector('.modal-window-container');
const modalWindowImage = document.querySelector('.modal-window__img');
const modalWindowContent= document.querySelector('.modal-window-content');
const modalWindowIcon = document.querySelector('.modal-window-icon');
const body = document.querySelector('body');
const modalWindow = document.querySelector('.modal-window');
const mainContent = document.querySelector('.main-content');
const modalWindowWrapper = document.querySelector('.modal-window-wrapper');


mainContent.addEventListener('click', function (e) {
  if (e.target.className !== 'main-content') {
    body.classList.toggle('overflow-hidden');
    modalWindowContainer.style.display = 'grid';
    modalWindowImage.style.backgroundImage = `url(${arrPetsShuffle[page - 1][e.target.dataset.id].img})`;
    modalWindowContent.innerHTML = `<h3 class="modal-window__title">${arrPetsShuffle[page - 1][e.target.dataset.id].name}</h3>
    <p class="modal-window__type">${arrPetsShuffle[page - 1][e.target.dataset.id].type} - ${arrPetsShuffle[page - 1][e.target.dataset.id].breed}</p>
    <p class="modal-window__description">${arrPetsShuffle[page - 1][e.target.dataset.id].description}</p>
    <ul class="modal-window__list">
      <li class="modal-window__item"><span class="modal-window__age">Age:</span> <span class="modal-window__text">${arrPetsShuffle[page - 1][e.target.dataset.id].age}</span></li>
      <li class="modal-window__item"><span class="modal-window__inoculations">Inoculations:</span> <span class="modal-window__text">${arrPetsShuffle[page - 1][e.target.dataset.id].inoculations}</span></li>
      <li class="modal-window__item"><span class="modal-window__diseases">Diseases:</span> <span class="modal-window__text">${arrPetsShuffle[page - 1][e.target.dataset.id].diseases}</span></li>
      <li class="modal-window__item"><span class="modal-window__parasites ">Parasites:</span> <span class="modal-window__text">${arrPetsShuffle[page - 1][e.target.dataset.id].parasites}</span></li>
    </ul>
    `
  }
})


modalWindowIcon.addEventListener('click', function () {
  modalWindowContainer.style.display = 'none';
  modalWindowContent.innerHTML = '';
  body.classList.toggle('overflow-hidden');
})

modalWindowContainer.addEventListener('click', function (e) {
  if (e.target.className === modalWindowContainer.className) {
    modalWindowContainer.style.display = 'none';
    modalWindowContent.innerHTML = '';
    body.classList.toggle('overflow-hidden');
  }
})

modalWindowWrapper.addEventListener('click', function (e) {
  if (e.target.className === modalWindowWrapper.className) {
    modalWindowContainer.style.display = 'none';
    modalWindowContent.innerHTML = '';
    body.classList.toggle('overflow-hidden');
  }
})


// Burger menu

const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuContent = document.querySelector('.burger-menu-content');
const listItem = document.querySelectorAll('.list__item');
const burgerMenuFon = document.querySelector('.burger-menu-fon');

function openCloseBurgerMenu () {
  burgerMenuFon.classList.toggle('open-fon');
  body.classList.toggle('overflow-hidden');
  burgerMenu.classList.toggle('rotate');
  burgerMenuContent.classList.toggle('burger-menu-content-open');
}

for (let i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener('click', openCloseBurgerMenu);
}

burgerMenu.addEventListener('click', openCloseBurgerMenu);