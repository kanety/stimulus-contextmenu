import { Application } from '@hotwired/stimulus';
import MenuController from '@kanety/stimulus-menu';
import ContextmenuController from 'index';

const application = Application.start();
application.register('menu', MenuController);
application.register('contextmenu', ContextmenuController);

global.$ = document.querySelector.bind(document);
global.$$ = document.querySelectorAll.bind(document);
