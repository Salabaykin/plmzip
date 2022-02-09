export class Accordion {
  private readonly accordionElement: Element;

  private readonly accordionTriggerElement: NodeList;

  private readonly accordionTriggerIconClassName: string;

  private readonly accordionTriggerIconElement: NodeList;

  private readonly accordionContentElement: Element;

  private readonly accordionContentIsVisibleClassName: string;

  constructor(accordionElement: Element) {
    const accordionElementClassName = 'accordion';
    this.accordionContentIsVisibleClassName = `${accordionElementClassName}__content_is_visible`;

    this.accordionElement = accordionElement;
    this.accordionTriggerElement = this.accordionElement
      .querySelectorAll<Element>(`.${accordionElementClassName}__trigger`)!;

    this.accordionTriggerIconClassName = `${accordionElementClassName}__arrow-icon`;
    this.accordionTriggerIconElement = this.accordionElement
      .querySelectorAll<Element>(`.${this.accordionTriggerIconClassName}`)!;

    this.accordionContentElement = this.accordionElement
      .querySelector<Element>(`.${accordionElementClassName}__content`)!;

    this.toggle = this.toggle.bind(this);
  }

  setEventListeners() {
    this.accordionTriggerElement.forEach((element) => {
      element.addEventListener('click', this.toggle);
    });
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
    // @ts-ignore
    this.accordionTriggerElement.forEach((element: HTMLElement) => {
      element.classList.add('accordion__title_is_selected');
    });
    // @ts-ignore
    this.accordionTriggerIconElement.forEach((element: HTMLElement) => {
      element.classList.add(`${this.accordionTriggerIconClassName}_is_rotated`);
    });
    this.accordionContentElement.classList.add(this.accordionContentIsVisibleClassName);
  }

  close() {
    // @ts-ignore
    this.accordionTriggerElement.forEach((element: HTMLElement) => {
      element.classList.remove('accordion__title_is_selected');
    });
    // @ts-ignore
    this.accordionTriggerIconElement.forEach((element: HTMLElement) => {
      element.classList.remove(`${this.accordionTriggerIconClassName}_is_rotated`);
    });
    this.accordionContentElement.classList.remove(this.accordionContentIsVisibleClassName);
  }
}
