import tippy, { Props} from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

export const tooltip = (options: Partial<Props> | undefined) => {
  const tooltipList = document.querySelectorAll('[data-tippy-content]');

  if (tooltipList.length) {
    tooltipList.forEach((tooltipElement: Element) => {
      tippy(tooltipElement, options);
    });
  }
};
