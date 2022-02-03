export class Dropdown {
  private readonly dropdownElement: Element;

  private readonly dropdownTriggerElement: Element;

  private readonly dropdownTriggerInsideElement: Element | null;

  private readonly dropdownTriggerIconClassName: string;

  private readonly dropdownTriggerIconElement: Element;

  private readonly dropdownContentElement: Element;

  private readonly dropdownContentIsVisibleClassName: string;

  constructor(dropdownElement: Element) {
    const dropdownElementClassName = 'dropdown';
    this.dropdownContentIsVisibleClassName = `${dropdownElementClassName}__content_is_visible`;

    this.dropdownElement = dropdownElement;
    this.dropdownTriggerElement = this.dropdownElement
      .querySelector<Element>(`.${dropdownElementClassName}__trigger`)!;

    this.dropdownTriggerInsideElement = this.dropdownElement
      .querySelector<Element>(`.${dropdownElementClassName}__trigger_type_inside`);

    this.dropdownTriggerIconClassName = `${dropdownElementClassName}__arrow-icon`;

    if (this.dropdownTriggerInsideElement) {
      this.dropdownTriggerIconElement = this.dropdownTriggerInsideElement
        .querySelector<Element>(`.${this.dropdownTriggerIconClassName}`)!;
    } else {
      this.dropdownTriggerIconElement = this.dropdownElement
        .querySelector<Element>(`.${this.dropdownTriggerIconClassName}`)!;
    }

    this.dropdownContentElement = this.dropdownElement
      .querySelector<Element>(`.${dropdownElementClassName}__content`)!;

    this.toggle = this.toggle.bind(this);
    this.documentClickHandler = this.documentClickHandler.bind(this);
  }

  setEventListeners() {
    this.dropdownTriggerElement.addEventListener('click', this.toggle);

    if (this.dropdownTriggerInsideElement) {
      this.dropdownTriggerInsideElement.addEventListener('click', this.toggle);
    }
  }

  private documentClickHandler(event: MouseEvent) {
    if (this.isOpened()) {
      const isClickedOutside = !this.dropdownElement.contains(event.target as Node);
      if (isClickedOutside) {
        // Hide the menu
        this.close();
      }
    }
  }

  isOpened(): boolean {
    return this.dropdownContentElement.classList.contains(this.dropdownContentIsVisibleClassName);
  }

  toggle() {
    if (this.isOpened()) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.dropdownTriggerIconElement?.classList.add(`${this.dropdownTriggerIconClassName}_is_rotated`);
    this.dropdownContentElement.classList.add(this.dropdownContentIsVisibleClassName);

    document.addEventListener('click', this.documentClickHandler);
  }

  close() {
    this.dropdownTriggerIconElement?.classList.remove(`${this.dropdownTriggerIconClassName}_is_rotated`);
    this.dropdownContentElement.classList.remove(this.dropdownContentIsVisibleClassName);

    document.removeEventListener('click', this.documentClickHandler);
  }
}
