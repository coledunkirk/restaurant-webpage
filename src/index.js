import displayContact from './contact.js';
import displayMenu from './menu.js';
import pageLoad from './pageLoad.js';

function homeTab() {
  pageLoad();
  const contact = document.querySelector('#contact');
  const menu = document.querySelector('#menu');
  contact.addEventListener('click', contactTab);
  menu.addEventListener('click', menuTab);
}

function contactTab() {
  displayContact();
  const home = document.querySelector('#home');
  const menu = document.querySelector('#menu');
  home.addEventListener('click', homeTab);
  menu.addEventListener('click', menuTab);
}

function menuTab() {
  displayMenu();
  const home = document.querySelector('#home');
  const contact = document.querySelector('#contact');
  home.addEventListener('click', homeTab);
  contact.addEventListener('click', contactTab);
}

homeTab();

