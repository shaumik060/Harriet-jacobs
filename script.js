// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var galleryImages = document.querySelectorAll(".gallery-image");
var currentImageIndex;

galleryImages.forEach((img, index) => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        currentImageIndex = index;
    }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Function to navigate through images
function plusSlides(n) {
    currentImageIndex += n;
    if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }
    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    }
    modalImg.src = galleryImages[currentImageIndex].src;
    captionText.innerHTML = galleryImages[currentImageIndex].alt;
}

// Allow saving the image (right-click and save functionality is inherent to browsers,
// but you can add a download button if you want more explicit control).
// For direct download, you'd typically need a server-side component or
// use the download attribute on an <a> tag if you link to the image directly.
// For simplicity, relying on browser's right-click save for now.