import { Controller } from '@hotwired/stimulus';
import '@kanety/stimulus-static-actions';
import './index.scss';

export default class extends Controller {
  static targets = ['menu', 'context'];
  static actions = [
    ['element', 'contextmenu->show'],
    ['element', 'click@window->hide']
  ];

  show(e) {
    if (this.hasContextTarget && !this.contextTarget.contains(e.target)) return;

    this.menuTarget.style.top = `${e.pageY + 1}px`;
    this.menuTarget.style.left = `${e.pageX + 1}px`;
    this.toggleClass(true);
    e.preventDefault();
  }

  hide(e) {
    this.toggleClass(false);
  }

  toggleClass(visible) {
    this.menuTarget.classList.toggle('st-contextmenu--visible', visible);
  }
}
