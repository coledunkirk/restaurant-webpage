export default function pageLoad() {
  const content = document.querySelector("#content");
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  const name = document.createElement("h1");
  const infoLine1 = document.createElement("p");
  const infoLine2 = document.createElement("p");
  const navBar = document.createElement("div");
  navBar.classList.add('navbar');
  const contact = document.createElement('a');
  const menu = document.createElement('a');
  contact.setAttribute('href', '#');
  contact.setAttribute('id', 'contact')
  menu.setAttribute('href', '#');
  menu.setAttribute('id', 'menu');
  name.textContent = "Bob's Burgers";
  infoLine1.textContent = "Welcome to Bob's Burgers! Home of the Basic Bob Bitchburger!";
  infoLine2.textContent = "We make the best burgers, even better than all the other places that say that.";
  contact.textContent = "Contact";
  menu.textContent = "Menu";
  content.append(navBar, name, infoLine1, infoLine2);
  navBar.append(contact, menu);
}
