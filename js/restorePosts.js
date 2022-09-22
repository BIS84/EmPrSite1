"use strict";

function restorePosts() {

    console.log(postsDel);

    for (let i = postsDel.length - 1; i >= 0; i--) {

        document.getElementById("posts").insertAdjacentHTML("afterbegin", `
            <article class="post" id="${postsDel[i].id}">
                <div class="post__title">
                    <div>
                        <p class="post__title--p">${postsDel[i].date} <span class="post__title--span">|</span></p>
                    </div>
                    <div>
                        <p>${postsDel[i].title}</p>
                    </div>
                    <div>
                        <p><span class="post__title--span">|</span> ${postsDel[i].id}</p>
                    </div>
                </div>
                <div class="post__content">
                    <p class="post__text">${postsDel[i].content}</p>
                </div>
                <div class="post__footer">
                    <div class="post__right">
                        <div>
                            <p>Автор</p>
                        </div>
                        <div>
                            <p>Теги</p>
                        </div>
                    </div>
                    <div class="post__left">
                        <button class="butt-open">Открыть</button>
                        <button class="butt-delete" onclick="deletePost(${postsDel[i].id})">Удалить</button>
                    </div>
                </div>
            </article>`
        );
        posts.push(postsDel[i]);
    };

    postsDel = [];
}