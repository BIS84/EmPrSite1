"use strict";

let changeImagesOneLeft = () => {
    const styleAdverImg2 = document.getElementById("adver-img2").getAttribute("style");
    if (styleAdverImg2 === "background-image: url(../img/cottage.png)" || styleAdverImg2 === null) {
        document.getElementById("adver-img2").setAttribute("style", "background-image: url(../img/cottage3.png)");
    } else if (styleAdverImg2 === "background-image: url(../img/cottage3.png)") {
        document.getElementById("adver-img2").setAttribute("style", "background-image: url(../img/cottage2.png)");
    } else {
        document.getElementById("adver-img2").setAttribute("style", "background-image: url(../img/cottage.png)");
    }
};

let changeImagesOneRight = () => {
    const styleAdverImg2 = document.getElementById("adver-img2").getAttribute("style");
    if (styleAdverImg2 === "background-image: url(../img/cottage.png)" || styleAdverImg2 === null) {
        document.getElementById("adver-img2").setAttribute("style", "background-image: url(../img/cottage2.png)");
    } else if (styleAdverImg2 === "background-image: url(../img/cottage2.png)") {
        document.getElementById("adver-img2").setAttribute("style", "background-image: url(../img/cottage3.png)");
    } else {
        document.getElementById("adver-img2").setAttribute("style", "background-image: url(../img/cottage.png)");
    }
};

let changeImagesTwoLeft = () => {
    const styleAdverImg3 = document.getElementById("adver-img3").getAttribute("style");
    if (styleAdverImg3 === "background-image: url(../img/lake.png)" || styleAdverImg3 === null) {
        document.getElementById("adver-img3").setAttribute("style", "background-image: url(../img/lake3.png)");
    } else if (styleAdverImg3 === "background-image: url(../img/lake3.png)") {
        document.getElementById("adver-img3").setAttribute("style", "background-image: url(../img/lake2.png)");
    } else {
        document.getElementById("adver-img3").setAttribute("style", "background-image: url(../img/lake.png)");
    }
};

let changeImagesTwoRight = () => {
    const styleAdverImg3 = document.getElementById("adver-img3").getAttribute("style");
    if (styleAdverImg3 === "background-image: url(../img/lake.png)" || styleAdverImg3 === null) {
        document.getElementById("adver-img3").setAttribute("style", "background-image: url(../img/lake2.png)");
    } else if (styleAdverImg3 === "background-image: url(../img/lake2.png)") {
        document.getElementById("adver-img3").setAttribute("style", "background-image: url(../img/lake3.png)");
    } else {
        document.getElementById("adver-img3").setAttribute("style", "background-image: url(../img/lake.png)");
    }
};