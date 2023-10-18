import "./HomeContent.css";
import homeImage from "../../../assets/chef.jpg"

const HomeContent = () => {
  const mainDiv = document.createElement("div");
  mainDiv.className = "main";
  mainDiv.classList.add("fade-in");

  mainDiv.id = "HomeSectionDiv";

  const container = document.createElement("div");
  container.className = "container";
  mainDiv.appendChild(container);

  const aboutParagragh = document.createElement("p");
  aboutParagragh.innerHTML = "Best Burger in your country";
  container.appendChild(aboutParagragh);

  const sloganParagragh = document.createElement("p");
  sloganParagragh.innerHTML = "Made with passion since 1902";
  container.appendChild(sloganParagragh);

  const image = new Image();
  image.src = homeImage;
  image.className = "chefImage";
  container.appendChild(image);

  const conclusionDiv = document.createElement("p");
  conclusionDiv.innerHTML = "Order Online or Visit Us"
  container.appendChild(conclusionDiv);

  return mainDiv;
};

export default HomeContent;
