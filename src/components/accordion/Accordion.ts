export class Accordion {
  private readonly accordionElement: Element;

  private readonly accordionTriggerElement: Element;

  private readonly accordionTriggerIconClassName: string;

  private readonly accordionTriggerIconElement: Element;

  private readonly accordionContentElement: Element;

  private readonly accordionContentIsVisibleClassName: string;

  constructor(accordionElement: Element) {
    const accordionElementClassName = 'accordion';
    this.accordionContentIsVisibleClassName = `${accordionElementClassName}__content_is_visible`;

    this.accordionElement = accordionElement;
    this.accordionTriggerElement = this.accordionElement
      .querySelector<Element>(`.${accordionElementClassName}__trigger`)!;

    this.accordionTriggerIconClassName = `${accordionElementClassName}__arrow-icon`;
    this.accordionTriggerIconElement = this.accordionElement
      .querySelector<Element>(`.${this.accordionTriggerIconClassName}`)!;

    this.accordionContentElement = this.accordionElement
      .querySelector<Element>(`.${accordionElementClassName}__content`)!;

    this.toggle = this.toggle.bind(this);
  }

  setEventListeners() {
    this.accordionTriggerElement.addEventListener('click', this.toggle);
  }

  isOpened(): boolean {
    return this.accordionContentElement.classList.contains(this.accordionContentIsVisibleClassName);
  }

  toggle(event: { target: any }) {
    const { target } = event;
    if (target.classList.contains('user-orders__pay')) return;
    if (this.isOpened()) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.accordionTriggerElement.classList.add('accordion__title_is_selected');
    this.accordionTriggerIconElement.classList.add(`${this.accordionTriggerIconClassName}_is_rotated`);
    this.accordionContentElement.classList.add(this.accordionContentIsVisibleClassName);
  }

  close() {
    this.accordionTriggerElement.classList.remove('accordion__title_is_selected');
    this.accordionTriggerIconElement.classList.remove(`${this.accordionTriggerIconClassName}_is_rotated`);
    this.accordionContentElement.classList.remove(this.accordionContentIsVisibleClassName);
  }
}
