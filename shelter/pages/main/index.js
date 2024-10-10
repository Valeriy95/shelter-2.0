// Burger Menu 

const burgerMemu = document.querySelector('.burger-menu');
const burgerMenuFon = document.querySelector('.burger-menu-fon');
const body = document.querySelector('body');
const burgerMenuContent = document.querySelector('.burger-menu-content');
const listItem = document.querySelectorAll('.list__item');

function openCloseBurgerMenu () {
    burgerMemu.classList.toggle('rotate');
    burgerMenuFon.classList.toggle('open-fon');
    body.classList.toggle('overflow-hidden');
    burgerMenuContent.classList.toggle('burger-menu-content-open');
}

for (let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener('click', openCloseBurgerMenu);
}

burgerMemu.addEventListener('click', openCloseBurgerMenu);



// Slider 

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
  


const sliderCardsContainer = document.querySelector('.our-friends__slider__cards');
const btnLeft = document.querySelector('.our-friends__slider__btn-left');
const btnRight = document.querySelector('.our-friends__slider__btn-right');

let visibleCards = 3; // Количество карточек по умолчанию
let currentIndex = 0;
let previousSet = [];
let isAnimating = false;

function shuffleArray(array) {
  let shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function getVisibleCards() {
  if (window.innerWidth >= 1280) {
    return 3;
  } else if (window.innerWidth >= 768) {
    return 2;
  } else {
    return 1;
  }
}

function generateCards(direction) {
  const randomSet = shuffleArray(pets.filter(animal => !previousSet.includes(animal)));
  const cardsToDisplay = randomSet.slice(0, visibleCards);
  previousSet = cardsToDisplay.map(card => card); // сохраняем предыдущее состояние

  sliderCardsContainer.innerHTML = ''; // очищаем старые карточки

  // Перемещаем новые карточки за пределы видимости в зависимости от направления
  cardsToDisplay.forEach(animal => {
    const card = document.createElement('div');
    card.setAttribute('data-id', `${animal.name}`)
    card.classList.add('our-friends__slider__card');
    card.innerHTML = `<div class="slider__card-1__img" style="background-image: url('${animal.img}')" data-id=${animal.name}></div>
    <p class="slider__card-1__name" data-id=${animal.name}>${animal.name}</p>
    <button class="slider__card-1__btn" data-id=${animal.name}>Learn more</button>`;
    card.style.transform = direction === 'right' ? 'translateX(100%)' : 'translateX(-100%)'; // Сдвиг карточек
    sliderCardsContainer.appendChild(card);
  });

  // Через короткую задержку плавно перемещаем карточки на исходное место
  setTimeout(() => {
    document.querySelectorAll('.our-friends__slider__card').forEach(card => {
      card.style.transition = 'transform 0.5s ease-in-out'; // Анимация плавного появления
      card.style.transform = 'translateX(0)'; // Плавное перемещение карточек на исходную позицию
    });
  }, 10);

  openModalWindow ()
}

function moveSlider(direction) {
  if (isAnimating) return; // Предотвращаем повторные клики во время анимации
  isAnimating = true;

  const shiftAmount = direction === 'right' ? -100 : 100; // Смещение в процентах
  sliderCardsContainer.style.transform = `translateX(${shiftAmount}%)`; // Сдвиг на 100% влево или вправо

  sliderCardsContainer.addEventListener('transitionrun', () => {
    sliderCardsContainer.style.transition = 'none'; // Отключаем анимацию
    sliderCardsContainer.style.transform = `translateX(0)`; // Возвращаемся в исходную позицию

    // Обновляем карточки после анимации
    generateCards(direction); // Передаем направление для корректного появления

    // Включаем анимацию снова
    setTimeout(() => {
      sliderCardsContainer.style.transition = 'transform 0.5s ease-in-out';
      isAnimating = false;
    }, 20); // Небольшая задержка для плавного перехода
  }, { once: true });
}

// Обработчики на кнопки
btnRight.addEventListener('click', () => moveSlider('right'));
btnLeft.addEventListener('click', () => moveSlider('left'));

// Обработчик на изменение ширины экрана
window.addEventListener('resize', () => {
  visibleCards = getVisibleCards();
  generateCards('right'); // пересоздаем карточки
});

// Инициализация
visibleCards = getVisibleCards();
generateCards('right');


// Модальное окно 

const modalWindowContainer = document.querySelector('.modal-window-container');
const modalWindowImage = document.querySelector('.modal-window__img');
const modalWindowContent= document.querySelector('.modal-window-content');
const modalWindowIcon = document.querySelector('.modal-window-icon');
const modalWindow = document.querySelector('.modal-window');
const modalWindowWrapper = document.querySelector('.modal-window-wrapper');

function openModalWindow () {
  const ourFriendsSliderCard = document.querySelectorAll('.our-friends__slider__card');
  for(let i = 0; i < ourFriendsSliderCard.length; i++) {
    ourFriendsSliderCard[i].addEventListener('click', function (e) {
      for (let j = 0; j < pets.length; j++) {
        if (pets[j].name === e.target.dataset.id) {
          body.classList.toggle('overflow-hidden');
          modalWindowContainer.style.display = 'grid';
          modalWindowImage.style.backgroundImage = `url(${pets[j].img})`;
          modalWindowContent.innerHTML = `<h3 class="modal-window__title">${pets[j].name}</h3>
          <p class="modal-window__type">${pets[j].type} - ${pets[j].breed}</p>
          <p class="modal-window__description">${pets[j].description}</p>
          <ul class="modal-window__list">
            <li class="modal-window__item"><span class="modal-window__age">Age:</span> <span class="modal-window__text">${pets[j].age}</span></li>
            <li class="modal-window__item"><span class="modal-window__inoculations">Inoculations:</span> <span class="modal-window__text">${pets[j].inoculations}</span></li>
            <li class="modal-window__item"><span class="modal-window__diseases">Diseases:</span> <span class="modal-window__text">${pets[j].diseases}</span></li>
            <li class="modal-window__item"><span class="modal-window__parasites ">Parasites:</span> <span class="modal-window__text">${pets[j].parasites}</span></li>
          </ul>
          `
        }
      }
    })
  }
}

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