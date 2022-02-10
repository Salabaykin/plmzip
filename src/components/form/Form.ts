import Inputmask from 'inputmask';

interface Mask {
  selector: string,
  inputMask?: string,
  placeholder?: string
}

// @ts-ignore
export const checkValue = (input: HTMLInputElement, isValid: boolean, inputMask: string = '') => {
  const inputContainer = input.closest('.sign-up__content');
  const { value } = input;
  const valid = inputMask !== '' ? Inputmask.isValid(value, { mask: inputMask }) : isValid;
  if (inputContainer) {
    if (valid) {
      inputContainer.classList.remove('error');
      inputContainer.classList.add('success');
    } else {
      inputContainer.classList.add('error');
      inputContainer.classList.remove('success');
    }
  }
};

export const mask = ({
  selector,
  inputMask,
  placeholder = '',
}: Mask) => {
  const element: HTMLInputElement | null = document.querySelector(selector);

  if (element) {
    Inputmask({
      mask: inputMask,
      showMaskOnHover: false,
      placeholder,
      onincomplete() {
        checkValue(element, false, inputMask);
      },
      oncomplete() {
        checkValue(element, false, inputMask);
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
