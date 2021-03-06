//Image List - from the local floder
var imageList = ["./eldhose/1.jpg", "./eldhose/2.jpg", "./eldhose/3.jpg", "./eldhose/4.jpg", "./eldhose/5.jpg",
"./eldhose/6.jpg", "./eldhose/7.jpg", "./eldhose/8.jpg", "./eldhose/9.jpg", "./eldhose/10.jpg",
"./eldhose/11.jpg", "./eldhose/12.jpg", "./eldhose/13.jpg", "./eldhose/14.jpg", "./eldhose/15.jpg",
"./eldhose/16.jpg", "./eldhose/17.jpg", "./eldhose/18.jpg", "./eldhose/19.jpg", "./eldhose/20.jpg",
"./eldhose/21.jpg", "./eldhose/22.jpg", "./eldhose/23.jpg", "./eldhose/24.jpg", "./eldhose/25.jpg",
"./eldhose/26.jpg", "./eldhose/27.jpg", "./eldhose/28.jpg", "./eldhose/29.jpg", "./eldhose/30.jpg",];
//Image List - Online links
//var ImageList = ["https://i.picsum.photos/id/1004/5616/3744.jpg", "https://i.picsum.photos/id/1003/1181/1772.jpg", "https://i.picsum.photos/id/1001/5616/3744.jpg", "https://i.picsum.photos/id/1000/5626/3635.jpg"]

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

function toTop(element) {
    var img = element.parentNode.previousSibling.getAttribute("src");
    var imgIndex = imageList.indexOf(img);

    imageList.splice(imgIndex, 1);
    imageList.unshift(img);

    clearImages();
    addImage(imageList);
}

function toBottom(element) {
    var img = element.parentNode.previousSibling.getAttribute("src");
    var imgIndex = imageList.indexOf(img);

    imageList.splice(imgIndex, 1);
    imageList.push(img);

    clearImages();
    addImage(imageList);
}

function toLeft(element) {
    var img = element.parentNode.previousSibling.getAttribute("src");
    var imgIndex = imageList.indexOf(img);

    if (imgIndex > 0) {
        swap(imageList, imgIndex, imgIndex - 1)
    }

    clearImages();
    addImage(imageList);
}

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