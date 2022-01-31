import { Visibility } from '../visibility/Visibility';

export class Brands {
  private visibility: Visibility;

  constructor(containerElement: Element) {
    const options = {
      triggerElementSelector: '.brands__button',
      contentElementSelector: '.brands__item_is_hidden',
      containerVisibilityClassName: 'brands__item_is_hidden',
      isReversed: true,
      onShowCallback: () => {
        const triggerElement = containerElement.querySelector('.brands__button');
        if (triggerElement) {
          triggerElement.remove();
        }
      },
    };
    this.visibility = new Visibility(containerElement, options);
  }

  setEventListeners() {
    this.visibility.setEventListeners();
  }
}
