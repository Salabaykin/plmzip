export class PasswordType {
  private readonly togglePasswordButtonElement: HTMLButtonElement;

  private readonly passwordInputElement: HTMLInputElement;

  constructor() {
    this.togglePasswordButtonElement = document.querySelector('.form__toggle-password')!;
    this.passwordInputElement = this.togglePasswordButtonElement
      .closest('.form__section')!
      .querySelector('.form__input_type_password')!;

    this.togglePassword = this.togglePassword.bind(this);
  }

  togglePassword() {
    if (this.passwordInputElement.type === 'password') {
      this.passwordInputElement.type = 'text';
      this.togglePasswordButtonElement.setAttribute('aria-label', 'Спрятать пароль.');
    } else {
      this.passwordInputElement.type = 'password';
      this.togglePasswordButtonElement.setAttribute(
        'aria-label',
        'Показать пароль как простой текст. Предупреждение: это отобразит пароль на экране.',
      );
    }
  }

  setEventListeners() {
    this.togglePasswordButtonElement.addEventListener('click', this.togglePassword);
  }
}
