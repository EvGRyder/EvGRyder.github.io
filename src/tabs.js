
const contentNav = (() => {
    const contentButton = document.createElement('button')
    contentButton.style.margin = "5px 5px"
    contentButton.textContent = "Content"
    contentButton.addEventListener('click', () => console.log("CONTENT"))
    
    return { contentButton }
})

const menuNav = (() => {
    const menuButton = document.createElement('button')
    menuButton.style.margin = "5px 5px"
    menuButton.textContent = "Menu"
    menuButton.addEventListener('click', () => console.log("MANU"))

    
    return { menuButton }
})

const aboutNav = (() => {
    const aboutButton = document.createElement('button')
    aboutButton.style.margin = "5px 5px"
    aboutButton.textContent = "About"
    aboutButton.addEventListener('click', () => console.log("ABOOT"))
    
    
    return { aboutButton }
})

const contactNav = (() => {
    const contactButton = document.createElement('button')
    contactButton.style.margin = "5px 5px"
    contactButton.textContent = "Contact"
    contactButton.addEventListener('click', () => console.log("CONCAT"))
    
    
    return { contactButton }
})

export { contentNav, menuNav, aboutNav, contactNav }
