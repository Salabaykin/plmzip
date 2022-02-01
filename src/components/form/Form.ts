import Inputmask from 'inputmask';

interface Mask {
  selector: string,
  inputMask?: string,
  placeholder?: string
}

const checkValue = (input, inputMask) => {
  const { value } = input;
  const isValid = Inputmask.isValid(value, { mask: inputMask });

  if (isValid) {
    input
      .closest('.input-field')
      .classList
      .remove('error');
  } else {
    input
      .closest('.input-field')
      .classList
      .add('error');
  }
};

export const mask = ({
  selector,
  inputMask,
  placeholder = '',
}: Mask) => {
  const element = document.querySelector(selector);

  if (element) {
    // @ts-ignore
    Inputmask({
      mask: inputMask,
      showMaskOnHover: false,
      placeholder,
      onincomplete() {
        checkValue(this, inputMask);
      },
      oncomplete() {
        checkValue(this, inputMask);
      },
    }).mask(element);
  }
};

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
