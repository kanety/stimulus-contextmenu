describe('menu-bind', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div data-controller="contextmenu">
        <div data-contextmenu-target="context">
          <p>content</p>
          <p>content</p>
        </div>
        <div data-contextmenu-target="menu">
          <ul data-controller="menu">
            <li><a href="#Menu1">Menu1</a></li>
            <li><a href="#Menu2">Menu2</a></li>
            <li><a href="#Menu3">Menu3</a></li>
          </ul>
        </div>
      </div>
    `;
  });

  it('opens and closes contextmenu', () => {
    $('p').dispatchEvent(new MouseEvent('contextmenu', { bubbles: true }));
    expect($('[data-contextmenu-target="menu"]').matches('.st-contextmenu--visible')).toEqual(true);

    $('a[href="#Menu1"]').click();
    expect($('[data-contextmenu-target="menu"]').matches('.st-contextmenu--visible')).toEqual(false);
  });

  it('closes all menus by click window', () => {
    $('p').dispatchEvent(new MouseEvent('contextmenu', { bubbles: true }));
    expect($('[data-contextmenu-target="menu"]').matches('.st-contextmenu--visible')).toEqual(true);

    document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect($('[data-contextmenu-target="menu"]').matches('.st-contextmenu--visible')).toEqual(false);
  });
});
