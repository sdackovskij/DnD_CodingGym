const dragstartHandler = event => event.dataTransfer.setData("text", event.target.id);

const dragoverHandler = event => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
}

const dropHandler = event => {
    event.preventDefault();

    const data = event.dataTransfer.getData("text");
    document.getElementById(data).classList.add("bigPic");
    event.target.appendChild(document.getElementById(data));
}

const images = document.querySelectorAll("img");
images.forEach((element) => {
    element.addEventListener("dragstart", dragstartHandler);
} );

const cells = document.querySelectorAll(".puzzle-item");
cells.forEach((element) => {
    element.addEventListener("dragover", dragoverHandler);
    element.addEventListener("drop", dropHandler);
})