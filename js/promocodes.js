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
const headerMedia = document.querySelector('.header-media');
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock')
        headerMedia.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}
  
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