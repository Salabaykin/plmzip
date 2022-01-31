export class ClickOutside {
  readonly #containerElement: Element;

  readonly #close: () => void;

  constructor(containerElement: Element, close: () => void) {
    this.#containerElement = containerElement;
    this.#close = close;
  }

  handle() {
    this.#containerElement.addEventListener('click', (event: Event) => {
      const { target } = event;
      if ((target as HTMLElement).classList.contains('popup') || (target as HTMLElement).classList.contains('popup__close')) {
        this.#close();
      }
    });
  }
}
