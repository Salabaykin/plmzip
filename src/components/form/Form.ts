import Inputmask from 'inputmask';

interface Mask {
  selector: string,
  inputMask?: string,
  placeholder?: string
}

// @ts-ignore
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
  const element: HTMLElement | null = document.querySelector(selector);

  if (element) {
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

export function formViewPass() {
  document.addEventListener('click', (event: MouseEvent) => {
    const target = (event.target as HTMLElement);
    if (target.closest('[class*="__toggle-password"]')) {
      const inputType = target.classList.contains('active') ? 'password' : 'text';
      target.parentElement?.querySelector('input')?.setAttribute('type', inputType);
      target.classList.toggle('active');
    }
  });
}