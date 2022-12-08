const API = "https://api.openbrewerydb.org/breweries?by_city=denver&per_page=10";

fetch("https://api.openbrewerydb.org/breweries?by_city=denver&per_page=10")
.then(res => res.json())
.then(data => {
    const leftArrow = document.getElementById("left-arrow")
    leftArrow.addEventListener("click", handleClick)
    })

// const leftArrow = document.getElementById("left-arrow")

// leftArrow.addEventListener("click", (event) => {
//     console.log("submitted")
//     // handleClick(e)
// })

const handleClick = (bottleObj) => {
 const bottleImg1 = document.getElementById("bottle-image1")
 const bottleImg2 = document.getElementById("bottle-image2")
 const bottleImg3 = document.getElementById("bottle-image3")
 const bottleImg4 = document.getElementById("bottle-image4")
 const bottleImg5 = document.getElementById("bottle-image5")
 const bottleImg6 = document.getElementById("bottle-image6")
 const bottleImg7 = document.getElementById("bottle-image7")
 const bottleImg8 = document.getElementById("bottle-image8")
 
}