export const Navbar = () => {
    let backgroundDiv = document.createElement("div");
    let mainContentDiv = document.getElementById("content");
    
    mainContentDiv.append(backgroundDiv);

    backgroundDiv.style.cssText = " background-color: #0074D9;  ";

    let backgroundImg = document.createElement("img");
    backgroundDiv.appendChild(backgroundImg);
    backgroundImg.setAttribute("src", "")

    let logoDiv = document.createElement("div");
    backgroundDiv.appendChild(logoDiv);
    logoDiv.style.cssText = ": ;"

    let logo = document.createElement("h1");
    logoDiv.appendChild(logo);
    logo.innerText = "The Boat"
    logo.style.cssText = "font-family: poppins, sans serif; color: white; text-align: center;";

    let tabsDiv = document.createElement("div");
    backgroundDiv.appendChild(tabsDiv);
    tabsDiv.style.cssText = " display:flex; justify-content: center; align-items: center; gap: 1em; padding:1em;"

    let homeTabDiv = document.createElement("div")
    tabsDiv.appendChild(homeTabDiv);
    let homeTabDivText = document.createElement("h3")
    homeTabDiv.appendChild(homeTabDivText)
    homeTabDivText.innerText = "Home"
    homeTabDiv.style.cssText = ""

    let menuTabDiv = document.createElement("div");
    tabsDiv.appendChild(menuTabDiv);
    let menuTabText = document.createElement("h3");
    tabsDiv.appendChild(menuTabText);
    menuTabText.innerText = "Menu"
    menuTabText.style.cssText = ""

    let contactTabDiv = document.createElement("div");
    tabsDiv.appendChild(contactTabDiv);
    let contactTabText = document.createElement("h3");
    contactTabDiv.appendChild(contactTabText);
    contactTabText.innerText = "Contact";





    



} 