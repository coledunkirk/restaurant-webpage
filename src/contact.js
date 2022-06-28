export default function displayContact() {
  const content = document.querySelector("#content");
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  const message = document.createElement("h1");
  const email = document.createElement("p");
  const phone = document.createElement("p");
  const navBar = document.createElement("div");
  navBar.classList.add("navbar");
  const home = document.createElement("a");
  const menu = document.createElement("a");
  home.setAttribute('href', '#');
  home.setAttribute('id', 'home');
  menu.setAttribute('href', '#');
  menu.setAttribute('id', 'menu');
  message.textContent = "Contact us by phone or email!";
  phone.textContent = "(111) 111-1111";
  email.textContent = "bob@bobsburgers.com";
  home.textContent = "Home";
  menu.textContent = "Menu";
  content.append(navBar, message, phone, email);
  navBar.append(home, menu);
}

