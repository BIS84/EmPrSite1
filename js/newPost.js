"use strict";

let id = 11;

let createNewPost = () => {

    let fullDate = new Date();
    let year = fullDate.getFullYear();
    let month = fullDate.getMonth() + 1;
    let date = fullDate.getDate();

    if (month/10 < 1) month = `0${month}`;

    if (date/10 < 1) date = `0${date}`;

    let nowData = `${date}-${month}-${year}`;
    let title = document.getElementById("newTitle").value;
    let content = document.getElementById("newContent").value;

    document.getElementById("posts").insertAdjacentHTML("afterbegin",  `
            <article class="post">
                <div class="post__title">
                    <div>
                        <p class="post__title--p">${nowData} <span class="post__title--span">|</span></p>
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
                        <button class="post__left-button">Continue Reading</button>
                    </div>
                </div>
            </article>
            `)
    id++;
};