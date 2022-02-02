import Choices from 'choices.js';
import 'choices.js/public/assets/styles/choices.min.css';

export const Choice = (selector: Element, options: Object) => new Choices(selector, options);
