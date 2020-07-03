// Activates the image gallery.
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click.
function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo img");



  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      // Set clicked image as main image.
      let newImageSrc = thumbnail.dataset.largeVersion;
      mainImage.setAttribute("src", newImageSrc);

      // Change which image is current.
      document.querySelector(".current").classList.remove("current");
      thumbnail.parentNode.classList.add("current");

      // Update image info.
      let galleryInfo = document.querySelector("#gallery-info");
      let title = galleryInfo.querySelector(".title");
      let description = galleryInfo.querySelector(".description");

      title.innerHTML = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;

    });
  });
}


// let newTitle = thumbnail.dataset.title;
// mainTitle.setAttribute(newTitle);
//
// let newDescription = thumbnail.dataset.description;
// mainDescription.setAttribute(newDescription);


// // Activates the image gallery.
// // The main task is to attach an event listener to each image in the gallery
// // and respond appropriately on click.
//
// function activateGallery() {
//   let thumbnails = document.querySelector("#gallery-thumbs").
//                             querySelectorAll("img");
//   let mainImage = document.querySelector("#gallery-photo img");
//
//   thumbnails.forEach(function(thumbnail) {
//     thumbnail.addEventListener("click", function() {
//       // Set clicked image as main image.
//       let newImageSrc = thumbnail.dataset.largeVersion;
//       mainImage.setAttribute("src", newImageSrc);
      //
      //
      // // Change which image is current.
      // document.querySelector(".current").classList.remove("current");
      // thumbnail.parentNode.classList.add("current");
      //
      // // // Set clicked image as gallery info
      // // let newTitle = thumbnail.dataset.title;
      // // mainTitle.setAttribute(nodeValue, newTitle);
//     });
//   });
      // altDescription.forEach(function(descript) {
      //   descript.addEventListener("click", function() {
      //     // Set clicked image as info.
      //     let newDescript = descript.dataset.description;
      //     altDescription.setAttribute(newDescript);
      //   });
      // });
      //
      // altDescription.forEach(function(alt))
// }
