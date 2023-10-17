import bgImageFile from "../assets/bgImage.jpg";
import ContactContent from "./components/ContactContent/ContactContent";
import HomeContent from "./components/HomeContent/HomeContent";
import MenuContent from "./components/MenuContent/MenuContent";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";

const Home = () => {
  let main = document.createElement("div");
  main.id = "main";

  const NavbarDiv = document.getElementById("NavbarDiv");

  NavbarDiv.appendChild(Navbar());

  const homeSection = document.getElementById("HomeSectionDiv");
  homeSection.appendChild(HomeContent());

  const menuSection = document.getElementById("menuSection");
  menuSection.appendChild(MenuContent());
  menuSection.style.display = "none";


  const contactSection = document.getElementById("contactSection");
  contactSection.appendChild(ContactContent());
  contactSection.style.display = "none";

  //   main.appendChild(MenuContent());

  const footer = document.createElement("div");

    // const image = new Image()
    // image.src = bgImageFile
    // image.className = "bgImage"
    // main.appendChild(image)

  return main;
};

const content = document.getElementById("content");
content.appendChild(Home());
