import tippy, { Placement } from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

type Tooltip = {
  placement?: Placement
  theme?: string
};

export const tooltip = ({ placement, theme }: Tooltip) => {
  const tooltipList = document.querySelectorAll('[data-tippy-content]');
  const props: Tooltip = {
    placement,
    theme,
  };

  if (tooltipList.length) {
    tooltipList.forEach((tooltipElement: Element) => {
      tippy(tooltipElement, props);
    });
  }
};
