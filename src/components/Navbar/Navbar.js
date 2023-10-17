import { createElement } from "react";
import "./Navbar.css";

const Navbar = () => {
  const navDiv = document.createElement("div");
  navDiv.className = "navBG";

  const Logo = document.createElement("h1");
  Logo.innerHTML = "Food Mania";
  Logo.className = "logo";
  navDiv.appendChild(Logo);

  const NavLinkDiv = document.createElement("div");
  NavLinkDiv.className = "navbar-links";

  const homeLink = document.createElement("a");
  homeLink.innerHTML = "Home";
  homeLink.className = "homeLink";

  NavLinkDiv.appendChild(homeLink);

  const menuLink = document.createElement("a");
  menuLink.innerHTML = "Menu";
  menuLink.className = "menuLink";

  NavLinkDiv.appendChild(menuLink);

  const contactLink = document.createElement("a");
  contactLink.innerHTML = "Contact";
  contactLink.className = "contactLink";

  NavLinkDiv.appendChild(contactLink);

  navDiv.appendChild(NavLinkDiv);

  const homeSection = document.getElementById("HomeSectionDiv");
  const menuSection = document.getElementById("menuSection");
  const contactSection = document.getElementById("contactSection");

  function switchToHome() {
    homeSection.style.display = "block";
    menuSection.style.display = "none";
    contactSection.style.display = "none";
  }
  function switchToMenu() {
    homeSection.style.display = "none";
    menuSection.style.display = "block";
    contactSection.style.display = "none";
  }
  function switchToContact() {
    homeSection.style.display = "none";
    menuSection.style.display = "none";
    contactSection.style.display = "block";
  }



  homeLink.addEventListener("click", switchToHome);
  menuLink.addEventListener("click", switchToMenu);
  contactLink.addEventListener("click", switchToContact);

  return navDiv;
};

export default Navbar;
