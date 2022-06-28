export default function displayMenu() {
  const content = document.querySelector("#content");
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  const title = document.createElement("h1");
  const description = document.createElement("p");
  const item1 = document.createElement("p");
  const item2 = document.createElement("p");
  const item3 = document.createElement("p");
  const item4 = document.createElement("p");
  const navBar = document.createElement("div");
  navBar.classList.add("navbar");
  const home = document.createElement("a");
  const contact = document.createElement("a");
  home.setAttribute('href', '#');
  home.setAttribute('id', 'home');
  contact.setAttribute('href', '#');
  contact.setAttribute('id', 'contact');
  title.textContent = "Menu";
  description.textContent = "All items served with fries and a drink";
  item1.textContent = "Burger.......$10";
  item2.textContent = "Cheeseburger.......$11";
  item3.textContent = "Veggie Burger.......$10";
  item4.textContent = "Chicken Sandwich.......$12";
  home.textContent = "Home";
  contact.textContent = "Contact";
  content.append(navBar, title, description, item1, item2, item3, item4);
  navBar.append(home, contact);
}