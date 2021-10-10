# stimulus-contextmenu

A stimulus controller for simple contextmenu.

## Dependencies

* @hotwired/stimulus 3.0

## Installation

Install from npm:

    $ npm install @kanety/stimulus-contextmenu --save

## Usage

Register controller:

```javascript
import { Application } from '@hotwired/stimulus';
import ContextmenuController from '@kanety/stimulus-contextmenu';

const application = Application.start();
application.register('contextmenu', ContextmenuController);
```

Import css:

```css
@import '@kanety/stimulus-contextmenu';
```

Build html as follows:

```html
<div data-controller="contextmenu">
  <p>content</p>
  <p>content</p>
  <ul class="st-contextmenu" data-contextmenu-target="menu">
    <li><a href="#">Menu1-1</a></li>
    <li><a href="#">Menu1-2</a></li>
  </ul>
</div>
```

You can specify context area bound to menu:

```html
<div data-controller="contextmenu">
  <div data-contextmenu-target="context">
    <p>content</p>
    <p>content</p>
  </div>
  <ul class="st-contextmenu" data-contextmenu-target="menu">
    <li><a href="#">Menu1-1</a></li>
    <li><a href="#">Menu1-2</a></li>
  </ul>
</div>
```

You can also use [@kanety/stimulus-menu](https://github.com/kanety/stimulus-menu) as menu:

```html
<div data-controller="contextmenu">
  <p>content</p>
  <p>content</p>
  <div class="st-contextmenu" data-contextmenu-target="menu">
    <ul class="st-menu st-menu--vertical" data-controller="menu">
      <li>
        <span class="st-menu__icon"><a href="#">Menu1</a></span>
        <ul class="st-menu--vertical">
          <li><a href="#">Menu1-1</a></li>
          <li><a href="#">Menu1-2</a></li>
        </ul>
      </li>
      <li>
        <span class="st-menu__icon"><a href="#">Menu2</a></span>
        <ul class="st-menu--vertical">
          <li><a href="#">Menu2-1</a></li>
          <li><a href="#">Menu2-2</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
```

## License

The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
