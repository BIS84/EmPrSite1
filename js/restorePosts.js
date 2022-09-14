"use strict";

function restorePosts() {

    let elem = document.getElementsByClassName("post");

    for(let i = 0; i < elem.length; i++) {
        elem[i].style.display = "grid";
    };
    
    // {
    //     elem[i].style.display = "grid";
    // }
}