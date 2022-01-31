import './catalog-second-level.css';

import { Dropdown } from '../../components/dropdown/Dropdown';
import { Popup } from '../../components/popup/Popup';
import { Drawer } from '../../components/drawer/Drawer';
import { PasswordType } from '../../components/form/Form';
import { Accordion } from '../../components/accordion/Accordion';
import { Visibility } from '../../components/visibility/Visibility';
import { Brands } from '../../components/brands/Brands';
import { Footer } from '../../components/footer/Footer';

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
const drawer = new Drawer({
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
showDrawerElement.addEventListener('click', drawer.show);

/* Password type toggle */
const passwordType = new PasswordType();
passwordType.setEventListeners();

/* Menu Accordion */
const accordionsList = document.querySelectorAll('.js-accordion-item');
accordionsList.forEach((accordionElement) => {
  const accordion = new Accordion(accordionElement);
  accordion.setEventListeners();
});

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
