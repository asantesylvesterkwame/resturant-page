import "./MenuContent.css";
import MeatBurger from "../../../assets/burger1.jpg";
import CheeseBurger from "../../../assets/burger3.jpg";
import ChickenBurger from "../../../assets/burger2.jpg";

const foodDetails = (imageSrc, foodName, packageDetailsText) => {
  const foodMenuDiv = document.createElement("div");
  
  foodMenuDiv.className = "foodMenuDiv";

  const foodImage = new Image();
  foodImage.src = imageSrc;
  foodImage.alt = "Food image";
  foodImage.className = "foodImage";
  foodMenuDiv.appendChild(foodImage);

  const titleFoodMenu = document.createElement("h2");
  titleFoodMenu.textContent = foodName;
  titleFoodMenu.className = "food-name";
  foodMenuDiv.appendChild(titleFoodMenu);

  const packageDetails = document.createElement("p");
  packageDetails.className = "packageDetails";
  packageDetails.innerHTML = packageDetailsText;
  foodMenuDiv.appendChild(packageDetails);

  return foodMenuDiv;
};

const MenuContent = () => {
  const main = document.createElement("div");
  main.className = "mainMenuDiv";

  const container = document.createElement("div");
  container.className = "foodMenuContainer";
  container.classList.add("fade-in");
  main.appendChild(container);

  container.appendChild(
    foodDetails(
      MeatBurger,
      "Meat Burger",

      "400g of Beef,<br/> Mozarella, Tomato<br/>Homemade sausage, Garlic, Basil"
    )
  );

  container.appendChild(
    foodDetails(
      CheeseBurger,
      "Cheese Burger",

      "400g of Cheese,<br/>Homemade sausage, Garlic, Basil"
    )
  );
  container.appendChild(
    foodDetails(
      ChickenBurger,
      "Cheese Burger",

      "400g of Cheese,<br/>Homemade sausage, Garlic, Basil"
    )
  );

  container.appendChild(
    foodDetails(
      MeatBurger,
      "Meat Burger",

      "400g of Beef,<br/> Mozarella, Tomato<br/>Homemade sausage, Garlic, Basil"
    )
  );

  return main;
};

export default MenuContent;
