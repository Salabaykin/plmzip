export class Drawer {
  private readonly drawerElement: Element;

  private readonly onShowCallback: () => void;

  private readonly onHideCallback: () => void;

  constructor({ onShowCallback, onHideCallback }: {
    onShowCallback: () => void;
    onHideCallback: () => void;
  }) {
    this.onShowCallback = onShowCallback;
    this.onHideCallback = onHideCallback;
    this.drawerElement = document.querySelector('.drawer')!;
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  setEventListeners() {
    const drawerOverlayElement = this.drawerElement.querySelector('.drawer__overlay')!;
    drawerOverlayElement.addEventListener('click', this.hide);

    const drawerCloseElement = this.drawerElement.querySelector('.drawer__close')!;
    drawerCloseElement.addEventListener('click', this.hide);
  }

  isOpened(): boolean {
    return this.drawerElement.classList.contains('drawer_is_visible');
  }

  toggle() {
    if (this.isOpened()) {
      this.hide();
    } else {
      this.show();
    }
  }

  show() {
    this.drawerElement.classList.add('drawer_is_visible');
    this.onShowCallback();
  }

  hide() {
    this.drawerElement.classList.remove('drawer_is_visible');
    this.onHideCallback();
  }
}
