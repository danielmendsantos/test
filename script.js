const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
    colorBorder: getStyle(html, "--color-border"),
    navbarColor: getStyle(html, "--navbar-color"),
    borderPerfil: getStyle(html, "--border-perfil"),
    boxBtn: getStyle(html, "--box-btn"),




}

const lightMode = {
    bg: "#f2f2f2",
    bgPanel: "#434343",
    colorHeadings: "#3664FF",
    colorText: "#000",
    colorBorder: "#f2f2f2",
    navbarColor: "#fff",
    borderPerfil: "#ccc",
    boxBtn: "#f2f2f2"
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(lightMode) : changeColors(initialColors)
})