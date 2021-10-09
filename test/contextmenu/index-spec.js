import { Application } from '@hotwired/stimulus';
import ContextmenuController from 'index';

const application = Application.start();
application.register('contextmenu', ContextmenuController);

describe('index', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div data-controller="contextmenu">
        <p>content</p>
        <p>content</p>
        <ul style="display: none;" data-contextmenu-target="menu">
          <li><a href="#Menu1">Root Menu1</a></li>
          <li><a href="#Menu2">Root Menu2</a></li>
          <li><a href="#Menu3">Root Menu3</a></li>
        </ul>
      </div>
    `;
  });

  it('opens and closes contextmenu', () => {
    $('p').dispatchEvent(new MouseEvent('contextmenu', { bubbles: true }));
    expect($('ul').style.display).toEqual('');

    $('a[href="#Menu1"]').click();
    expect($('ul').style.display).toEqual('none');
  });

  it('closes all menus by click window', () => {
    $('p').dispatchEvent(new MouseEvent('contextmenu', { bubbles: true }));
    expect($('ul').style.display).toEqual('');

    document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect($('ul').style.display).toEqual('none');
  });
});
