import './index.css';

import { Thumbs } from 'swiper';
import { Dropdown } from '../components/dropdown/Dropdown';
import { Popup } from '../components/popup/Popup';
import { Drawer } from '../components/drawer/Drawer';
import { Accordion } from '../components/accordion/Accordion';
import { Visibility } from '../components/visibility/Visibility';
import { Brands } from '../components/brands/Brands';
import { Footer } from '../components/footer/Footer';
import { formViewPass, mask } from '../components/form/Form';
import { formQuantity } from '../components/quantity/Quantity';
import { Slider } from '../components/slider/Slider';
import { Choice } from '../components/search/Choice';
import { Tooltip } from '../components/tooltip/Tooltip';
import { Toggler } from '../components/toggler/Toggler';

/* Timer */
const timer = document.getElementById('timer');
// @ts-ignore
const { Soon } = window;
if (timer && Soon) {
  Soon.create(timer, {
    due: timer.dataset.deadline || '2022-01-01',
    scaleMax: 'xs',
    scaleHide: 'none',
    format: 'd,h,m,s',
    face: 'slot fade faster',
    visual: 'ring color-light cap-round progressgradient-0071bc_0071bc gap-0',
  });
}

/* Quantity */
formQuantity();

/* Toggler */
const toggler = document.querySelectorAll('[data-toggler]');
if (toggler.length) {
  Toggler(toggler, 'active');
}

/* View Password */
formViewPass();

/* Custom Select */
const searchSelectParams = document.querySelectorAll('.search-param');
if (searchSelectParams.length) {
  searchSelectParams.forEach((select: Element) => {
    Choice(select, {
      allowHTML: true,
      searchEnabled: false,
      itemSelectText: '',
      classNames: {
        button: 'filter__arrow',
      },
    });
  });
}

/* Input Mask */
const smsCode = document.querySelectorAll('.code');
const phoneMaskOptions = {
  selector: '#phone',
  inputMask: '+7(999)999-99-99',
  placeholder: '+7(___)___-__-__',
};
const captchaMaskOptions = {
  selector: '#captcha',
  inputMask: '*{4,10}',
};

if (smsCode.length) {
  smsCode.forEach((_codeElement, index) => {
    const smsMaskOptions = {
      selector: `#code-${index + 1}`,
      inputMask: '9',
    };
    mask(smsMaskOptions);
  });
}

mask(phoneMaskOptions);
mask(captchaMaskOptions);

/* Tooltip */
Tooltip('[data-tippy-content]', {
  placement: 'top-end',
  theme: 'light',
});

/* Card Popup */
const tooltipList = document.querySelectorAll('[data-card-popup]');
if (tooltipList.length) {
  tooltipList.forEach((card: Element) => {
    const id = card.getAttribute('data-card-id');
    const popupList = document.querySelectorAll('[data-popup-id]');
    let template;
    for (let i = 0; i < popupList.length; i++) {
      const popup = (popupList[i] as HTMLElement);
      const { popupId } = popup.dataset;
      if (popupId === id) {
        template = popupList[i];
        break;
      }
    }
    if (template) {
      Tooltip(card, {
        content: template.innerHTML,
        placement: 'top',
        theme: 'popup',
        trigger: 'click',
        interactive: true,
        allowHTML: true,
      });
    }
  });
}

/* Copy Field */
const copyValue = () => {
  const fields = document.querySelectorAll('[data-copy]');
  if (fields.length) {
    fields.forEach((item: Element) => {
      const input = item.parentElement?.querySelector('input');
      if (input?.value) {
        item.addEventListener('click', () => {
          navigator.clipboard.writeText(input.value);
        });
      }
    });
  }
};
copyValue();

/* Sign Up Slider */
const signUpSlider: HTMLElement | null = document.querySelector('.sign-up-slider');
if (signUpSlider) {
  Slider(signUpSlider, {
    speed: 10,
    spaceBetween: 30,
    autoHeight: true,
    allowTouchMove: false,
  });
}

/* Delivery Slider */
const deliverySlider: HTMLElement | null = document.querySelector('.delivery-slider');
if (deliverySlider) {
  Slider(deliverySlider, {
    modules: [Thumbs],
    speed: 0,
    autoHeight: true,
    allowTouchMove: false,
    thumbs: {
      swiper: {
        // @ts-ignore
        el: '.delivery-thumbs',
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
  });
}

/* Main Slider */
const mainPageSlider: HTMLElement | null = document.querySelector('.slider');
if (mainPageSlider) {
  Slider(mainPageSlider, {
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

/* Card Slider */
const cardPageSlider: HTMLElement | null = document.querySelector('.card-page-slider');
if (cardPageSlider) {
  Slider(cardPageSlider, {
    modules: [Thumbs],
    spaceBetween: 20,
    thumbs: {
      swiper: {
        // @ts-ignore
        direction: 'vertical',
        el: '.card-page-thumbs',
        spaceBetween: 20,
        slidesPerView: 4,
        breakpoints: {
          320: {
            spaceBetween: 8,
          },
          768: {
            spaceBetween: 10,
          },
          1024: {
            spaceBetween: 20,
          },
        },
      },
    },
  });
}

/* Gallery Slider */
const gallerySlider: HTMLElement | null = document.querySelector('.gallery-slider');
if (gallerySlider) {
  Slider(gallerySlider, {
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

/* Basket Slider */
const basketSlider: HTMLElement | null = document.querySelector('.basket-slider');
if (basketSlider) {
  Slider(basketSlider, {
    modules: [Thumbs],
    speed: 0,
    autoHeight: true,
    allowTouchMove: false,
    thumbs: {
      swiper: {
        // @ts-ignore
        el: '.basket-nav',
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
  });
}

/* Logged in Dropdown */
const dropdownsList = document.querySelectorAll('.js-dropdown');
if (dropdownsList.length) {
  dropdownsList.forEach((dropdownElement) => {
    const dropdown = new Dropdown(dropdownElement);
    dropdown.setEventListeners();
  });
}

/* Sign in */
const openPopupTriggersList = document.querySelectorAll('.js-signin-popup-trigger');
if (openPopupTriggersList.length) {
  openPopupTriggersList.forEach((openPopupTriggerElement) => {
    const signInPopup = new Popup('.js-popup');
    signInPopup.setEventListeners();
    openPopupTriggerElement.addEventListener('click', () => {
      signInPopup.open();
    });
  });
}

/* Drawer */
const showMoreButtonElement = document.querySelector('.js-show-more-trigger');
let drawer: any;

if (showMoreButtonElement) {
  drawer = new Drawer({
    onShowCallback: () => {
      if (showMoreButtonElement) {
        showMoreButtonElement.classList.add('float-menu__nav-link_is_active');
      }
    },
    onHideCallback: () => {
      if (showMoreButtonElement) {
        showMoreButtonElement.classList.remove('float-menu__nav-link_is_active');
      }
    },
  });
  drawer.setEventListeners();
}

const showDrawerTriggersList = document.querySelectorAll('.js-drawer-trigger');
if (showDrawerTriggersList.length) {
  showDrawerTriggersList.forEach((showDrawerTriggerElement) => {
    showDrawerTriggerElement.addEventListener('click', drawer.show);
  });
}

if (showMoreButtonElement) {
  showMoreButtonElement.addEventListener('click', drawer.toggle);
}

const showDrawerElement = document.querySelector('.header__menu-button')!;
if (showDrawerElement) {
  showDrawerElement.addEventListener('click', drawer.show);
}

/* Menu Accordion */
const accordionsList = document.querySelectorAll('.js-accordion-item');
if (accordionsList.length) {
  accordionsList.forEach((accordionElement) => {
    const accordion = new Accordion(accordionElement);
    accordion.setEventListeners();
  });
}

const visibilityElement = document.querySelector('.visibility');
if (visibilityElement) {
  const visibility = new Visibility(visibilityElement, {
    onShowCallback: () => {},
    onHideCallback: () => {},
  });
  visibility.setEventListeners();
}

/* Brands show more */
const brandsElement = document.querySelector('.brands');
if (brandsElement) {
  const brands = new Brands(brandsElement);
  brands.setEventListeners();
}

/* Footer menu */
const footerElement = document.querySelector('.footer');
if (footerElement) {
  const footer = new Footer(footerElement);
  footer.setEventListeners();
}
