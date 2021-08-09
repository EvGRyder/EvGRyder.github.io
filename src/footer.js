function myFooter() {
    const footer = document.createElement('footer')
    footer.textContent = "This is Footer McFoot"

    footer.style.backgroundColor = "LightGreen"
    footer.style.position = "absolute"
    footer.style.bottom = "0"
    footer.style.left = "0"
    footer.style.right = "0"
    footer.style.padding = "5px"
    footer.style.width = "auto"
    footer.style.height = "40px"


    return footer
}


export { myFooter }