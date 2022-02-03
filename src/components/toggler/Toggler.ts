export const Toggler = (selectorList: NodeListOf<Element>, selectedClass: string) => {
  selectorList.forEach((selector: Element) => {
    selector.addEventListener('click', (event: Event) => {
      const target = (event.target as HTMLElement);
      target.classList.toggle(selectedClass);
    });
  });
};
