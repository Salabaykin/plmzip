/* eslint-disable */
import './index.css';

import validate from 'validate.js';
import { Thumbs } from 'swiper';
import { Dropdown } from '../components/dropdown/Dropdown';
import { Popup } from '../components/popup/Popup';
import { Drawer } from '../components/drawer/Drawer';
import { Accordion } from '../components/accordion/Accordion';
import { Visibility } from '../components/visibility/Visibility';
import { Brands } from '../components/brands/Brands';
import { Footer } from '../components/footer/Footer';
import { formViewPass, mask, checkValue } from '../components/form/Form';
import { formQuantity } from '../components/quantity/Quantity';
import { Slider } from '../components/slider/Slider';
import { Choice } from '../components/search/Choice';
import { Tooltip } from '../components/tooltip/Tooltip';
import { Toggler } from '../components/toggler/Toggler';

const constraints = {
  email: {
    presence: true,
    email: true,
  },
  password: {
    presence: true,
    length: {
      minimum: 6,
    },
  },
  confirmpassword: {
    presence: true,
    equality: {
      attribute: 'password',
    },
  },
  surname: {
    presence: true,
    type: 'string',
    length: {
      minimum: 2,
      maximum: 20,
    },
  },
  name: {
    presence: true,
    type: 'string',
    length: {
      minimum: 2,
      maximum: 20,
    },
  },
  activity: {
    presence: true,
  },
  captcha: {
    presence: true,
    length: {
      minimum: 2,
    },
  },
  company: {
    presence: true,
    length: {
      minimum: 2,
    },
  },
  city: {
    presence: true,
    length: {
      minimum: 2,
    },
  },
  codeq: {
    presence: true,
    type: 'number',
    numericality: {
      noStrings: true,
    },
  },
  codew: {
    presence: true,
    type: 'number',
    numericality: {
      noStrings: true,
    },
  },
  codee: {
    presence: true,
    type: 'number',
    numericality: {
      noStrings: true,
    },
  },
  coder: {
    presence: true,
    type: 'number',
    numericality: {
      noStrings: true,
    },
  },
};

const showErrorsForInput = (input: HTMLInputElement, errors: any, container: string) => {
  const keys = Object.keys(errors);
  const isContainInputName = keys.includes(input.name);
  checkValue(input, !isContainInputName, container);
};

const checkValid = (form: Element, container: string) => {
  if (form && container) {
    const policy = form.querySelector('input[name="confirm"]');
    const inputs = form.querySelectorAll('input');
    inputs.forEach((input: any) => {
      input.addEventListener('change', () => {
        const errors = validate(form, constraints) || {};
        showErrorsForInput(input, errors, container);
      });
    });
    if (policy) {
      policy.addEventListener('change', () => {
        const parent = policy.closest('.sign-up__content');
        // @ts-ignore
        const { checked } = policy;
        if (parent) {
          if (checked) {
            parent.classList.add('success');
          } else {
            parent.classList.remove('success');
          }
        }
      });
    }
  }
};

const form = document.querySelector('#sign-up');
const requestForm = document.querySelector('#request-form');
if (form) checkValid(form, '.sign-up__content');
if (requestForm) checkValid(requestForm, '.form__section');

/* Input Mask */
const phoneMaskOptions = {
  selector: '#phone',
  inputMask: '+7(999)999-99-99',
  placeholder: '+7(___)___-__-__',
  container: '.sign-up__content',
};
mask(phoneMaskOptions);
const requestMaskOptions = {
  selector: '#phone',
  inputMask: '+7(999)999-99-99',
  placeholder: '+7(___)___-__-__',
  container: '.form__section',
};
mask(requestMaskOptions);

/* Basket */
const selectAll = document.querySelector('input[name="select-all"]');
const orderList = document.querySelectorAll('input[name="order"]');
if (selectAll && orderList.length) {
  selectAll.addEventListener('click', (event: Event) => {
    const target = (event.target as HTMLInputElement);

    orderList.forEach((input: Element) => {
      const inp = input as HTMLInputElement;
      inp.checked = target.checked;
    });
  });
}

/* Menu */
const menuBlock = document.querySelector('[data-menu]');
if (menuBlock) {
  const menuIsOpen = menuBlock.classList.contains('active');
  const hideMenu = () => menuBlock.classList.remove('active');
  if (!menuIsOpen) {
    document.addEventListener('click', (event: MouseEvent) => {
      const target = (event.target as HTMLElement);
      const isMenu = target.closest('.main__scrollable-container');
      const isMenuTrigger = target.closest('[data-menu-trigger]');
      if (isMenuTrigger && !menuIsOpen) {
        menuBlock.classList.toggle('active');
      } else if (!isMenu) {
        hideMenu();
      }
    });
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        hideMenu();
      }
    });
  }
}

/* Timer */
const sale = document.querySelector('.sale');
if (sale && !sale.classList.contains('hidden')) {
  const timer = document.getElementById('timer');
  const hideTimer = document.querySelector('[data-hide-timer]');
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
    if (hideTimer) {
      hideTimer.addEventListener('click', () => sale.classList.add('hidden'));
    }
  }
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
const customSelectInit = (selectList: any) => {
  selectList.forEach((select: Element) => {
    Choice(select, {
      allowHTML: true,
      searchEnabled: false,
      itemSelectText: '',
      classNames: {
        button: 'filter__arrow',
      },
    });
  });
};
const searchSelectParams = document.querySelectorAll('.search-param');
const requestSelectParams = document.querySelectorAll('.activity');
if (searchSelectParams.length) customSelectInit(searchSelectParams);
if (requestSelectParams.length) customSelectInit(requestSelectParams);

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
class CopyField {
  inputValue: string = '';
  inputEl: any;

  constructor(input: HTMLInputElement) {
    this.inputEl = input;
    this.inputValue = input.value;
  }

  copy() {
    if ((navigator as any).clipboard) {
      (navigator as any).clipboard.writeText(this.inputValue);
    } else if ((window as any).clipboardData) {
      (window as any).clipboardData.setData('text', this.inputValue);
    } else {
      this.copyToClipboard(this.inputEl.nativeElement);
    }
  }

  copyToClipboard(el: HTMLInputElement) {
    const oldContentEditable = el.contentEditable;
    const oldReadOnly = el.readOnly;

    if (el) {
      try {
        el.contentEditable = 'true';
        el.readOnly = false;
        this.copyNodeContentsToClipboard(el);
      } finally {
        el.contentEditable = oldContentEditable;
        el.readOnly = oldReadOnly;
      }
    }
  }

  copyNodeContentsToClipboard(el: HTMLInputElement) {
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(el);

    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
    }

    el.setSelectionRange(0, 999999);
    document.execCommand('copy');
  }
}

const copyValue = () => {
  const fields = document.querySelectorAll('[data-copy]');
  if (fields.length) {
    fields.forEach((item: Element) => {
      const input = item.parentElement?.querySelector('input');
      if (input) {
        item.addEventListener('click', () => {
          const copy = new CopyField(input);
          copy.copy();
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
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
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
