import { Visibility } from '../visibility/Visibility';

export class Footer {
  private collapsableList: NodeListOf<Element>;

  constructor(containerElement: Element) {
    const collapsableList = containerElement.querySelectorAll('.footer__column_type_collapsible');
    if (!collapsableList) {
      throw new Error('Can\'t find collapsable menu');
    }

    this.collapsableList = collapsableList;
  }

  setEventListeners() {
    const options = {
      triggerElementSelector: '.footer__column-title_type_clickable',
      contentElementSelector: '.footer__nav',
      containerVisibilityClassName: 'footer__nav_is_hidden',
      isReversed: true,
    };

    this.collapsableList.forEach((collapsableElement) => {
      const iconElement = collapsableElement.querySelector('.footer__shevrone-icon');
      const onShowCallback = () => {
        iconElement?.classList.remove('footer__shevrone-icon_is_rotated');
      };
      const onHideCallback = () => {
        iconElement?.classList.add('footer__shevrone-icon_is_rotated');
      };

      const visibility = new Visibility(collapsableElement, {
        ...options,
        onShowCallback,
        onHideCallback,
      });
      visibility.setEventListeners();
    });
  }
}
