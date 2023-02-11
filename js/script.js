// tab
const tabNavItems = document.querySelectorAll('.tabs-header__button');
const tabItems = document.querySelectorAll('.item-tabs');
document.addEventListener("click", function (e) {
  const targetElement = e.target;
  let currentActiveIndex = null;
  let newActiveIndex = null;
  if (targetElement.closest('.tabs-header__button')) {
    tabNavItems.forEach((tabNavItem, index) => {
      if (tabNavItem.classList.contains('active')) {
        currentActiveIndex = index;
        tabNavItem.classList.remove('active');
      }
      if (tabNavItem === targetElement) {
        newActiveIndex = index;
      }
    });
    targetElement.classList.add('active');
    tabItems[currentActiveIndex].classList.remove('active');
    tabItems[newActiveIndex].classList.add('active');
  }
});

const isMobile = {
  Android: function() {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
      return (isMobile.Android() || 
              isMobile.BlackBerry() || 
              isMobile.iOS() || 
              isMobile.Opera() || 
              isMobile.Windows());
  }
};

if (isMobile.any()) {
  document.body.classList.add('_touch');

  let menuArrows = document.querySelectorAll('.menu__arrow');
  if (menuArrows.length > 0) {
      for (let index = 0; index < menuArrows.length; index++) {
          const menuArrow = menuArrows[index];
          menuArrow.addEventListener("click", function(e){
              menuArrow.parentElement.classList.toggle('_active');
          });
      }
  }

} else {
  document.body.classList.add('_pc');
}

// tabs-2

const tabsButton = document.querySelectorAll(".tabs__nav-button");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsButton.forEach(function(item) {
  item.addEventListener("click", function() {
    let currentButton = item;
    let tabId = currentButton.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if( ! currentButton.classList.contains('active') ) {
      tabsButton.forEach(function(item) {
        item.classList.remove('active')
      });
  
      tabsItems.forEach(function(item) {
        item.classList.remove('active')
      });
  
      currentButton.classList.add('active');
      currentTab.classList.add('active');
    };
  });
});


// menu burger
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}

// swiper

new Swiper('.get-started__swiper',{


  navigation: {
      nextEl: '.get-started__arrow.swiper-button-next',
      prevEl: '.get-started__arrow.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  

    
  // direction: 'vertical',
  // Перетаскивание на ПК
  simulateTouch: true,
  
  // Чувствительность свайпа
  touchRatio: 1,

  // Угол срабатывания свайпа/перетаскивания
  touchAngle: 45,

  // Курсор перетаскивания
  grabCursor: true,

  // Переключение при клике на слайд
  slideToClickedSlide: true,

  // Навигация по хешу
  hashNavigation: {
      // отслеживать состояние
      watchState: true,
  },

  // Управление клавиатурой
  keyboard: {
      // включить/выключить
      enabled: true,

      // Вкл/Выкл только когда слайдер в пределах вьюпорта
      onlyInViewport: true,

      // включить/выключить управление клавиатурой PageUp, pageDown
      pageUpDown: true,
  },
  // Автовысота
  autoHeihgt: true,
  // Количство слайдов для показа
  slidesPerView: 1,

  breakpoints: {
    320: {
        slidesPerView: 1,
    },
    480: {
        slidesPerView: 1,
    },
    992: {
        slidesPerView: 1,
    }
}, 
  // Отступ между слайдами
  spaceBetween: 30,

      // Эффекты переключение слайдов
      // Листание
      effect: 'slide',

});

// tabs 
const tabsBtn   = document.querySelectorAll(".goods__tabs-nav-btn");
const tabsItem = document.querySelectorAll(".goods__tabs-item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItem.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

// products-swiper
new Swiper('.products-slide__swiper',{
    pagination: {
      el: '.products-slide__pagination.swiper-pagination',
      clickable: true
    },
  //  Включение/отключение

  // Перетаскивание на ПК
  simulateTouch: true,
  
  // Чувствительность свайпа
  touchRatio: 1,

  // Угол срабатывания свайпа/перетаскивания
  touchAngle: 45,

  // Курсор перетаскивания
  grabCursor: true,

  // Переключение при клике на слайд
  slideToClickedSlide: true,

  // Навигация по хешу
  hashNavigation: {
      // отслеживать состояние
      watchState: true,
  },

  // Управление клавиатурой
  keyboard: {
      // включить/выключить
      enabled: true,

      // Вкл/Выкл только когда слайдер в пределах вьюпорта
      onlyInViewport: true,

      // включить/выключить управление клавиатурой PageUp, pageDown
      pageUpDown: true,
  },
  // Автовысота
  autoHeihgt: true,
  // Количство слайдов для показа
  slidesPerView: 3,

  breakpoints: {
    320: {
        slidesPerView: 1,
    },
    520: {
        slidesPerView: 2,
    },
    992: {
        slidesPerView: 3,
    }
  }, 
  
  // Отступ между слайдами
  spaceBetween: 30,

      // Эффекты переключение слайдов
      // Листание
      effect: 'slide',
  
});

// load-more

let loadMoreBtn = document.querySelector('#load-more-btn');
let currentItem = 3;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.catalog__body .catalog__box-container')];

    for (var i = currentItem; i < currentItem + 8; i++) {
        boxes[i].style.display = "flex";
    }

    currentItem += 3;

    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = "none"
    }

}

// brands-swiper

new Swiper('.brands-slide__swiper',{


  navigation: {
    nextEl: '.brands-slide__arrow.swiper-button-next',
    prevEl: '.brands-slide__arrow.swiper-button-prev',
  },

// Перетаскивание на ПК
simulateTouch: true,

// Чувствительность свайпа
touchRatio: 1,

// Угол срабатывания свайпа/перетаскивания
touchAngle: 45,

// Курсор перетаскивания
grabCursor: true,

// Переключение при клике на слайд
slideToClickedSlide: true,

// Навигация по хешу
hashNavigation: {
    // отслеживать состояние
    watchState: true,
},

// Управление клавиатурой
keyboard: {
    // включить/выключить
    enabled: true,

    // Вкл/Выкл только когда слайдер в пределах вьюпорта
    onlyInViewport: true,

    // включить/выключить управление клавиатурой PageUp, pageDown
    pageUpDown: true,
},
// Автовысота
autoHeihgt: true,
// Количство слайдов для показа
slidesPerView: 3,

breakpoints: {
  320: {
    slidesPerView: 1,
  },
  519: {
      slidesPerView: 2,
  },
  767: {
      slidesPerView: 3,
  },
  992: {
      slidesPerView: 5,
  }
}, 

// Отступ между слайдами
spaceBetween: 10,

    // Эффекты переключение слайдов
    // Листание
    effect: 'slide',

});

// 
new Swiper('.reviews-slider__swiper',{


  navigation: {
      nextEl: '.reviews-slider__arrow.swiper-button-next',
      prevEl: '.reviews-slider__arrow.swiper-button-prev',
    },

    pagination: {
      el: '.reviews-slider__swiper-pagination.swiper-pagination',
      clickable: true
    },
  

    
  // Перетаскивание на ПК
  simulateTouch: true,
  
  // Чувствительность свайпа
  touchRatio: 1,

  // Угол срабатывания свайпа/перетаскивания
  touchAngle: 45,

  // Курсор перетаскивания
  grabCursor: true,

  // Переключение при клике на слайд
  slideToClickedSlide: true,

  // Навигация по хешу
  hashNavigation: {
      // отслеживать состояние
      watchState: true,
  },

  // Управление клавиатурой
  keyboard: {
      // включить/выключить
      enabled: true,

      // Вкл/Выкл только когда слайдер в пределах вьюпорта
      onlyInViewport: true,

      // включить/выключить управление клавиатурой PageUp, pageDown
      pageUpDown: true,
  },
  // Автовысота
  autoHeihgt: true,
  // Количство слайдов для показа
  slidesPerView: 1,

  breakpoints: {
    320: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    992: {
        slidesPerView: 2,
    }
}, 
  // Отступ между слайдами
  spaceBetween: 30,

      // Эффекты переключение слайдов
      // Листание
      effect: 'slide',

});

// валидация
"use strict"

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    if (error === 0) {

    } else {
      alert('Заполните обязательные поля');
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('_email')) {
        if (emailTest(input)){
          formAddError(input);
          error++;
        }
      } else if(input.getAttribute("type") === "checkbox" && input.checked === false) {
        formAddError(input);
        error++;
      } else {
        if (input.value === '') {
          formAddError(input);
          error++
        }
      }
    }
    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }

  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});

// кнопка в вверх
const button = document.querySelector('.btn-top');

const displayButton = () => {
  window.addEventListener('scroll', () => {
    console.log(window.scrollY);
  
    if (window.scrollY > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
};

const scrollToTop = () => {
  button.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }); 
    console.log(event);
  });
};

displayButton();
scrollToTop();

// Scroll Animation
const box = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;
  
  box.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    
    if(boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  })
}