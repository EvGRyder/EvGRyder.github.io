const dish = (name, price) => {
    const container = document.createElement('div')
    container.textContent = `${name} at ${price}$`
    container.style.margin = "5px"
    container.style.textDecoration = "underline"

    
    return container
} 


function menuPage() {
    const menuContent = document.createElement('div') 
    const menuTitle = document.createElement('h3')
    menuTitle.textContent = "MENU"
    menuContent.appendChild(menuTitle)

    menuContent.appendChild(dish("Hashes", 20))
    menuContent.appendChild(dish("Cookies", 20))
    menuContent.appendChild(dish("Straight up weed", 20))
    menuContent.appendChild(dish("Gummy bears", 20))

    return menuContent
}


export { menuPage }