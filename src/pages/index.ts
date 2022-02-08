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

/* Custom Select */
const searchSelectParams = document.querySelectorAll('.search-param');
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

/* Sign Up Slider */
Slider('.sign-up-slider', {
  speed: 0,
  spaceBetween: 30,
  autoHeight: true,
  allowTouchMove: false,
});

Tooltip('[data-tippy-content]', {
  placement: 'top-end',
  theme: 'light',
});

const phoneMaskOptions = {
  selector: '#phone',
  inputMask: '+7(999)999-99-99',
  placeholder: '+7(___)___-__-__',
};
mask(phoneMaskOptions);

const smsCode = document.querySelectorAll('.code');
smsCode.forEach((_codeElement, index) => {
  const smsMaskOptions = {
    selector: `#code-${index + 1}`,
    inputMask: '9',
  };
  mask(smsMaskOptions);
});

const emailMaskOptions = {
  selector: '#email',
  inputMask: '*{2,25}@*{2,20}.*{2,15}',
};
mask(emailMaskOptions);

const captchaMaskOptions = {
  selector: '#captcha',
  inputMask: '*{4,10}',
};
mask(captchaMaskOptions);

/* Card Popup */
const tooltipList = document.querySelectorAll('[data-card-popup]');
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

/* Quantity */
formQuantity();

/* Toggler */
const toggler = document.querySelectorAll('[data-toggler]');
Toggler(toggler, 'active');

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

/* Quantity */
formViewPass();

/* Delivery Slider */
Slider('.delivery-slider', {
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

/* Main Slider */
Slider('.slider', {
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/* Card Slider */
Slider('.card-page-slider', {
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

/* Gallery Slider */
Slider('.gallery-slider', {
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/* Basket Slider */
Slider('.basket-slider', {
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
