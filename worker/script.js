let index = 0;
displayImages();
function displayImages() {
    let i;
    const images = document.getElementsByClassName("image");
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
        images[i].style.width = "450px";
        images[i].style.height = "500px";
    }
    index++;
    if (index > images.length) {
        index = 1;
    }
    images[index - 1].style.display = "block";
    setTimeout(displayImages, 2500);
}