//Image List - from the local floder
var imageList = ["./mathew/1.jpg", "./mathew/2.jpg", "./mathew/3.jpg", "./mathew/4.jpg", "./mathew/5.jpg",
"./mathew/6.jpg", "./mathew/7.jpg", "./mathew/8.jpg", "./mathew/9.jpg", "./mathew/10.jpg",
"./mathew/11.jpg", "./mathew/12.jpg", "./mathew/13.jpg", "./mathew/14.jpg", "./mathew/15.jpg",
"./mathew/16.jpg", "./mathew/17.jpg", "./mathew/18.jpg", "./mathew/19.jpg", "./mathew/20.jpg",
"./mathew/21.jpg", "./mathew/22.jpg", "./mathew/23.jpg", "./mathew/24.jpg", "./mathew/25.jpg",
"./mathew/26.jpg", "./mathew/27.jpg", "./mathew/28.jpg", "./mathew/29.jpg", "./mathew/30.jpg",];

// Run when the page is loaded
window.onload = function () {
    addImage(imageList);
}

//Function to load all the images mentioned in the ImageList 
function addImage(imageArray) {

    var main = document.getElementById("images");

    //Looping through all the values in the array
    imageArray.forEach((element) => {
        child = document.createElement("div");
        child.className = "image";
        child.innerHTML = "<img src=\"" + element + "\"></img>" + "<div class=\"buttons\">"
            + "<div class=\"button\" onclick=\"resize(this)\"> Medium </div>"
            + "<div class=\"button\" onclick=\"toTop(this)\"> Top </div>"
            + "<div class=\"button\" onclick=\"toLeft(this)\"> Left </div>"
            + "<div class=\"button\" onclick=\"toRight(this)\"> Right </div>"
            + "<div class=\"button\" onclick=\"toBottom(this)\"> Bottom </div>" + "</div>";
            //added the images and buttons required

        // adding as a child div under images div 
        main.append(child);
    });
}

//To clear all the images
function clearImages() {
    var main = document.getElementById("images");
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}

//resizes the images to large medium and small
function resize(element) {
    var img = element.parentNode.previousSibling;
    var imgSize = element.innerHTML;

    if (imgSize == " Medium ") {
        element.innerHTML = " Large "
        img.style.width = "60%";
    }
    else if (imgSize == " Large ") {
        element.innerHTML = " Small "
        img.style.width = "80%";
    }
    else if (imgSize == " Small ") {
        element.innerHTML = " Medium "
        img.style.width = "40%";
    }
}

//moves the image to the begining
function toTop(element) {
    var img = element.parentNode.previousSibling.getAttribute("src");
    var imgIndex = imageList.indexOf(img);

    imageList.splice(imgIndex, 1);
    imageList.unshift(img);

    clearImages();
    addImage(imageList);
}

//moves the image to last
function toBottom(element) {
    var img = element.parentNode.previousSibling.getAttribute("src");
    var imgIndex = imageList.indexOf(img);

    imageList.splice(imgIndex, 1);
    imageList.push(img);

    clearImages();
    addImage(imageList);
}

//moves the image 1 position up
function toLeft(element) {
    var img = element.parentNode.previousSibling.getAttribute("src");
    var imgIndex = imageList.indexOf(img);

    if (imgIndex > 0) {
        swap(imageList, imgIndex, imgIndex - 1)
    }

    clearImages();
    addImage(imageList);
}

//moves the image 1 position down
function toRight(element) {
    var img = element.parentNode.previousSibling.getAttribute("src");
    var imgIndex = imageList.indexOf(img);

    if (imgIndex < imageList.length - 1) {
        swap(imageList, imgIndex, imgIndex + 1)
    }

    clearImages();
    addImage(imageList);
}

function swap(array, fromIndex, toIndex) {
    var temp = array[fromIndex];
    array[fromIndex] = imageList[toIndex];
    array[toIndex] = temp;
}