const body = document.querySelector("body")
const navbar = document.querySelector("nav")
const navbarColor = document.querySelectorAll(".nav-a")
const themeDark = document.getElementById("theme-dark")
const themeLight = document.getElementById("theme-light")
const table=document.querySelector("table")
const table_Container=document.querySelector(".table-container")
body.style.backgroundColor = localStorage.getItem("theme")
navbar.style.backgroundColor = localStorage.getItem("navbar")
navbar.style.boxShadow=localStorage.getItem("border")
table.style.backgroundColor=localStorage.getItem("table")
table_Container.style.backgroundColor=localStorage.getItem("tableContainer")
var temp=localStorage.getItem("temp");

const lightTheme = () => {
    themeLight.style.display = "block"
    themeDark.style.display = "none"
    const nowTheme = localStorage.setItem("theme", "#fafbfc")
    const nowNavbarBgColor = localStorage.setItem("navbar", "#fff")
    const nowNavbarColor = localStorage.setItem("navbarColor", "#000")
    const navbarBorder=localStorage.setItem("border"," 0.5px 0.5px 0.5px #cdcdd1")
    const tablecolor=localStorage.setItem("table","#fff")
    const table_container=localStorage.setItem("tableContainer","#fff")
    const color=localStorage.setItem("color","#000")
    const Temp =localStorage.setItem("temp","0")
    body.style.backgroundColor = localStorage.getItem("theme")
    navbar.style.backgroundColor = localStorage.getItem("navbar")
    navbar.style.boxShadow=localStorage.getItem("border")
    table.style.backgroundColor=localStorage.getItem("table")
    table_Container.style.backgroundColor=localStorage.getItem("tableContainer")
    // navbarColor.style.color=localStorage.getItem("navbarColor")
    temp=localStorage.getItem("temp");
}

const darkTheme = () => {
    themeLight.style.display = "none"
    themeDark.style.display = "block"
    const nowTheme = localStorage.setItem("theme", "#131b26")
    const nowNavbarBgColor = localStorage.setItem("navbar", "#182333")
    const nowNavbarColor = localStorage.setItem("navbarColor", "#fff")
    const navbarBorder=localStorage.setItem("border"," 0.5px 0.5px 0.5px #0c0f17")
    const tablecolor=localStorage.setItem("table","#182333")
    const table_container=localStorage.setItem("tableContainer","#182333")
    const Temp =localStorage.setItem("temp","1")
    body.style.backgroundColor = localStorage.getItem("theme")
    navbar.style.backgroundColor = localStorage.getItem("navbar")
    navbar.style.boxShadow=localStorage.getItem("border")
    table.style.backgroundColor=localStorage.getItem("table")
    table_Container.style.backgroundColor=localStorage.getItem("tableContainer")
    // navbarColor.style.color=localStorage.getItem("navbarColor")
    temp=localStorage.getItem("temp");
}


themeDark.addEventListener("click", lightTheme)
themeLight.addEventListener("click", darkTheme)

console.log(temp)
if(temp=="1"){
    themeLight.style.display = "none"
    themeDark.style.display = "block" 
    console.log(temp)
}
