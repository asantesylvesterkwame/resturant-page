import "./ContactContent.css";
import mapsImage from "../../../assets/maps.jpg";

const ContactContent = () => {
  const mainDiv = document.createElement("div");
  mainDiv.className = "main";
  mainDiv.classList.add("fade-in");
  mainDiv.id = "HomeSectionDiv";

  const container = document.createElement("div");
  container.className = "contactContainer";
  mainDiv.appendChild(container);

  const aboutParagragh = document.createElement("p");
  aboutParagragh.innerHTML = "📞 123 456 7890";
  container.appendChild(aboutParagragh);

  const sloganParagragh = document.createElement("p");
  sloganParagragh.innerHTML = "🏠 Airport City, Accra, Ghana";
  container.appendChild(sloganParagragh);

  const image = new Image();
  image.src = mapsImage;
  image.className = "mapsImage";
  container.appendChild(image);

  return mainDiv;
};

export default ContactContent;
