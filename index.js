const API = "http://localhost:3000/breweries";
let arrayPlaceholder = 0;

//setting variable data to be able to display the images that we need to later in the code.
const image1 = "assets/10Barrel.png";
const image2 = "assets/14erBrewery.png";
const image3 = "assets/AlpineDog.png";
const image4 = "assets/Alternation.png";
const image5 = "assets/Amalgam.png";
const image6 = "assets/Baere.png";
const image7 = "assets/BandedOak.png";
const image8 = "assets/BierstadtGlass.png";

//fetching the API and allowing any code within to be able to retrieve API data.
fetch(API)
.then(res => res.json())
.then(data => {
    const leftArrow = document.getElementById("left-arrow");
/* Since we want the beer images to cycle, if we're at index 0 in our array of objects
and we want to cycle over to the end of the array to display the last image instead
of having a negative array value, we will ensure that our value will reset to the
length of the array. */
    leftArrow.addEventListener("click", event => {
        --arrayPlaceholder;
        if(arrayPlaceholder < 0){
            arrayPlaceholder = data.length - 1;
        } //end loop checker

/* Now that our click event can detect if we've reached the bottom limit of our array
we can grab the image source and change it on the page corresponsing to our position
in the loop. */

        const beerImage = document.getElementById("beer-image");

/* Add switch statement to change the image so that we can display the appropriate
image that corresponds to our position in the array. */
        switch(arrayPlaceholder){
            case 0:
                beerImage.src = image1;
                break;
            case 1:
                beerImage.src = image2;
                break;
            case 2:
                beerImage.src = image3;
                break;
            case 3:
                beerImage.src = image4;
                break;
            case 4:
                beerImage.src = image5;
                break;
            case 5:
                beerImage.src = image6;
                break;
            case 6:
                beerImage.src = image7;
                break;
            case 7:
                beerImage.src = image8;
                break;
        } // End switch statement.
    }); // End left click event.

/* Since we want the beer images to cycle at both 0 and the length, if we're at
index.length in our array of objects, we want to cycle over to the beginning of the
array to display the first image instead of having an array value that goes beyond
the length, we will ensure that our value will reset to 0 if our length is exceeded. */
    const rightArrow = document.getElementById("right-arrow");
    rightArrow.addEventListener("click", event => {
        ++arrayPlaceholder;
        if(arrayPlaceholder == data.length){
            arrayPlaceholder = 0;
        } // End loop checker.

/* Now that our click event can detect if we've reached the upper limit of our array
we can grab the image source and change it to the appropriate image on our page. */

        const beerImage = document.getElementById("beer-image");

// Switch statement to detect where we are in the loop and display the appropriate image.
        switch(arrayPlaceholder){
            case 0:
                beerImage.src = image1;
                break;
            case 1:
                beerImage.src = image2;
                break;
            case 2:
                beerImage.src = image3;
                break;
            case 3:
                beerImage.src = image4;
                break;
            case 4:
                beerImage.src = image5;
                break;
            case 5:
                beerImage.src = image6;
                break;
            case 6:
                beerImage.src = image7;
                break;
            case 7:
                beerImage.src = image8;
                break;
        } // End switch statement.
    }); // End rightArrow event listener.

    window.addEventListener("keydown", checkKeyPressedLeft, false);

    function checkKeyPressedLeft(keyPressed) {
/* JavaScript has a unique keycode for each key pressed, 37 is the value for the left
arrow key so we add a listener to check if that key is pressed and execute the code
below. */
        if (keyPressed.keyCode == "37") {
            --arrayPlaceholder;
        if(arrayPlaceholder < 0){
            arrayPlaceholder = data.length - 1;
        } // End loop checker.

/* Now that our click event can detect if we've reached our bottom limit of our array
we can grab the image source and change it on the page. */

        const beerImage = document.getElementById("beer-image");

/* Since we want the beer images to cycle, if we're at index 0 in our array of objects
and we want to cycle over to the end of the array to display the last image instead
of having a negative array value, we will ensure that our value will reset to the
length of the array. */
        switch(arrayPlaceholder){
            case 0:
                beerImage.src = image1;
                break;
            case 1:
                beerImage.src = image2;
                break;
            case 2:
                beerImage.src = image3;
                break;
            case 3:
                beerImage.src = image4;
                break;
            case 4:
                beerImage.src = image5;
                break;
            case 5:
                beerImage.src = image6;
                break;
            case 6:
                beerImage.src = image7;
                break;
            case 7:
                beerImage.src = image8;
                break;
        } // End switch.
    }; // End left keypress event.
    } // End leftkeypress function.

    window.addEventListener("keydown", checkKeyPressedRight, false);

    function checkKeyPressedRight(keyPressed) {
/* JavaScript has a unique keycode for each key pressed, 39 is the value for the right
arrow key so we add a listener to check if that key is pressed and execute the code
below. */
        if (keyPressed.keyCode == "39") {
            ++arrayPlaceholder;
            if(arrayPlaceholder == data.length){
                arrayPlaceholder = 0;
            } // End loop checker.
        } // End loop checker.

/* Now that our click event can detect if we've hit the upper limit of our array
we can grab the image source of the appropriate image and change it on the page. */
        const beerImage = document.getElementById("beer-image");

        switch(arrayPlaceholder){
            case 0:
                beerImage.src = image1;
                break;
            case 1:
                beerImage.src = image2;
                break;
            case 2:
                beerImage.src = image3;
                break;
            case 3:
                beerImage.src = image4;
                break;
            case 4:
                beerImage.src = image5;
                break;
            case 5:
                beerImage.src = image6;
                break;
            case 6:
                beerImage.src = image7;
                break;
            case 7:
                beerImage.src = image8;
                break;
        } // End switch.
    }; // End right keypress event.

// Mouseover events to change the image of the arrows on the page.
    leftArrow.addEventListener("mouseenter", changeArrowStyleLeft1);
    function changeArrowStyleLeft1(){
        leftArrow.src = "assets/ModeloLeft.png";
    }
    leftArrow.addEventListener("mouseleave", changeArrowStyleLeft2);
    function changeArrowStyleLeft2(){
        leftArrow.src = "assets/LeftArrow.png";
    }
    rightArrow.addEventListener("mouseenter", changeArrowStyleRight1);
    function changeArrowStyleRight1(){
        rightArrow.src = "assets/ModeloRight.png";
    }
    rightArrow.addEventListener("mouseleave", changeArrowStyleRight2);
    function changeArrowStyleRight2(){
        rightArrow.src = "assets/RightArrow.png";
    }

/* Generate all of the beer images at the top of the page and adding links their
external websites. */
    let i = 1;
    data.forEach(data => {
        console.log(data.website_url);
        const newBeerImage = document.createElement("img");
        newBeerImage.src = eval("image" + i);
        newBeerImage.id = "beer-" + i;
        newBeerImage.className = "beer";
            newBeerImage.addEventListener("click", event => {
                window.open(data.website_url);
            }) // End adding event listeners for everything.
        document.getElementById("picture-row").appendChild(newBeerImage);
        ++i;
    }); // End forEach.
}); // End fetch call.