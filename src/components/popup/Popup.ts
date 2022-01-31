import { HandleEsc } from '../visibility/HandleEsc';

export class Popup {
  private readonly popupElement: Element;

  private handleEscUp: HandleEsc;

  constructor(popupSelector: string) {
    this.popupElement = document.querySelector(popupSelector)!;
    this.handleEscUp = new HandleEsc(this.close);
  }

  setEventListeners() {
    this.popupElement.addEventListener('click', (event: Event) => {
      const { target } = event;
      if ((target as HTMLElement).classList.contains('popup') || (target as HTMLElement).classList.contains('popup__close')) {
        this.close();
      }
    });
  }

  open() {
    this.popupElement.classList.add('popup_is-opened');
    this.handleEscUp.subscribe();
  }

  close() {
    this.popupElement.classList.remove('popup_is-opened');
    this.handleEscUp.unsubscribe();
  }
}
