import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling
import 'tippy.js/themes/light.css';

export const tooltip = ({ placement, theme }: { placement: string, theme: string }) => {
  const tooltipList = document.querySelectorAll('[data-tippy-content]');

  if (tooltipList.length) {
    tooltipList.forEach((tooltipElement: Element) => {
      tippy(tooltipElement, {
        placement: placement,
        theme: theme,
      });
    });
  }
};
