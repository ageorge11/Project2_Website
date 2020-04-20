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

