const scrollContainer = document.querySelector("main");

scrollContainer.addEventListener("scroll", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});