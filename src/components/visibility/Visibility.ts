interface Options {
  triggerElementSelector?: string,
  contentElementSelector?: string,
  containerVisibilityClassName?: string,
  onShowCallback?: () => void,
  onHideCallback?: () => void,
  isReversed?: boolean,
}

const DEFAULT_OPTIONS: Required<Options> = {
  triggerElementSelector: '.visibility__trigger',
  contentElementSelector: '.visibility__content',
  containerVisibilityClassName: 'visibility__content_is_visible',
  onShowCallback: () => {
    console.log('Show');
  },
  onHideCallback: () => {
    console.log('Hide');
  },
  isReversed: false,
};

export class Visibility {
  readonly #containerElement: Element;

  readonly #triggerElement: Element;

  readonly #options: Required<Options>;

  readonly #contentElementsList: Element[];

  constructor(containerElement: Element, options: Options = DEFAULT_OPTIONS) {
    this.#containerElement = containerElement;
    this.#options = {
      ...DEFAULT_OPTIONS,
      ...options,
    };

    const triggerElement = this.#containerElement
      .querySelector(this.#options.triggerElementSelector);
    if (!triggerElement) {
      throw new Error('Can\'t find a trigger for visibility');
    }
    this.#triggerElement = triggerElement;

    const contentElementsList = this.#containerElement
      .querySelectorAll(this.#options.contentElementSelector);
    if (contentElementsList.length === 0) {
      throw new Error('Can\'t find a content element(s) for visibility');
    }
    this.#contentElementsList = Array.from(contentElementsList);

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  get isVisible(): boolean {
    return this.#contentElementsList
      // eslint-disable-next-line max-len
      .every((contentElement) => contentElement.classList.contains(this.#options.containerVisibilityClassName));
  }

  setEventListeners() {
    this.#triggerElement.addEventListener('click', this.toggle);
  }

  toggle() {
    if (this.isVisible) {
      this.hide();
    } else {
      this.show();
    }
  }

  show() {
    this.#contentElementsList.forEach((contentElement) => {
      contentElement.classList.add(this.#options.containerVisibilityClassName);
    });

    if (this.#options.isReversed) {
      this.#options.onHideCallback();
    } else {
      this.#options.onShowCallback();
    }
  }

  hide() {
    this.#contentElementsList.forEach((contentElement) => {
      contentElement.classList.remove(this.#options.containerVisibilityClassName);
    });

    if (this.#options.isReversed) {
      this.#options.onShowCallback();
    } else {
      this.#options.onHideCallback();
    }
  }
}
