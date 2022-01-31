const ESC_KEYCODE = 27;

export class HandleEsc {
  readonly #close: () => void;

  constructor(close: () => void) {
    this.#close = close;
    this.handle = this.handle.bind(this);
  }

  private handle(event: KeyboardEvent) {
    event.preventDefault();

    if (event.which === ESC_KEYCODE) {
      this.#close();
    }
  }

  subscribe() {
    document.addEventListener('keyup', this.handle);
  }

  unsubscribe() {
    document.removeEventListener('keyup', this.handle);
  }
}
