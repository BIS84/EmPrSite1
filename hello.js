"use strict";

const youName = window.prompt('Введите Ваше имя', 'Игорь');
let age = window.prompt('Сколько Вам лет?', 18);
if (age < 25) {
    // window.alert(`Привет, ${youName}!`);
    document.getElementById("adver1").innerHTML += `<div class="hi-h3"><h3>Привет, ${youName}!</h3></div>`;
} else if (age < 60) {
    // window.alert(`Здравствуйте, ${youName}!`);
    document.getElementById("adver1").innerHTML += `<div class="hi-h3"><h3>Здравствуйте, ${youName}!</h3></div>`;
} else {
    // window.alert(`Спасибо, что посетили нас, уважаемый ${youName}!`);
    document.getElementById("adver1").innerHTML += `<div class="hi-h3"><h3>Рады видеть Вас, уважаемый ${youName}!</h3></div>`;
}

document.getElementById("adver1").innerHTML += `<div class="formLogin">
    <form>
        <input class="login" type="text" placeholder="Логин">
        <hr>
        <input class="password" type="password" placeholder="Пароль">
        <hr>
        <button class="loginButton" type="submit">
            <a href="#">Авторизоваться</a>
        </button>
    </form>
</div>`;

const changeImages = () => {
    const styleAdverImg2 = document.getElementById("adver-img2").getAttribute("style");
    if (styleAdverImg2 === "background-image: url(./img/cottage.png)") {
        document.getElementById("adver-img2").setAttribute("style", "background-image: url(./img/cottage2.png)");
        document.getElementById("adver-img3").setAttribute("style", "background-image: url(./img/lake2.png)");
    } else if (styleAdverImg2 === "background-image: url(./img/cottage2.png)") {
        document.getElementById("adver-img2").setAttribute("style", "background-image: url(./img/cottage3.png)");
        document.getElementById("adver-img3").setAttribute("style", "background-image: url(./img/lake3.png)");
    } else {
        document.getElementById("adver-img2").setAttribute("style", "background-image: url(./img/cottage.png)");
        document.getElementById("adver-img3").setAttribute("style", "background-image: url(./img/lake.png)");
    }
}