import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

export const Tooltip = (selector: Element | string, options: object) => {
  // @ts-ignore
  const instance = tippy(selector, options);
  if (instance.hide) {
    document.addEventListener('click', (event: MouseEvent) => {
      const target = (event.target as HTMLElement);
      if (target.classList.contains('card-dropdown__close')) {
        instance.hide();
      }
    });
  }
};
