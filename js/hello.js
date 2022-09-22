"use strict";

const youName = window.prompt('Введите Ваше имя', 'Игорь');
let age = window.prompt('Сколько Вам лет?', 18);
if (age < 25) {
    document.getElementById("loginPass").innerHTML += `<div class="hi-h3"><h3>Привет, ${youName}!</h3></div>`;
} else if (age < 60) {
    document.getElementById("loginPass").innerHTML += `<div class="hi-h3"><h3>Здравствуйте, ${youName}!</h3></div>`;
} else {
    document.getElementById("loginPass").innerHTML += `<div class="hi-h3"><h3>Рады видеть Вас, уважаемый ${youName}!</h3></div>`;
}

document.getElementById("loginPass").innerHTML += `<div class="formLogin">
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

