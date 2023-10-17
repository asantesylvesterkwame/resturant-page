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
  homeLink.style.cssText = "border-bottom: 2px solid #fff";

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
    homeLink.style.cssText = "border-bottom: 2px solid #fff";
    menuSection.style.display = "none";
    menuLink.style.cssText = "border-bottom: none";

    contactSection.style.display = "none";
    contactLink.style.cssText = "border-bottom: none";
  }
  function switchToMenu() {
    homeSection.style.display = "none";
    homeLink.style.cssText = "border-bottom: none";

    menuSection.style.display = "block";
    menuLink.style.cssText = "border-bottom: 2px solid #fff";

    contactSection.style.display = "none";
    contactLink.style.cssText = "border-bottom: none";
  }
  function switchToContact() {
    homeSection.style.display = "none";
    homeLink.style.cssText = "border-bottom: none";

    menuSection.style.display = "none";
    menuLink.style.cssText = "border-bottom: none";

    contactSection.style.display = "block";
    contactLink.style.cssText = "border-bottom: 2px solid #fff";
  }

  homeLink.addEventListener("click", switchToHome);
  menuLink.addEventListener("click", switchToMenu);
  contactLink.addEventListener("click", switchToContact);

  return navDiv;
};

export default Navbar;
