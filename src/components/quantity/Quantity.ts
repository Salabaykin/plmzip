export function formQuantity() {
  document.addEventListener('click', (event: MouseEvent) => {
    const target = (event.target as HTMLElement);
    const quantity = target.closest('.quantity');
    if (target && quantity) {
      const button = target.closest('.quantity__button');
      const isPlus = button?.classList.contains('quantity__button_plus');
      if (button) {
        const input = quantity.querySelector('input');
        const dataMaxCount: number = Number(input?.dataset.maxcount);
        const dataMinCount: number = Number(input?.dataset.mincount);
        let value: number = Number(input?.value);
        if (input && value >= 0) {
          if (isPlus) {
            if (dataMaxCount) {
              // eslint-disable-next-line no-plusplus
              if (value < dataMaxCount) value++;
            } else {
              // eslint-disable-next-line no-plusplus
              value++;
            }
          } else {
            // eslint-disable-next-line no-plusplus
            --value;
            if (dataMinCount) {
              if (value <= dataMinCount) value = dataMinCount;
            } else if (value <= 0) value = 0;
          }
          input.value = String(value);
        }
      }
    }
  });
}
