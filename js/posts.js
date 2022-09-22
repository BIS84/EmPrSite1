"use strict";

let numberOfPosts = +window.prompt('Сколько постов выводить на странице? От 1 до 10', '2');


let createPosts = () => {

    if (numberOfPosts >= 0 && numberOfPosts <= 10) {

        for (let i = 0; i < numberOfPosts; i++) {

            document.getElementById("posts").insertAdjacentHTML("afterbegin", `
            <article class="post" id="${posts[i].id}">
                <div class="post__title">
                    <div>
                        <p class="post__title--p">${posts[i].date} <span class="post__title--span">|</span></p>
                    </div>
                    <div hidden>
                        <p>${posts[i].title}</p>
                    </div>
                    <div>
                        <p><span class="post__title--span">|</span> ${posts[i].id}</p>
                    </div>
                </div>
                <div class="post__content">
                    <p class="post__text">${posts[i].content}</p>
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
                        <button class="butt-delete" onclick="deletePost(${posts[i].id})">Удалить</button>
                    </div>
                </div>
            </article>
            `)
        }
    } else {
        document.getElementById("posts").innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/O-DphqOtKrc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 20px;"></iframe>`
    }
};

createPosts();