import { frontPage } from "./frontPage";
import { contentNav, menuNav, aboutNav, contactNav } from "./tabs";
import { aboutPage } from "./about";
import { contentPage } from "./content"
import { menuPage } from "./menu";
import { myFooter } from "./footer";
import { contactPage } from "./contact";

const nevvi = document.createElement('nav')
nevvi.style.border = "solid"
nevvi.style.width = "auto"
nevvi.style.margin = "15px"
nevvi.style.padding = "10px"
nevvi.style.display = "flex"
nevvi.style.justifyContent = "flex-start"


let { contentButton } = contentNav()
let { menuButton } = menuNav()
let { aboutButton } = aboutNav()
let { contactButton } = contactNav()

let contentContent = contentPage()
let aboutContent = aboutPage()
let menuContent = menuPage()
let contactContent = contactPage()

console.log(contentPage());

contentButton.addEventListener('click', () => tabber(contentContent))
aboutButton.addEventListener('click', () => tabber(aboutContent))
menuButton.addEventListener('click', () => tabber(menuContent))
contactButton.addEventListener('click', () => tabber(contactContent))


nevvi.appendChild( contentButton )
nevvi.appendChild( menuButton )
nevvi.appendChild( aboutButton )
nevvi.appendChild( contactButton )

const main = document.getElementById('content')
main.style.width = "800px"
main.style.height = "100%"
main.style.border = "dotted"

const splashPage = frontPage()
splashPage.style.border = "solid"

const page = document.createElement('div')
page.id = "page"
page.style.margin = "20px"

main.append(nevvi)
main.append(page)

page.append(splashPage)

const footer = myFooter()
main.appendChild(footer)

function tabber(nextPage) {
    let currentPage = page.childNodes[0]
    page.removeChild(currentPage)
    page.appendChild(nextPage)
}