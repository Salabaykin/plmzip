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
        let value: number = Number(input?.value);
        if (input && value) {
          if (isPlus) {
            // eslint-disable-next-line no-plusplus
            if (value < dataMaxCount) value++;
          } else {
            // eslint-disable-next-line no-plusplus
            --value;
            if (value < 1) value = 1;
          }
          input.value = String(value);
        }
      }
    }
  });
}
