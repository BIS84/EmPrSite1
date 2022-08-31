const youName = window.prompt('Введите Ваше имя', 'Игорь');
let age = window.prompt('Сколько Вам лет?', 25);
if (age < 25) {
    window.alert(`Привет, ${youName}!`);
} else if (age < 60) {
    window.alert(`Здравствуйте, ${youName}!`);
} else {
    window.alert(`Спасибо, что посетили нас, уважаемый ${youName}!`);
}

const changeImages = () => {
    const styleAdverImg2 = document.getElementById("adver-img2").getAttribute("style");
    if (styleAdverImg2 === "background-image: url(./img/cottage.png)"){
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