describe('index', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div data-controller="contextmenu">
        <p>content</p>
        <p>content</p>
        <ul data-contextmenu-target="menu">
          <li><a href="#Menu1">Root Menu1</a></li>
          <li><a href="#Menu2">Root Menu2</a></li>
          <li><a href="#Menu3">Root Menu3</a></li>
        </ul>
      </div>
    `;
  });

  it('opens and closes contextmenu', () => {
    $('p').dispatchEvent(new MouseEvent('contextmenu', { bubbles: true }));
    expect($('ul').matches('.st-contextmenu--visible')).toEqual(true);

    $('a[href="#Menu1"]').click();
    expect($('ul').matches('.st-contextmenu--visible')).toEqual(false);
  });

  it('closes all menus by click window', () => {
    $('p').dispatchEvent(new MouseEvent('contextmenu', { bubbles: true }));
    expect($('ul').matches('.st-contextmenu--visible')).toEqual(true);

    document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect($('ul').matches('.st-contextmenu--visible')).toEqual(false);
  });
});
