import Inputmask from 'inputmask';

interface Mask {
  selector: string,
  inputMask?: string,
  placeholder?: string,
  container?: string
}

// @ts-ignore
export const checkValue = (input: HTMLInputElement, isValid: boolean, container: string, inputMask: string = '') => {
  const inputContainer = input.closest(container);
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
  container = '',
}: Mask) => {
  const element: HTMLInputElement | null = document.querySelector(selector);

  if (element) {
    Inputmask({
      mask: inputMask,
      showMaskOnHover: false,
      placeholder,
      onincomplete() {
        checkValue(element, false, container, inputMask);
      },
      oncomplete() {
        checkValue(element, false, container, inputMask);
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
