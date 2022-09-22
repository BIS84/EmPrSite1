"use strict";

let id = posts.length + 1;

function CreateNewPost() {

    let fullDate = new Date();
    let year = fullDate.getFullYear();
    let month = fullDate.getMonth() + 1;
    let date = fullDate.getDate();

    if (month / 10 < 1) month = `0${month}`;

    if (date / 10 < 1) date = `0${date}`;

    let nowDate = `${date}-${month}-${year}`;
    let title = document.getElementById("newTitle").value;
    let content = document.getElementById("newContent").value;

    posts[id - 1] = {
        id: id,
        date: nowDate,
        title: title,
        content: content
    
    }

    document.getElementById("posts").insertAdjacentHTML("afterbegin", `
            <article class="post" id="${id}">
                <div class="post__title">
                    <div>
                        <p class="post__title--p">${nowDate} <span class="post__title--span">|</span></p>
                    </div>
                    <div>
                        <p>${title}</p>
                    </div>
                    <div>
                        <p><span class="post__title--span">|</span> ${id}</p>
                    </div>
                </div>
                <div class="post__content">
                    <p class="post__text">${content}</p>
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
                        <button class="butt-delete" onclick="deletePost(${id})">Удалить</button>
                    </div>
                </div>
            </article>
            `)
    id++;
};