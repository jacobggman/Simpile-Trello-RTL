
function setTextDescriptionRight() {
    const els = document.getElementsByClassName("ua-chrome ProseMirror");

    Array.from(els).forEach((el) => {
        el.style.direction = "rtl";
    });
}

// run every 100 ms
const setBoardRightInterval = setInterval(setBoardRight, 100);

function setBoardRight() {
    const els = document.getElementsByClassName("board-main-content");
    Array.from(els).forEach((el) => {
        el.style.direction = "rtl";
        clearInterval(setBoardRightInterval);
    });
}

document.body.addEventListener('click', setTextDescriptionRight, true);
setTextDescriptionRight();