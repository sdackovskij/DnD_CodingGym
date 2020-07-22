const dragstart = function (event) {
  event.dataTransfer.setData("text", event.target.id);
};
const dragover = function (event) {
  if (event.target.nodeName.toLowerCase() === "img") {
    return true;
  }
    event.preventDefault();
};
const drop = function (event) {
  event.preventDefault();
  let imageId = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(imageId));
};

const cells = document.querySelectorAll(".cell");
Array.from(cells).forEach((items) => {
  items.addEventListener("dragover", dragover);
  items.addEventListener("drop", drop);
});

const images = document.querySelectorAll("img");
Array.from(images).forEach((items) => {
  items.addEventListener("dragstart", dragstart);
});
