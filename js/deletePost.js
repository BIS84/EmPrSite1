"use strict";

let postsDel = [];

function deletePost(id) {
    
    document.getElementById(id).remove();

    let index = posts.indexOf(posts.find(el => el.id === id));

    postsDel.push(posts[index]);

    posts.splice(id - 1, 1);
}